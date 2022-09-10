import styled from 'styled-components'




export const Title = styled.h3`
    color: #fff;
    line-height: 1.2;

    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-bottom: 10px;
`


export const CardContent = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 125px;
    padding: 20px;


    background-image: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,4.5) 75%) ; 

    
    border-radius: 10px 10px 0 0;

    transform: translateY(70px);
    transition: all 0.3s ease-in-out;
    text-align: center;






`;


export const Card = styled.article`
    position: relative;
    background-image: linear-gradient(to bottom, #000, #000);  
    /* background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    
    width: 300px;
    height: 425px;

    border-radius: 1rem;

    margin: 10px;
    padding: 0;
    
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &:hover ${CardContent} {
        transform: translateY(0px);
    }



`





