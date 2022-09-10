import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Container to="/">
      <img
        className="Imagen"
        src="/Logo.webp"
        alt="Imagen"
      />
      <h1>Anime Manager</h1>
    </Container>
  )
}

const Container = Styled(Link)`
    display: flex;
    flex-direction: wrap;
    align-items: center;
    height: 60px;
    cursor: pointer;

    h1 {
        color: var(--letras);
        font-size: 20px;
        margin-left: 10px;
    }
    
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 365px) {
        h1 {
            font-size: 18px;
        }

        img {
            width: 40px;
            height: 40px;
        }

    }
`


export default Logo
