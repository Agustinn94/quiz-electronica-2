// ============================================================
// LÓGICA DEL PORTAL + QUIZ - No hace falta editar nada acá
// ============================================================

let db = null;
try {
  if (typeof firebaseConfig !== "undefined" && firebaseConfig.apiKey !== "PEGAR_AQUI") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
  }
} catch(e) { console.warn("Firebase:", e); }

const _MATERIA = (typeof MATERIA !== "undefined") ? MATERIA : "E1";
const _ALUMNOS_E1 = (typeof ALUMNOS_E1 !== "undefined") ? ALUMNOS_E1 : [];
const _ALUMNOS_E2 = (typeof ALUMNOS_E2 !== "undefined") ? ALUMNOS_E2 : [];
const _MINUTOS = (typeof MINUTOS !== "undefined") ? MINUTOS : 60;
const _CANT = (typeof CANTIDAD_PREGUNTAS !== "undefined") ? CANTIDAD_PREGUNTAS : 15;
const _VERSION = (typeof VERSION !== "undefined") ? VERSION : 1;
const _DRIVE = (typeof DRIVE !== "undefined") ? DRIVE : {E1:{},E2:{}};

const BANCO = _MATERIA === "E1" ? BANCO_E1 : BANCO_E2;
const ALUMNOS = _MATERIA === "E1" ? _ALUMNOS_E1 : _ALUMNOS_E2;
const TITULO = _MATERIA === "E1" ? "Electrónica 1 — 4° Año" : "Electrónica 2 — 5° Año";

let estado = { nombre:"", preguntas:[], actual:0, respuestas:{}, tiempo:_MINUTOS*60, salidas:0, terminado:false, sessionId:"" };
let timerInt = null;

function inicializar(){
  document.getElementById("home-title").textContent = TITULO;
  document.getElementById("quiz-title").textContent = "Quiz — " + TITULO;
  document.getElementById("cant-preg").textContent = _CANT;
  document.getElementById("cant-min").textContent = _MINUTOS;
  construirNombres();
  construirLinks();
  chequearVersion();
}

// ===== NAVEGACIÓN ENTRE PANTALLAS =====
function mostrar(id){
  ["screen-home","screen-teoria","screen-practica","screen-select","screen-quiz","screen-results"].forEach(s=>{
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0,0);
}

// ===== LINKS DE DRIVE =====
function construirLinks(){
  const d = _DRIVE[_MATERIA] || {};
  const tri = [["t1","1° Trimestre"],["t2","2° Trimestre"],["t3","3° Trimestre"]];
  ["teoria","practica"].forEach(sec=>{
    const cont = document.getElementById(sec+"-links");
    if(!cont) return;
    cont.innerHTML = "";
    const data = d[sec] || {};
    let hayAlguno = false;
    tri.forEach(([k,label])=>{
      if(data[k]){
        hayAlguno = true;
        const a = document.createElement("a");
        a.href = data[k]; a.target = "_blank";
        a.className = "menu-btn"; a.style.textDecoration = "none";
        a.innerHTML = `<span class="ico">📁</span><span><span class="tit">${label}</span><br><span class="des">Abrir en Google Drive</span></span>`;
        cont.appendChild(a);
      }
    });
    // Carpeta general si no hay trimestres cargados
    if(!hayAlguno && d.carpeta){
      const a = document.createElement("a");
      a.href = d.carpeta; a.target = "_blank";
      a.className = "menu-btn"; a.style.textDecoration = "none";
      a.innerHTML = `<span class="ico">📁</span><span><span class="tit">Carpeta de ${sec==="teoria"?"Teoría":"Práctica"}</span><br><span class="des">Abrir en Google Drive</span></span>`;
      cont.appendChild(a);
    }
    if(!hayAlguno && !d.carpeta){
      cont.innerHTML = '<p style="color:#7a7fa8;text-align:center;font-size:13px">Todavía no hay material cargado para esta sección.</p>';
    }
  });
}

// ===== AVISO DE NUEVA VERSIÓN =====
function chequearVersion(){
  // Guarda la versión vista; si sube, avisa que actualice
  try {
    const vista = parseInt(localStorage.getItem("version_vista_"+_MATERIA) || "0");
    if(vista && vista < _VERSION){
      document.getElementById("update-banner").classList.remove("hidden");
    }
    localStorage.setItem("version_vista_"+_MATERIA, String(_VERSION));
  } catch(e){}
}

// ===== CONTROL DE NOMBRE (una sola vez por celular) =====
function yaUsado(nombre){
  try {
    const usados = JSON.parse(localStorage.getItem("usados_"+_MATERIA) || "[]");
    return usados.includes(nombre);
  } catch(e){ return false; }
}
function marcarUsado(nombre){
  try {
    const usados = JSON.parse(localStorage.getItem("usados_"+_MATERIA) || "[]");
    if(!usados.includes(nombre)) usados.push(nombre);
    localStorage.setItem("usados_"+_MATERIA, JSON.stringify(usados));
  } catch(e){}
}

function construirNombres(){
  const namesList = document.getElementById("names-list");
  if(!namesList) return;
  namesList.innerHTML = "";
  ALUMNOS.forEach(n => {
    const b = document.createElement("button");
    b.className = "name-btn";
    b.textContent = n;
    if(yaUsado(n)){ b.disabled = true; b.textContent = n + "  (ya rendido)"; }
    else b.onclick = () => confirmarNombre(n);
    namesList.appendChild(b);
  });
}

function confirmarNombre(nombre){
  if(confirm(`¿Sos "${nombre}"?\n\nUna vez que entres, este nombre queda usado en este celular y no vas a poder volver a elegirlo. ¿Confirmás?`)){
    empezar(nombre);
  }
}

function irQuiz(){ mostrar("screen-select"); }

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}

function empezar(nombre){
  marcarUsado(nombre);
  estado.nombre = nombre;
  estado.sessionId = nombre.replace(/[^a-zA-Z0-9]/g,"_") + "_" + Date.now();
  const picked = shuffle(BANCO).slice(0, _CANT);
  estado.preguntas = picked.map(q => {
    if(q.tipo === "mc"){ const idx=q.o.map((_,i)=>i); const si=shuffle(idx); return {...q,o:si.map(i=>q.o[i]),a:si.indexOf(q.a)}; }
    if(q.tipo === "orden") return {...q,_si:shuffle(q.items.map((it,i)=>({it,oi:i})))};
    if(q.tipo === "unir") return {...q,_sr:shuffle(q.pairs.map(p=>p[1]))};
    return q;
  });
  estado.actual=0; estado.respuestas={}; estado.tiempo=_MINUTOS*60; estado.salidas=0; estado.terminado=false;
  mostrar("screen-quiz");
  document.getElementById("q-name").textContent = nombre;
  guardarFirebase("iniciado");
  iniciarTimer(); detectarSalida(); render();
}

function iniciarTimer(){
  clearInterval(timerInt);
  timerInt = setInterval(()=>{
    estado.tiempo--;
    const m=Math.floor(estado.tiempo/60), s=estado.tiempo%60;
    const t=document.getElementById("q-timer");
    t.textContent = `${m}:${String(s).padStart(2,'0')}`;
    t.style.color = estado.tiempo<120 ? "#ff4b2b":"#38ef7d";
    if(estado.tiempo<=0 && !estado.terminado) finalizar();
  },1000);
}

let salidaReg=false;
function detectarSalida(){
  if(salidaReg) return; salidaReg=true;
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden && !estado.terminado){
      estado.salidas++;
      guardarFirebase("salio_app");
      if(estado.salidas>=3){ alert("Saliste de la app 3 veces. Tu quiz se enviará automáticamente."); setTimeout(()=>finalizar(),300); }
      else alert(`¡Ey! Saliste de la app (${estado.salidas}/3). Si salís 3 veces se envía solo. ¡Concentrate y usá la calculadora de la app!`);
    }
  });
}

function render(){
  const q=estado.preguntas[estado.actual];
  document.getElementById("q-progfill").style.width = ((estado.actual+1)/estado.preguntas.length)*100+"%";
  document.getElementById("q-counter").textContent = `Pregunta ${estado.actual+1}/${estado.preguntas.length}` + (estado.salidas>0?` • ⚠️ Salidas: ${estado.salidas}/3`:"");
  document.getElementById("q-text").textContent = q.q;
  const warn=document.getElementById("q-warn");
  if(estado.salidas>0){warn.classList.remove("hidden");warn.textContent=`⚠️ Detectamos ${estado.salidas} salida(s). A las 3 se envía solo.`;}
  else warn.classList.add("hidden");
  const cont=document.getElementById("q-options"); cont.innerHTML="";

  if(q.tipo==="mc"){
    q.o.forEach((opt,i)=>{
      const b=document.createElement("button");
      b.className="opt"+(estado.respuestas[estado.actual]===i?" sel":"");
      b.textContent=String.fromCharCode(65+i)+") "+opt;
      b.onclick=()=>{estado.respuestas[estado.actual]=i;guardarFirebase("respondio");render();};
      cont.appendChild(b);
    });
  } else if(q.tipo==="orden"){
    const h=document.createElement("p");h.style.cssText="font-size:11px;color:#7a7fa8;margin-bottom:8px";h.textContent="Tocá en el orden correcto (1°, 2°, 3°...):";cont.appendChild(h);
    const sel=estado.respuestas[estado.actual]||[];
    q._si.forEach((item)=>{
      const n=sel.indexOf(item.oi);
      const b=document.createElement("button");
      b.className="opt"+(n>=0?" sel":"");
      b.textContent=(n>=0?`${n+1}° → `:"")+item.it;
      b.onclick=()=>{let c=estado.respuestas[estado.actual]||[];c=c.includes(item.oi)?c.filter(x=>x!==item.oi):[...c,item.oi];estado.respuestas[estado.actual]=c;guardarFirebase("respondio");render();};
      cont.appendChild(b);
    });
  } else if(q.tipo==="unir"){
    const h=document.createElement("p");h.style.cssText="font-size:11px;color:#7a7fa8;margin-bottom:8px";h.textContent="Elegí la opción correcta para cada concepto:";cont.appendChild(h);
    q.pairs.forEach((pair,i)=>{
      const lbl=document.createElement("p");lbl.style.cssText="font-weight:600;font-size:13px;color:#90CAF9;margin-bottom:3px";lbl.textContent=pair[0]+":";cont.appendChild(lbl);
      const sel=document.createElement("select");
      sel.innerHTML='<option value="">Elegí...</option>'+q._sr.map(o=>`<option value="${o}">${o}</option>`).join("");
      const cur=estado.respuestas[estado.actual]||{};
      sel.value=cur[i]||"";
      sel.onchange=(e)=>{const c=estado.respuestas[estado.actual]||{};c[i]=e.target.value;estado.respuestas[estado.actual]=c;guardarFirebase("respondio");};
      cont.appendChild(sel);
    });
  }

  document.getElementById("q-prev").style.visibility = estado.actual>0?"visible":"hidden";
  const next=document.getElementById("q-next");
  if(estado.actual<estado.preguntas.length-1){next.textContent="Siguiente →";next.className="btn btn-blue";next.onclick=nextQ;}
  else{next.textContent="Enviar ✓";next.className="btn btn-green";next.onclick=finalizar;}
}

function nextQ(){if(estado.actual<estado.preguntas.length-1){estado.actual++;render();}}
function prevQ(){if(estado.actual>0){estado.actual--;render();}}

function calcularNota(){
  let c=0;
  estado.preguntas.forEach((q,i)=>{
    const a=estado.respuestas[i];
    if(q.tipo==="mc"&&a===q.a)c++;
    if(q.tipo==="orden"&&a&&q.a.every((v,idx)=>a[idx]===v))c++;
    if(q.tipo==="unir"&&a&&q.pairs.every((p,idx)=>a[idx]===p[1]))c++;
  });
  return {correctas:c,nota:Math.round((c/estado.preguntas.length)*100)/10};
}

function finalizar(){
  if(estado.terminado)return;
  estado.terminado=true; clearInterval(timerInt);
  const {correctas,nota}=calcularNota();
  guardarFirebase("terminado",{nota,correctas});
  mostrar("screen-results");
  document.getElementById("r-emoji").textContent = nota>=6?"🎉":"📖";
  document.getElementById("r-score").textContent = nota+"/10";
  document.getElementById("r-score").style.color = nota>=6?"#38ef7d":"#ff4b2b";
  document.getElementById("r-name").textContent = estado.nombre+" — "+TITULO;
  document.getElementById("r-msg").textContent = nota>=6?"¡Aprobado! Buen trabajo":"Seguí repasando, vas a mejorar";
  document.getElementById("r-msg").style.color = nota>=6?"#38ef7d":"#ff4b2b";
  if(estado.salidas>0) document.getElementById("r-warns").textContent = `Salidas de la app detectadas: ${estado.salidas}`;
  const rev=document.getElementById("r-review"); rev.innerHTML="";
  estado.preguntas.forEach((q,i)=>{
    const a=estado.respuestas[i]; let ok=false;
    if(q.tipo==="mc")ok=a===q.a;
    if(q.tipo==="orden"&&a)ok=q.a.every((v,idx)=>a[idx]===v);
    if(q.tipo==="unir"&&a)ok=q.pairs.every((p,idx)=>a[idx]===p[1]);
    const div=document.createElement("div");div.className="review-item";div.style.borderLeft=`3px solid ${ok?"#38ef7d":"#ff4b2b"}`;
    let html=`<p style="font-weight:600;font-size:13px;margin-bottom:6px">${i+1}. ${q.q}</p>`;
    if(q.tipo==="mc"){html+=`<p style="color:${ok?'#38ef7d':'#ff4b2b'};font-size:12px">Tu respuesta: ${a!==undefined?q.o[a]:"Sin responder"} ${ok?"✓":"✗"}</p>`;if(!ok)html+=`<p style="color:#38ef7d;font-size:12px">Correcta: ${q.o[q.a]}</p>`;}
    else if(q.tipo==="orden"){html+=`<p style="color:${ok?'#38ef7d':'#ff4b2b'};font-size:12px">${ok?"Orden correcto ✓":"Incorrecto ✗. Correcto: "+q.items.join(" → ")}</p>`;}
    else{html+=`<p style="color:${ok?'#38ef7d':'#ff4b2b'};font-size:12px">${ok?"Todo correcto ✓":"Alguna incorrecta ✗"}</p>`;}
    div.innerHTML=html; rev.appendChild(div);
  });
}

function guardarFirebase(evento,extra={}){
  if(!db)return;
  const {correctas,nota}=calcularNota();
  const data={nombre:estado.nombre,materia:_MATERIA,evento,preguntaActual:estado.actual+1,totalPreguntas:estado.preguntas.length,respondidas:Object.keys(estado.respuestas).length,notaParcial:nota,correctasParcial:correctas,salidas:estado.salidas,tiempoUsado:_MINUTOS*60-estado.tiempo,terminado:estado.terminado,ultimaActividad:new Date().toLocaleString("es-AR"),...extra};
  try{db.ref("resultados/"+_MATERIA+"/"+estado.sessionId).update(data);}catch(e){}
}

// CALCULADORA
let calcExpr="";
function toggleCalc(){document.getElementById("calc-modal").classList.toggle("hidden");}
function calcIn(v){calcExpr+=v;updateCalc();}
function calcClear(){calcExpr="";updateCalc();}
function calcBack(){calcExpr=calcExpr.slice(0,-1);updateCalc();}
function updateCalc(){document.getElementById("calc-display").textContent=calcExpr||"0";}
function calcEq(){try{let e=calcExpr.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-");const r=Function('"use strict";return ('+e+')')();document.getElementById("calc-display").textContent=Math.round(r*10000)/10000;calcExpr=String(r);}catch(err){document.getElementById("calc-display").textContent="Error";calcExpr="";}}

if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",inicializar);
else inicializar();
