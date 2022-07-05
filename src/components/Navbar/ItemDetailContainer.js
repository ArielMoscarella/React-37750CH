import React from "react";

export default function ItemDetailContainer({ productos2 }){
    return (
        <div>
          {productos2.map((producto, i) => {
            return (
              <div key={i}>
                <h1>{producto.name}</h1>
                <div>
                  <p>
                    id {producto.id} nombre {producto.name} 
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      );
    }