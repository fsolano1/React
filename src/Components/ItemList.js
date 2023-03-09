import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ users }) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {users.map((user) => (
          /* remplazar por componente <Item> */

          <li className="user-card" key={user.id}>
            <img src={user.imagen} alt={user.imagen} />
            <h4>{`${user.nombre}`}</h4>
            <small>{user.costo}</small>
            <br />

            <Link to={`/detalle/${user.id}`}>
              <button>Ver más</button>
            </Link>
          </li>
          /* hasta aca </Item> */
        ))}
      </ul>
    </div>
  );
}