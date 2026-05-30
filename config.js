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
const MATERIA = "E2";

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
    teoria:   { t1:"https://drive.google.com/drive/folders/11ygb3ZjIkE95qoTijYxcoJOIngvcWqSb?usp=drive_link", t2:"https://drive.google.com/drive/folders/1uMlZiq4LwlXJOs6fK-OB__dYt1491ijb?usp=drive_link", t3:"https://drive.google.com/drive/folders/1hyVhWmgvWvocR15NsflY2AjEkZ9Xa5-d?usp=drive_link" },
    practica: { t1:"https://drive.google.com/drive/folders/1f3MLid76TcRwvShVT4iwGlEd_tzIM2by?usp=drive_link", t2:"https://drive.google.com/drive/folders/1S0cX1fAXNcHGWXkndVwWa0iWHaCgmAXj?usp=sharing", t3:"https://drive.google.com/drive/folders/1lgV9Zx8DAi5B8OTifV6qP4pAG738FnbY?usp=drive_link" }
  },
  E2: {
    carpeta: "https://drive.google.com/drive/folders/1xDy_bCfXN46U1x7tstv4C0dXQ7uQEWEP?usp=sharing",
    teoria:   { t1:"https://drive.google.com/drive/folders/1HcqVm1Kg7llq9B4wNnHLnNzMG1-shWgP?usp=drive_link", t2:"https://drive.google.com/drive/folders/1v9Elgb0S1v13P2Whs2LQNXEG8RtcrCJ0?usp=drive_link", t3:"https://drive.google.com/drive/folders/1Rdkj3huwErJ44RmyQkFFSP823I6hTS3F?usp=drive_link" },
    practica: { t1:"https://drive.google.com/drive/folders/17_vYQ6bw5beqpeDpnxDvI4ltSHOE6WVa?usp=drive_link", t2:"https://drive.google.com/drive/folders/19ppR9VDTl2mmPxpPH3Mt8RKOEvsLoU4D?usp=drive_link", t3:"https://drive.google.com/drive/folders/1eT3QDM-o1ZPf1DSHjw2xoY882xh5h_WI?usp=drive_link" }
  }
};
