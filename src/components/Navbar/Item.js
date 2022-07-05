import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function Item(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([]);

  
  let personaFisica= true
  let compra;
  useEffect(() => {
   
    compra = new Promise((res, rej) => {
      setTimeout(() => {
        if (personaFisica === true) {
          res([
            { id: 1, name: "Gabinete", price: 10000 },
          ]);
        } else {
          rej("No hay productos");
        }
      }, 2000);
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
      {productos && <ItemList productos={productos} />}
    </div>
  );
}