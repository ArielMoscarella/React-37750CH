import React, { useEffect, useState } from "react";
import "./ItemList.css";

export default function ItemCount(){
  console.log("render")
  
  let maxStock= 100;
  let cantidadCompra=0;
  const [auxStock, setAuxStock] = useState(maxStock);
  const [auxCompra, setCompra] = useState(cantidadCompra);

  useEffect(() => {
      let arg= true;
      if(arg){
          setAuxStock(maxStock + 200);
      }
  }, [])
  
  useEffect(() => {
    return () => {
      alert("ME ESTOY DESMONTANDO")
    }
  }, [])
  
  useEffect(() => {
     if(auxCompra >= 10 ){
      alert ("La cantidad maxima de este producto por compra es de 10 unidades")
     }
  }, [auxCompra])
  
  
  function aumentarStock() {
  setCompra(auxCompra + 1);
  }   

  function disminuirStock() {
    setCompra(auxCompra - 1);
  }   
  
  function finalCompra(){
    alert("Usted a añadido al carrito:" + auxCompra + " " + "productos.")
  }
  
  return(
      <div>
          {/* <p>MAXIMO STOCK: {auxStock}</p> */}
          <p>Cantidad de Productos para la compra: {auxCompra}</p>
      <div>
          <a onClick={() => aumentarStock()}>+</a>
          <a onClick={() => disminuirStock()}>-</a>
          <a onClick={() => finalCompra()}>Añadir al carrito</a>
      </div>
      </div>
  );
};

