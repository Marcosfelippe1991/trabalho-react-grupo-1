import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    return(
        <>
        <h1 className="title">Login</h1>

        <form>
            <div>
                <label>
                    <input type="email" placeholder="Digite seu email:" />
                </label> 
                <label>
                    <input type="senha" placeholder="Digite sua senha:" />
                </label> 

                <Link to={`/Home`}>
                    <button>Entrar</button>
                </Link>
                <Link to={`/Cadastro`}>
                    <button>Cadastrar</button>
                </Link>

            </div>

        </form>

        </>
    )
}