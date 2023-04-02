import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";
import products from "../products/products";

const firebaseConfig = {
  apiKey: "AIzaSyBvb4ulVkORhSto73VMD3xsFXuduJqf5s0",
  authDomain: "shunsuicrochet-dde0d.firebaseapp.com",
  projectId: "shunsuicrochet-dde0d",
  storageBucket: "shunsuicrochet-dde0d.appspot.com",
  messagingSenderId: "702986349723",
  appId: "1:702986349723:web:5b14b0e1e1e0568cfbea3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

/* Opcional */
export async function exportData() {
  //for ... of
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const { id } = await addDoc(collectionRef, item);
    console.log("Documento creado", id);
  }
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, item);
  }

  const resp = await batch.commit();
  console.log(resp);
}