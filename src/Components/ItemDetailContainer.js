import "./styles.scss";
import { useState, useEffect } from "react";
import products from "./../products/products"
import { useParams } from "react-router-dom";
import Button from "./Button";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../Context/cartContext";
import Loader from "./Loader/loader";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

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

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

  return { ...docSnapshot.data(), id: docSnapshot.id };
}
/*
function getSingleItemFromDatabase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = products.find((item) => item.id === Number(idItem));
      if (encontrado !== undefined) resolve(encontrado);
      else reject("No encontramos ese producto.");
    }, 1000);
  });
}
*/
function ItemDetailContainer() {
  const [user, setUser] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser)
      .then((respuesta) => {
        setUser(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  const { addItem, isInCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    addItem(user, count);
  }

  if (user.nombre === undefined) return <Loader />;

  return (
    <>
      <div className="item-list-container">

        <ul className="item-list">
          <li className="item-card" key={user.id}>
            <img src={user.imagen} alt={user.imagen} />
            <h4>{`${user.nombre}`}</h4>
            <h2 className="priceTag">$ {user.costo}</h2>
            <small>{user.category}</small>
           
            <ItemCount onAddToCart={onAddToCart} initial={1} stock={user.stock} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;