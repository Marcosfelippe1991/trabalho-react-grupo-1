import styled from "styled-components";

export const Button = styled.button `
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
    color: #696969;
    border: 2px solid #696969;
    border-radius: 0.4rem;
    margin: 0 1rem;
    padding: 0.25rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #696969;
        color: #fff;
    }
` 
export const Container = styled.div `
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #f5f5dc;
    border: 2px solid #696969;
    border-radius: 0.8rem;
    margin: 10rem 20rem;
    padding: 0.60rem 0rem;
      
`