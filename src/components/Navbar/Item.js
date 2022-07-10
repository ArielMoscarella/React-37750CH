import { imageListClasses } from "@mui/material";
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
            { id: 1, name: "Gabinete", price: 1000, marca:"AMD"},
            { id: 1, name: "Gabinete", price: 5000, marca:"Microsoft"},
            { id: 1, name: "Gabinete", price: 60000, marca:"Razer"},
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