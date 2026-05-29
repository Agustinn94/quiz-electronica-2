// ============================================================
// CONFIGURACIÓN - Editá solo esta sección
// ============================================================

// 1) FIREBASE (tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyDynSV-s9-r0hGYUwjZSZVU1WftIvsAhWk",
  authDomain: "quiz-electronica-tobar.firebaseapp.com",
  databaseURL: "https://quiz-electronica-tobar-default-rtdb.firebaseio.com",
  projectId: "quiz-electronica-tobar",
  storageBucket: "quiz-electronica-tobar.firebasestorage.app",
  messagingSenderId: "292208807910",
  appId: "1:292208807910:web:15763a1e45c53813399027"
};

// 2) MATERIA DE ESTA PÁGINA: "E1" o "E2"
const MATERIA = "E1";

// 3) VERSIÓN (subí este número cada vez que cambies algo,
//    así a los chicos les avisa que actualicen la página)
const VERSION = 1;

// 4) ALUMNOS
const ALUMNOS_E1 = ["Druard Rodríguez, Emmanuel","Faversani Sueldo, Juan","Montero, Felipe Gerónimo","Rojas, Martín Gonzalo"];
const ALUMNOS_E2 = ["Alderete, Gustavo Benjamín","Argañaraz Saifán, Joaquín","Audia, Benjamín Gael","Castillo Moyano, Tomás Benjamín","Espinosa Alcaraz, Víctor","Gallardo, Martín Elías","García, Lázaro David","Morales Vendetti, Tomás Esteban","Moyano, Frida Leonor","Romano, Bautista Ariel","Sader, Yusef Said","Suárez Neme, Emir","Vildosa, Kevin Gabriel"];

// 5) QUIZ
const MINUTOS = 60;
const CANTIDAD_PREGUNTAS = 15;

// 6) LINKS DE DRIVE (Teoría y Práctica por trimestre)
//    Pegá acá los links de tus carpetas. Si dejás "" no aparece el botón.
const DRIVE = {
  E1: {
    carpeta: "https://drive.google.com/drive/folders/1qGRwnk73WPaJh0ual892VsMWDCsY2QJD?usp=sharing",
    teoria:   { t1:"https://drive.google.com/drive/folders/1qGRwnk73WPaJh0ual892VsMWDCsY2QJD?usp=sharing", t2:"", t3:"" },
    practica: { t1:"", t2:"", t3:"" }
  },
  E2: {
    carpeta: "https://drive.google.com/drive/folders/1xDy_bCfXN46U1x7tstv4C0dXQ7uQEWEP?usp=sharing",
    teoria:   { t1:"https://drive.google.com/drive/folders/1xDy_bCfXN46U1x7tstv4C0dXQ7uQEWEP?usp=sharing", t2:"", t3:"" },
    practica: { t1:"", t2:"", t3:"" }
  }
};
