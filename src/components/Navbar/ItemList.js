import React from "react";
import "./ItemList.css";
import ItemCount from "./ItemCount";

export default function ItemList({ productos }) {
  return (
    <div>
      {productos.map((producto, i) => {
        return (
        <div class="card style">
        <a href="#">
        <div class="image-container">
            <img src={producto.img} alt="producto " />
            <span class="price">${producto.price}</span>
            <span class="favorito">
                <svg >

                </svg>
            </span>
        </div>
        </a>
        <h2>{producto.name}</h2>
        <ItemCount/>
    </div>
    );
      })};
    </div>
  );
}
