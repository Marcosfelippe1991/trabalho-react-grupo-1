  import React, { useEffect, useState, useContext } from "react";
  import { api } from "../../../src/Services";
  import { DataContext } from "../../Context/data";
  
  export const Carrinho = () => {
    
    const{ lista, adicionarLista }= useContext(DataContext)
    
  
    useEffect(() =>{
      
    })
          
    console.log(lista);
    return (
      <>
          {
            lista.map((item) => {
              return(
                <>
                <div>
                  {item.nome}
                </div>
                <div>
                  {item.qtdEstoque}
                </div>
                </>
              )
            })
          }
  
      </>
      
  
    );
  
};
