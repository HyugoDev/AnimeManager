import Styled from 'styled-components'



export const Container = Styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 20px 20px;

`

export const Titulo = Styled.h3`
    text-align: center;
    color: #fff;
    margin-top: 100px;
    font-size: 1.5rem;
`


export const ContainerImg = Styled.div`
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;


    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: cover;
        object-position: center;
    }
`

export const BodyCard = Styled.a`
    display: flex;
    flex-direction: column; 
    position: relative;
    height: 100%;


    h2{
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        position: absolute;
        bottom: 0;
    }

    p {
        font-size: 0.8rem;
        position: absolute;
        z-index: 1;
        top: 6px;
        left: 1rem;
    }
`
export const Card = Styled.article`
    width: 260px;
    height: 200px;
    border-radius: 1rem;
    margin: 10px;


    &:hover {
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);
        border-radius: 1rem;
    }  

    @media (max-width: 375px) {
        width: 190px;
        height: 150px;

        h2{
            font-size: 0.8rem;
        }
    }

`