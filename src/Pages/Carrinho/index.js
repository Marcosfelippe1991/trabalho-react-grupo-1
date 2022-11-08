import React, { useEffect, useState, useContext } from "react";
import { api } from "../../../src/Services";
import { DataContext } from "../../Context/data";

export const Carrinho = () => {
  const [clientes, setClientes] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const { lista, adicionarItem, aumentarItem, diminuirItem, excluirlItem } =
    useContext(DataContext);

  const getClientes = () => {
    api.get("/cliente").then((res) => {
      setClientes(res.data.content);
    });
  };

  const handlePrice = () => {
    let valor = 0;
    lista.map(
      (produto) => (valor += produto.quantidade * produto.valorUnitario)
    );
    setValorTotal(valor);
  };

  useEffect(() => {
    handlePrice();
  });

  console.log(lista);
  return (
    <>
      {lista.map((item) => {
        return (
          <>
            <div>{item.nome}</div>
            <div>{item.qtdEstoque}</div>
          </>
        );
      })}
    </>
  );
};
