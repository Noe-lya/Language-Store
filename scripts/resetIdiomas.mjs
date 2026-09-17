// Reinicia la colección "idiomas" de Firestore: borra los documentos existentes
// y carga los 21 idiomas del catálogo con datos e imágenes consistentes (/assets/...).
// Uso: node scripts/resetIdiomas.mjs

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvOSf0Pot18Sv-TTr2fz441IHwDzvKtK4",
  authDomain: "language-store-2025.firebaseapp.com",
  projectId: "language-store-2025",
  storageBucket: "language-store-2025.firebasestorage.app",
  messagingSenderId: "1003650659139",
  appId: "1:1003650659139:web:d4b2cbe0ace3405229f5f6",
};

const app = initializeApp(firebaseConfig);
const baseDeDatos = getFirestore(app);
const idiomasRef = collection(baseDeDatos, "idiomas");

const idiomas = [
  {
    name: "Italiano",
    desc: "Este idioma se habla en Italia y en algunos países de Suiza. Viene con todas las variantes incluidas.",
    img: "/assets/italiano.jpg",
    price: 110,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Chino",
    desc: "Este idioma se habla en China y en otros países asiáticos. Viene con todas las variantes incluidas.",
    img: "/assets/chino.png",
    price: 200,
    category: ["Asia"],
    stock: 50,
  },
  {
    name: "Japonés",
    desc: "Este idioma se habla en Japón y en algunos otros países asiáticos. Viene con las jergas de cada país incluidas.",
    img: "/assets/japon.png",
    price: 210,
    category: ["Asia"],
    stock: 50,
  },
  {
    name: "Ruso",
    desc: "Este idioma se habla en Rusia y en varios países de Europa del Este. Viene con todas las variantes incluidas.",
    img: "/assets/ruso.png",
    price: 150,
    category: ["Europa", "Asia"],
    stock: 50,
  },
  {
    name: "Portugués",
    desc: "Este idioma se habla en Portugal y en Brasil. Viene con todas las variantes incluidas.",
    img: "/assets/brasil.png",
    price: 115,
    category: ["Europa", "América", "África"],
    stock: 50,
  },
  {
    name: "Árabe",
    desc: "Este idioma se habla en varios países de Oriente Medio y África del Norte. Viene con todas las variantes incluidas.",
    img: "/assets/arabe.png",
    price: 180,
    category: ["Asia", "África"],
    stock: 50,
  },
  {
    name: "Hindi",
    desc: "Este idioma se habla en India y en algunos otros países del sur de Asia. Viene con todas las variantes incluidas.",
    img: "/assets/india.png",
    price: 170,
    category: ["Asia", "Oceanía"],
    stock: 50,
  },
  {
    name: "Coreano",
    desc: "Este idioma se habla en Corea del Sur y Corea del Norte. Viene con todas las variantes incluidas.",
    img: "/assets/corea.png",
    price: 160,
    category: ["Asia"],
    stock: 50,
  },
  {
    name: "Sueco",
    desc: "Este idioma se habla en Suecia y en algunos otros países nórdicos. Viene con todas las variantes incluidas.",
    img: "/assets/suecia.png",
    price: 125,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Holandés",
    desc: "Este idioma se habla en los Países Bajos y en Bélgica. Viene con todas las variantes incluidas.",
    img: "/assets/holanda.png",
    price: 130,
    category: ["Europa", "América"],
    stock: 50,
  },
  {
    name: "Turco",
    desc: "Este idioma se habla en Turquía y en algunos otros países de Oriente Medio. Viene con todas las variantes incluidas.",
    img: "/assets/turquia.PNG",
    price: 145,
    category: ["Europa", "Asia"],
    stock: 50,
  },
  {
    name: "Griego",
    desc: "Este idioma se habla en Grecia y en Chipre. Viene con todas las variantes incluidas.",
    img: "/assets/grecia.png",
    price: 135,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Polaco",
    desc: "Este idioma se habla en Polonia y en algunos otros países de Europa del Este. Viene con todas las variantes incluidas.",
    img: "/assets/polonia.png",
    price: 120,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Noruego",
    desc: "Este idioma se habla en Noruega y en algunos otros países nórdicos. Viene con todas las variantes incluidas.",
    img: "/assets/noruega.png",
    price: 130,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Finlandés",
    desc: "Este idioma se habla en Finlandia y en algunos otros países nórdicos. Viene con todas las variantes incluidas.",
    img: "/assets/finlandia.png",
    price: 125,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Español",
    desc: "Este idioma se habla en España y en la mayoría de los países de Latinoamérica. Viene con todas las variantes incluidas.",
    img: "/assets/españa.png",
    price: 100,
    category: ["Europa", "América"],
    stock: 50,
  },
  {
    name: "Español - Jerga Argentina",
    desc: "El español rioplatense de Argentina, con el voseo y el lunfardo incluidos. Ideal para quienes quieren sonar como un porteño.",
    img: "/assets/argentina.png",
    price: 110,
    category: ["América"],
    stock: 50,
  },
  {
    name: "Inglés",
    desc: "Este idioma se habla en Inglaterra, Estados Unidos y en gran parte de Oceanía. Viene con todas las variantes incluidas.",
    img: "/assets/inglaterra.png",
    price: 100,
    category: ["Europa", "América", "Oceanía"],
    stock: 50,
  },
  {
    name: "Francés",
    desc: "Este idioma se habla en Francia, en varios países de África y en Canadá. Viene con todas las variantes incluidas.",
    img: "/assets/francia.png",
    price: 140,
    category: ["Europa", "África", "América"],
    stock: 50,
  },
  {
    name: "Alemán",
    desc: "Este idioma se habla en Alemania, Austria y en algunos cantones de Suiza. Viene con todas las variantes incluidas.",
    img: "/assets/aleman.png",
    price: 155,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Checo",
    desc: "Este idioma se habla en la República Checa. Viene con todas las variantes incluidas.",
    img: "/assets/checo.png",
    price: 165,
    category: ["Europa"],
    stock: 50,
  },
  {
    name: "Danés",
    desc: "Este idioma se habla en Dinamarca y en algunas regiones de Groenlandia. Viene con todas las variantes incluidas.",
    img: "/assets/dinamarca.png",
    price: 140,
    category: ["Europa"],
    stock: 50,
  },
];

const existentes = await getDocs(idiomasRef);
for (const docSnap of existentes.docs) {
  await deleteDoc(docSnap.ref);
  console.log(`Borrado: ${docSnap.id}`);
}

for (const idioma of idiomas) {
  const doc = await addDoc(idiomasRef, idioma);
  console.log(`Agregado: ${idioma.name} (${doc.id})`);
}

console.log(`Listo. Total idiomas cargados: ${idiomas.length}`);
process.exit(0);
