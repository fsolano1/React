import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "../products/products";
import { useParams } from "react-router-dom";
import Loader from "./Loader/loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvb4ulVkORhSto73VMD3xsFXuduJqf5s0",
  authDomain: "shunsuicrochet-dde0d.firebaseapp.com",
  projectId: "shunsuicrochet-dde0d",
  storageBucket: "shunsuicrochet-dde0d.appspot.com",
  messagingSenderId: "702986349723",
  appId: "1:702986349723:web:5b14b0e1e1e0568cfbea3e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
      setUsers(respuesta);
      setIsLoading(false);
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory);
      setUsers(respuesta);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <div>
      <h2>{greeting}</h2>
      {IsLoading ? <Loader color="pink" /> : <ItemList users={users} /> }
    </div>
  );
}

export default ItemListContainer;