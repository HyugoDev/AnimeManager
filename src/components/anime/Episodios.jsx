import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
// import {getuseEpisodio} from '../../../hooks/useEpisodio.js'



const Episodios = ({ Epires }) => {

  if (Epires.length === 0) {
    return <Contenedor> <h1>No hay Episodios</h1> </Contenedor>
  }


  return (
    <Contenedor>
      {
        Epires.map((Epi) => (
          <li key={Epi.episode_id}>
            <Link to={`/ver/${Epi.episode_id}`}>
              <Button existe={false}>
                {Epi.number}
              </Button>
            </Link>
          </li>
        ))
      }
    </Contenedor>
  )
}

export default Episodios

const Contenedor = styled.ul`
      display: grid;
      grid-template-columns: repeat(auto-fit, max(70px));
      grid-gap: 10px;
      max-height: 500px;
      
      border: 1px solid #fff;
      margin: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      justify-content: center;

      -ms-overflow-style: none; /*for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 

  ::-webkit-scrollbar {
    display: none;
    }

      h1{
        text-align: center;
        font-size: 1.5rem;
        display: flex;
      }
`
const Button = styled.button`

        background-color: ${props => props.existe ? '#eb0808' : '#fff'};

        color: ${props => props.existe ? '#fff' : 'black'};
        border-radius: 5px;
          
          width: 70px;
          height: 30px;

          &:hover {
            
            background-color: #00d4ff;
          }

`;