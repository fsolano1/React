import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "../products/products";
import { useParams } from "react-router-dom";

function loaditems() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      if (error === true) reject("Error leyendo los datos");
      resolve(products);
    }, 1000);
  });
}

function getItemsByCategoryFromDb(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productsFiltered);
    }, 1000);
  });
}

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await loaditems();
      setUsers(respuesta);
    } else {
      let respuesta = await getItemsByCategoryFromDb(idCategory);
      setUsers(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList users={users} />
    </>
  );
}

export default ItemListContainer;