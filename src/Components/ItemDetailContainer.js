import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";

function getSingleItemFromDatabase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = products.find((item) => item.id === Number(idItem));
      resolve(encontrado);
    }, 1000);
  });
}

function ItemDetailContainer({ greeting }) {
  const [user, setUser] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser).then((respuesta) => {
      setUser(respuesta);
    });
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={user.id}>
            <img src={user.imagen} alt={user.imagen} />
            <h4>{`${user.nombre}`}</h4>
            <small>{user.costo}</small>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;