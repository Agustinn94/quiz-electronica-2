// ============================================================
// BANCO DE PREGUNTAS - Electrónica 1 y Electrónica 2
// Basado en simulacros, exámenes y hojas de conceptos clave
// Sin dar cálculos servidos
// ============================================================

const BANCO_E1 = [
  // POTENCIA / SEGURIDAD (sin dar el resultado servido)
  {tipo:"mc",q:"Un resistor con bandas Rojo-Rojo-Marrón-Oro se conecta a 9V. ¿Qué le ocurre si es de 1/4W?",o:["Se daña, porque la potencia que disipa supera su límite","Sobrevive sin problemas","Explota al instante sin disipar nada","No circula corriente"],a:0},
  {tipo:"mc",q:"Un resistor de 100Ω y 0.25W se conecta a 10V. ¿Qué sucede?",o:["Se quema, porque disipa más watts de los que aguanta","Sobrevive, queda muy por debajo de su límite","No pasa corriente","Se enfría"],a:0},
  {tipo:"mc",q:"¿Cuándo se quema un resistor?",o:["Cuando la potencia que disipa supera su potencia nominal","Cuando la tensión es menor a 5V","Cuando la corriente es cero","Cuando está en paralelo"],a:0},
  {tipo:"mc",q:"Para calcular la potencia que disipa un resistor si conocés la tensión y la corriente, usás:",o:["P = V × I","P = V + I","P = V / I","P = I / V"],a:0},

  // CÓDIGO COLORES / E12
  {tipo:"mc",q:"Un resistor con bandas Rojo-Violeta-Rojo-Oro vale:",o:["2.7kΩ con ±5%","270Ω con ±5%","27kΩ con ±10%","2.7Ω con ±5%"],a:0},
  {tipo:"mc",q:"Un resistor con bandas Marrón-Negro-Naranja-Oro vale:",o:["10kΩ con ±5%","100Ω con ±5%","1kΩ con ±5%","10Ω con ±5%"],a:0},
  {tipo:"mc",q:"La cuarta banda dorada de un resistor indica:",o:["Tolerancia de ±5%","El primer dígito","El multiplicador","La potencia"],a:0},
  {tipo:"mc",q:"Necesitás exactamente 530Ω pero ese valor no existe en la serie E12. ¿Qué hacés?",o:["Combino dos valores E12 en serie que sumen 530Ω","Uso cualquier resistor","Es imposible obtener ese valor","Pongo dos de 530Ω en paralelo"],a:0},

  // LEY DE OHM / CIRCUITOS (sin servir resultado)
  {tipo:"mc",q:"Un microcontrolador recibe 0.12kV y consume 20mA. Para hallar su resistencia equivalente, primero tenés que:",o:["Convertir 0.12kV a 120V y 20mA a 0.02A, y luego dividir V/I","Sumar 0.12 + 20","Multiplicar 0.12 × 20","Restar 20 − 0.12"],a:0},
  {tipo:"mc",q:"Dos resistores de 200Ω en paralelo dan una resistencia de:",o:["100Ω","400Ω","200Ω","40000Ω"],a:0},
  {tipo:"mc",q:"En un circuito serie de 3 resistencias con 12V total y 2mA, si conocés R1 y R3, para hallar R2:",o:["Calculo la Rt total con Ohm y le resto R1 y R3","Sumo las tres y divido","Multiplico R1 por R3","R2 siempre vale 1kΩ"],a:0},
  {tipo:"mc",q:"En un circuito serie, la corriente que circula por cada resistor es:",o:["La misma en todos","Distinta en cada uno","Cero","La suma de todas"],a:0},
  {tipo:"mc",q:"En un circuito paralelo, la tensión sobre cada rama es:",o:["La misma en todas","Distinta en cada rama","Siempre cero","La suma de todas"],a:0},

  // BATERÍA REAL / Rs
  {tipo:"mc",q:"Una batería de 12V con resistencia interna Rs alimenta una carga. El voltaje real en la carga es:",o:["Menor a 12V, porque parte cae en la resistencia interna","Mayor a 12V","Exactamente 12V siempre","Cero"],a:0},
  {tipo:"mc",q:"La potencia que se pierde como calor dentro de una batería real se calcula con:",o:["P = I² × Rs","P = V × Rs","P = Rs / I","P = I / Rs"],a:0},
  {tipo:"mc",q:"¿Por qué una batería real entrega menos tensión cuando le exigís mucha corriente?",o:["Por la caída en su resistencia interna (Rs)","Porque se apaga","Porque cambia de polaridad","Porque aumenta su voltaje"],a:0},

  // PILAS
  {tipo:"mc",q:"3 pilas de 1.5V conectadas en serie entregan:",o:["4.5V","1.5V","0.5V","3V"],a:0},
  {tipo:"mc",q:"Si conectás pilas en serie, la capacidad total (mAh):",o:["No cambia respecto a una sola pila","Se triplica","Se reduce a la mitad","Se hace cero"],a:0},
  {tipo:"mc",q:"Para obtener más capacidad (mAh) manteniendo el voltaje, las pilas se conectan:",o:["En paralelo","En serie","En cortocircuito","No se puede"],a:0},

  // DIODO (de la hoja de conceptos)
  {tipo:"mc",q:"Una fuente de 0.5V alimenta un diodo de silicio en serie con una resistencia. ¿Conduce?",o:["No, porque no alcanza el peaje de 0.7V del silicio","Sí, cualquier tensión lo enciende","Sí, pero solo la mitad","Se quema"],a:0},
  {tipo:"mc",q:"Si cambiás un diodo de silicio por uno de germanio (peaje 0.3V) con una fuente de 0.5V:",o:["Ahora conduce, porque supera el peaje del germanio","Sigue sin conducir","Explota","Funciona igual que el de silicio"],a:0},
  {tipo:"mc",q:"En la 2da aproximación, el diodo de silicio se comporta como:",o:["Un interruptor con una caída fija de 0.7V","Un interruptor perfecto sin caída","Una resistencia variable","Una fuente de corriente"],a:0},
  {tipo:"mc",q:"Circuito: fuente + diodo en directa + resistencia. El voltímetro sobre la resistencia marca 0V. ¿Qué pasó?",o:["El diodo se abrió (cortó) y no deja pasar corriente","El diodo está perfecto","La resistencia se quemó","Falta tensión"],a:0},
  {tipo:"mc",q:"En polarización DIRECTA, ¿qué le pasa a la zona de deplexión (el muro)?",o:["Se hace más angosta y permite la conducción","Se ensancha y bloquea","Desaparece para siempre","No cambia nunca"],a:0},
  {tipo:"mc",q:"En polarización INVERSA, los electrones y huecos:",o:["Son empujados hacia los extremos, el muro se ensancha y no circula corriente","Cruzan la juntura y conduce","Se quedan quietos","Hacen explotar el diodo"],a:0},
  {tipo:"mc",q:"La corriente inversa de fuga en un diodo:",o:["Es muy pequeña pero no es exactamente cero","Es muy grande","Es exactamente cero","Es igual a la directa"],a:0},

  // RECTIFICADORES (de la hoja)
  {tipo:"mc",q:"Para hallar el Vpico real en un rectificador de ONDA COMPLETA: primero multiplicás el valor eficaz (RMS) por raíz de 2, y después:",o:["Le restás 1,4V (las dos caídas de diodo)","Le restás 0,7V","Le sumás 1,4V","No le restás nada"],a:0},
  {tipo:"mc",q:"Para hallar el Vpico real en un rectificador de MEDIA ONDA: multiplicás el RMS por raíz de 2, y después:",o:["Le restás 0,7V (una sola caída de diodo)","Le restás 1,4V","Le sumás 0,7V","No le restás nada"],a:0},
  {tipo:"mc",q:"El valor eficaz (RMS) de una tensión es:",o:["El valor que entrega el transformador y que miden los instrumentos","El valor máximo de la onda","El valor de continua","El valor cero"],a:0},
  {tipo:"mc",q:"Para pasar del valor eficaz (RMS) al valor de pico de una onda senoidal:",o:["Se multiplica el RMS por raíz de 2","Se divide el RMS por 2","Se multiplica por π","Se le resta 0,7"],a:0},
  {tipo:"mc",q:"Si la red es de 50Hz, la frecuencia a la salida de un rectificador de MEDIA ONDA es:",o:["50Hz","100Hz","25Hz","0Hz"],a:0},
  {tipo:"mc",q:"Si la red es de 50Hz, la frecuencia a la salida de un PUENTE completo es:",o:["100Hz","50Hz","25Hz","200Hz"],a:0},
  {tipo:"mc",q:"¿Por qué el puente completo da el doble de frecuencia que la media onda?",o:["Porque aprovecha los dos semiciclos de la onda","Porque usa más diodos","Porque el transformador lo duplica","Porque tiene capacitor"],a:0},
  {tipo:"mc",q:"La salida de un puente completo se describe como:",o:["Montañas sucesivas, 100% pulsante","Pulsos positivos espaciados","Una línea recta","Una señal alterna"],a:0},

  // SENSORES (de la hoja)
  {tipo:"mc",q:"Un LDR (fotorresistencia) se caracteriza porque:",o:["Su resistencia disminuye cuando aumenta la luz","Su resistencia aumenta con la luz","No cambia nunca","Mide temperatura"],a:0},
  {tipo:"mc",q:"Un termistor NTC se caracteriza porque:",o:["Su resistencia disminuye cuando aumenta la temperatura","Su resistencia aumenta con la temperatura","Mide luz","Es un capacitor"],a:0},
  {tipo:"mc",q:"En un divisor de tensión con R1 fija y un LDR, si hay mucha luz (LDR baja su resistencia), la tensión en R1:",o:["Aumenta, porque R1 se queda con la mayor parte de la tensión","Disminuye","No cambia","Se hace cero"],a:0},
  {tipo:"mc",q:"El capacitor electrolítico tiene una característica importante:",o:["Tiene polaridad: si se conecta al revés puede explotar","No tiene polaridad","Mide temperatura","Genera corriente"],a:0},


  // ===== EJERCICIOS DE CÁLCULO (usá la calculadora) =====
  {tipo:"mc",q:"CALCULÁ: Un resistor de 220Ω se conecta a 12V. ¿Cuánta corriente circula? (usá la calculadora)",o:["54.5 mA","2.6 mA","26.4 mA","18.3 mA"],a:0},
  {tipo:"mc",q:"CALCULÁ: Un resistor de 1kΩ conectado a 5V. ¿Cuánta corriente circula?",o:["5 mA","0.5 mA","50 mA","200 mA"],a:0},
  {tipo:"mc",q:"CALCULÁ: 3 resistores en serie de 100Ω, 220Ω y 330Ω. ¿Cuál es la resistencia total?",o:["650 Ω","216 Ω","550 Ω","100 Ω"],a:0},
  {tipo:"mc",q:"CALCULÁ: Dos resistores de 1kΩ en paralelo. ¿Cuál es la resistencia total?",o:["500 Ω","2 kΩ","1 kΩ","250 Ω"],a:0},
  {tipo:"mc",q:"CALCULÁ: Un resistor de 470Ω conectado a 9V. ¿Qué potencia disipa?",o:["0.17 W","1.9 W","17 W","0.019 W"],a:0},
  {tipo:"mc",q:"CALCULÁ: 300Ω en serie con un paralelo de dos resistencias de 600Ω. ¿Resistencia total?",o:["600 Ω","900 Ω","1200 Ω","300 Ω"],a:0},
  {tipo:"mc",q:"CALCULÁ: Con la resistencia total de 600Ω y una fuente de 12V, ¿cuánta corriente sale de la fuente?",o:["20 mA","2 mA","200 mA","50 mA"],a:0},
  {tipo:"mc",q:"CALCULÁ: Un transformador entrega 12V RMS. ¿Cuál es el voltaje de pico? (Vp = Vrms × √2)",o:["16.97 V","8.49 V","24 V","12 V"],a:0},
  {tipo:"mc",q:"CALCULÁ: Un transformador entrega 9V RMS. ¿Cuál es el voltaje de pico?",o:["12.73 V","6.36 V","18 V","9 V"],a:0},
  {tipo:"mc",q:"CALCULÁ: Una batería de 12V con Rs=0.5Ω alimenta una lámpara que consume 2A. ¿Qué voltaje real recibe la lámpara? (V = 12 − I×Rs)",o:["11 V","12 V","10 V","13 V"],a:0},
  {tipo:"mc",q:"CALCULÁ: Una batería con Rs=5Ω entrega 2A. ¿Cuánta potencia se pierde como calor dentro? (P = I²×Rs)",o:["20 W","10 W","40 W","5 W"],a:0},
  {tipo:"mc",q:"CALCULÁ: Un LED necesita que su resistencia limite la corriente. Si quedan 10V sobre una R y pasan 20mA, ¿cuánto vale R?",o:["500 Ω","200 Ω","2 kΩ","50 Ω"],a:0},

  // ORDENAR
  {tipo:"orden",q:"Ordená las etapas de una fuente de alimentación lineal:",items:["Transformador","Rectificador","Filtro","Regulador"],a:[0,1,2,3]},
  // UNIR
  {tipo:"unir",q:"Uní cada componente con su comportamiento:",pairs:[["LDR","Baja su R cuando hay más luz"],["NTC","Baja su R cuando sube la temperatura"],["Capacitor","Almacena campo eléctrico"],["Diodo","Conduce en un solo sentido"]]},
  {tipo:"unir",q:"Uní cada concepto con su definición:",pairs:[["Vp (pico)","Valor máximo de la onda senoidal"],["Vrms (eficaz)","Lo que entrega el transformador y miden los instrumentos"],["Vdc (continua)","Valor promedio después de rectificar"],["Rs (serie)","Resistencia interna de una fuente real"]]},
];

const BANCO_E2 = [
  // FUENTES (de la hoja de conceptos)
  {tipo:"mc",q:"En una fuente, ¿por qué el orden es Transformador → Rectificador → Filtro → Regulador?",o:["Cada etapa prepara la señal para la siguiente, así el regulador entrega tensión estable","Es un orden al azar","Para gastar menos energía","Porque lo dice el transformador"],a:0},
  {tipo:"mc",q:"¿Por qué el capacitor de filtro va ANTES del regulador y no después?",o:["Para que el regulador reciba una tensión ya pareja y no se apague en los valles","Para ahorrar capacitores","Porque después no entra","Es indistinto"],a:0},
  {tipo:"mc",q:"En un puente completo, para hallar el Vpico real hay que restar:",o:["La caída de los 2 diodos que conducen a la vez","La caída de 1 solo diodo","La caída de los 4 diodos","Nada, no se resta"],a:0},
  {tipo:"mc",q:"El rizado (ripple) en una fuente con filtro capacitivo:",o:["Aumenta si la carga pide más corriente","Disminuye con más corriente","No depende de la carga","Es siempre cero"],a:0},
  {tipo:"mc",q:"Para reducir el rizado de una fuente, ¿qué conviene?",o:["Aumentar la capacitancia del filtro","Reducir el capacitor","Sacar el transformador","Usar más carga"],a:0},
  {tipo:"mc",q:"Un regulador 78xx necesita, para funcionar bien:",o:["Una tensión de entrada suficientemente mayor que su salida","Exactamente su tensión de salida","Menos tensión que su salida","No necesita tensión"],a:0},
  {tipo:"mc",q:"Si la tensión mínima del rizado cae por debajo de lo que necesita el regulador:",o:["El regulador se queda sin margen y la salida tendrá ruido","Funciona mejor","Aumenta la tensión de salida","No pasa nada"],a:0},
  {tipo:"mc",q:"Para calcular el piso de tensión (Vmínima) de una fuente con rizado:",o:["Al Vpico real se le resta el rizado pico a pico","Se suma el rizado al pico","Se divide por 2","Se multiplica por π"],a:0},
  {tipo:"mc",q:"El rectificador en una fuente cumple la función de:",o:["Convertir la AC en DC (dejar pasar en un solo sentido)","Bajar la tensión de red","Almacenar energía","Regular la salida"],a:0},
  {tipo:"mc",q:"¿Por qué los circuitos electrónicos necesitan DC y no AC?",o:["Los chips necesitan una polaridad fija; la AC cambia de sentido y los dañaría","Porque la DC es más barata","Porque la AC no existe","Es indistinto"],a:0},

  // TRANSISTOR BJT - ZONAS (de la hoja)
  {tipo:"mc",q:"Un transistor en zona de CORTE se comporta como:",o:["Una llave abierta (OFF), no circula corriente","Una llave cerrada","Un amplificador","Una fuente"],a:0},
  {tipo:"mc",q:"Un transistor en zona de SATURACIÓN se comporta como:",o:["Una llave cerrada (ON), maneja la corriente máxima","Una llave abierta","Un amplificador lineal","Un diodo"],a:0},
  {tipo:"mc",q:"Un transistor en zona ACTIVA:",o:["Amplifica la señal (Ic = β × Ib)","Está apagado","Está totalmente saturado","No conduce"],a:0},
  {tipo:"mc",q:"Si medís Vce ≈ 0.2V en un transistor, está en:",o:["Saturación","Corte","Zona activa","Quemado"],a:0},
  {tipo:"mc",q:"Si medís Vce igual a Vcc (la fuente completa), el transistor está en:",o:["Corte (no conduce)","Saturación","Zona activa","Amplificando"],a:0},
  {tipo:"mc",q:"El beta (β) de un transistor representa:",o:["Cuántas veces se amplifica la corriente (Ic/Ib)","La tensión de la base","La resistencia interna","La frecuencia"],a:0},
  {tipo:"mc",q:"La corriente de emisor (Ie) es:",o:["La suma de la corriente de base y de colector","Igual a la de base","Siempre cero","La mitad del colector"],a:0},
  {tipo:"mc",q:"La tensión mínima base-emisor para que un BJT de silicio empiece a conducir es:",o:["Aproximadamente 0.7V","0.2V","1.4V","5V"],a:0},

  // DARLINGTON (de la hoja)
  {tipo:"mc",q:"¿Qué hace especial al par Darlington?",o:["Multiplica mucho la ganancia (β total = β1 × β2)","Reduce la ganancia","No amplifica","Solo sirve como diodo"],a:0},
  {tipo:"mc",q:"Para calcular la ganancia total de un Darlington con β1 y β2:",o:["Se multiplican entre sí","Se suman","Se restan","Se divide uno por otro"],a:0},
  {tipo:"mc",q:"La tensión base-emisor necesaria para que un Darlington conduzca es:",o:["Aproximadamente 1.4V (dos junturas en serie)","0.7V (una juntura)","0.2V","5V"],a:0},
  {tipo:"mc",q:"Si medís 1.1V en la base de un Darlington respecto a masa, ¿conduce?",o:["No, porque no alcanza los 1.4V que necesita","Sí, porque supera 0.7V","Sí, siempre conduce","No se puede saber"],a:0},
  {tipo:"mc",q:"Una ventaja del Darlington es que:",o:["Con muy poca corriente de base maneja cargas grandes","Necesita mucha corriente de control","No amplifica","Baja la tensión"],a:0},
  {tipo:"mc",q:"Una limitación del Darlington es que:",o:["Necesita más tensión para encender (≈1.4V) y cae más en saturación","No tiene ninguna desventaja","No puede amplificar","Es muy lento siempre"],a:0},

  // ESPEJO DE CORRIENTE (de la hoja)
  {tipo:"mc",q:"¿Qué hace un espejo de corriente?",o:["Copia una corriente de referencia y la entrega en otra rama","Amplifica tensión","Rectifica la señal","Filtra el ruido"],a:0},
  {tipo:"mc",q:"En un espejo, la corriente de salida Io es aproximadamente:",o:["Igual a la corriente de referencia Iref","El doble de Iref","La mitad de Iref","Cero"],a:0},
  {tipo:"mc",q:"Para calcular la corriente de referencia de un espejo, a la Vcc le restás:",o:["La caída Vbe (≈0.7V) y dividís por la resistencia","Nada, usás Vcc directo","El doble de Vbe","La corriente de salida"],a:0},
  {tipo:"mc",q:"Si la resistencia que fija la referencia del espejo se abre (se corta):",o:["No hay referencia, el espejo se apaga y la salida queda en cero","La corriente se duplica","No cambia nada","La salida se hace infinita"],a:0},
  {tipo:"mc",q:"¿Para qué se usa el espejo de corriente como carga activa en un integrado?",o:["Da mayor ganancia y ocupa poco espacio comparado con una resistencia","Para bajar la ganancia","Para rectificar","Para filtrar"],a:0},
  {tipo:"mc",q:"Comparado con una carga pasiva (resistencia), una carga activa (espejo):",o:["Tiene impedancia muy alta y da más ganancia","Tiene impedancia baja","Limita la ganancia","Ocupa más espacio"],a:0},

  // ORDENAR
  {tipo:"orden",q:"Ordená las etapas de una fuente de alimentación:",items:["Transformador","Rectificador","Filtro (C)","Regulador (78xx)"],a:[0,1,2,3]},
  {tipo:"orden",q:"Ordená las zonas del transistor de MENOR a MAYOR corriente de colector:",items:["Corte (Ic≈0)","Zona activa (Ic=β·Ib)","Saturación (Ic máx)"],a:[0,1,2]},
  // UNIR
  {tipo:"unir",q:"Uní cada zona del transistor con su comportamiento:",pairs:[["Corte","Llave abierta (OFF)"],["Activa","Amplifica la señal"],["Saturación","Llave cerrada (ON)"]]},
  {tipo:"unir",q:"Uní cada bloque de la fuente con su función:",pairs:[["Transformador","Baja la tensión y aísla"],["Rectificador","Convierte AC en DC"],["Filtro","Reduce el rizado"],["Regulador","Entrega tensión fija y estable"]]},
  {tipo:"unir",q:"Uní cada concepto con su idea clave:",pairs:[["Darlington","Multiplica la ganancia (fuerza)"],["Espejo de corriente","Copia una corriente"],["Transistor","Una corriente chica controla una grande"],["Capacitor de filtro","Rellena los valles del rizado"]]},
];
