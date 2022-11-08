import React,{useState} from "react";


export const DataContext = React.createContext(null)


export const Data = (props) => {

    const[lista,setLista] = useState([

    ])

    const adicionarItem = (produto) => {
        const listaProduto = [...lista];
        const item = listaProduto.find((p) => p.idProduto === produto.idProduto);
        if (!item) {

          listaProduto.push({
            id: produto.idProduto,
            imagemUrl: produto.imagemUrl,
            nome: produto.nome,
            valorUnitario: produto.valorUnitario,
            descricao: produto.descricao,
            quantidade: 1,
            qtdEstoque: produto.qtdEstoque,

          });
        } 

        setLista(listaProduto);

      }

      const aumentarItem = (produto) =>{
        const listaProduto = [...lista];
        const item = listaProduto.find((p) => p.idProduto === produto.idProduto);

        if (item) {
          item.quantidade = item.quantidade + 1;
          setLista(listaProduto);

        }
       }

       const diminuirItem = (produto) =>{
        const listaProduto = [...lista];
        const item = listaProduto.find((p) => p.idProduto === produto.idProduto);

        if (item ) {
          item.quantidade = item.quantidade - 1;
          setLista(listaProduto);

        }
       }

       function excluirItem(produto) {
        const listaProduto = [...lista];
        const arrayFiltrado = listaProduto.filter((p) => p.idProduto !== produto.idProduto);

        setLista(arrayFiltrado);
      }

    return(

        <DataContext.Provider value={{lista,adicionarItem, aumentarItem,diminuirItem,excluirItem}}>
            {props.children}
        </DataContext.Provider>

    )
}