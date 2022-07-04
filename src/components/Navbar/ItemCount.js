import React, { useEffect, useState } from "react";


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
          Producto:
          <p>MAXIMO STOCK: {auxStock}</p>
          <p>Cantidad de Productos para la compra: {auxCompra}</p>
      <div>
          <button onClick={() => aumentarStock()}
          style= {{border: "1px solid red", width: "200px"}}>+</button>
          <button onClick={() => disminuirStock()}
          style= {{border: "1px solid red", width: "200px"}}>-</button>
          <button onClick={() => finalCompra()}
          style= {{border: "1px solid red", width: "200px"}}>Comprar</button>
      </div>
      </div>
  );
};

