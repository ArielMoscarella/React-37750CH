import React, { useEffect, useState } from 'react';
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemDetail({ productos }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos2, setProductos] = useState([]);

  
  let personaFisica= true
  let compra;
  useEffect(() => {
   
    compra = new Promise((res, rej) => {
      setTimeout(() => {
        if (personaFisica === true) {
          res([
            { id: 1, name: "Descripcion" },
          ]);
        } else {
          rej("No hay productos");
        }
      }, 4000);
    });

    compra
      .then((resultado) => {
        setProductos(resultado);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      onClick={() => {
        console.log(compra);
      }}
    >
      {loading && "Loading..."}
      {error && "Error en la carga"}
      {productos2 && <ItemDetailContainer productos2={productos2} />}
    </div>
  );
}