// ============================================================
// CONFIGURACIÓN
// ============================================================

// 1) CONFIGURACIÓN DE FIREBASE (tus datos reales)
const firebaseConfig = {
  apiKey: "AIzaSyDynSV-s9-r0hGYUwjZSZVU1WftIvsAhWk",
  authDomain: "quiz-electronica-tobar.firebaseapp.com",
  databaseURL: "https://quiz-electronica-tobar-default-rtdb.firebaseio.com",
  projectId: "quiz-electronica-tobar",
  storageBucket: "quiz-electronica-tobar.firebasestorage.app",
  messagingSenderId: "292208807910",
  appId: "1:292208807910:web:15763a1e45c53813399027"
};

// 2) ELEGÍ QUÉ MATERIA ES ESTA PÁGINA: "E1" o "E2"
const MATERIA = "E1";

// 3) LISTA DE ALUMNOS
const ALUMNOS_E1 = ["Felipe Montero","Emmanuel Druard Rodríguez","Juan Inti Faversani Sueldo","Martín"];
const ALUMNOS_E2 = ["Tomas","Benjamin Gael Audia","Joaquin Argañaraz Saifán","Emir","Lazaro","Gustavo","Kevin","Frida Leonor Moyano Borquez","Benjamín Castillo","Martín","Bautista Romano","Espinosa","Said"];

// 4) TIEMPO DEL QUIZ (en minutos)
const MINUTOS = 40;

// 5) CANTIDAD DE PREGUNTAS POR ALUMNO
const CANTIDAD_PREGUNTAS = 15;
