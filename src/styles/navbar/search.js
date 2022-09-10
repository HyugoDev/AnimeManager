import Styled from 'styled-components'



export const Formulario = Styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 100px 100px 5px;
    margin: 10px auto;


    &:hover {
        background: #2c3441;
    }


    &:hover > input {
        width: 200px;
        padding: 0 10px;
    }

    &:hover > a {
        background: #536179;
    }

    input {
        width: 0;
        padding: 0;
        border: none;
        outline: none;
        background: none;
        font-size: 1.1rem;
        transition: 0.5s ease;
        line-height: 40px;
        color: #fff;
    }

`



export const SearchIcon = Styled.a`
    color: #21DFCD;
    float: right;
    width: 40px;
    font-size: 1.3rem;
    height: 40px;
    border-radius: 50%;
    background-color: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        transform: rotate(360deg) scale(0.8);
    }
`;
