import React, { useState, useEffect, useContext } from "react";
import { api } from "../../Services";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/data";


export const Home = () => {

    const[produtos, setProdutos] = useState([])
    const{ lista, adicionarLista }= useContext(DataContext)


    const getProdutos= () => {
      api.get("/produtos").then((res)=>{
        setProdutos(res.data.content)        
      })
    } 

    //funcao para chamar os produtos
    function handleNomeChange (e) {
        setProdutos({...produtos, nome: e.target.value})        
    }
    function handleDescChange (e) {
        setProdutos({...produtos, descricao: e.target.value})        
    }
    function handleValorcChange (e) {
        setProdutos({...produtos, valorUnitario: e.target.value  })        
    }
    


    
    const handleDelete = () => {
        api.delete(`/produtos/`, produtos)      
    }
    const handlePut = () => {
        api.put(`/produtos/`, produtos)      
    }


    useEffect(() =>{
        getProdutos()
      })
    

    return(
        <>
        
        <h1>Tela Inicial</h1>
        <div>
            <table>
            
            <tbody>
                {produtos.map((item) => (
                    <tr key={item.idProduto}>
                        
                        <td>{item.nome}</td>
                        <td>{item.descricao}</td>
                        <td>{item.valorUnitario}</td>
                        <td><img src={item.imagem}/></td>

                        <Link to={`/carrinho`}>
                        
                        <td><button onClick={() => {adicionarLista(item)}}>Adicionar ao carrinho</button></td>
                       
                        </Link>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    </>


    )
}