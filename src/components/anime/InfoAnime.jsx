import styled from 'styled-components'
import React from 'react'
import Listado from './Listado.jsx'


const InfoAmine = ({ anime, vis, id_anime }) => {

  return (
    <Contenedor>

      <ConteinerImg>
        <img src={anime.img} alt={anime.title} />
      </ConteinerImg>

      <div>
        <Titulo>{anime.title}</Titulo>
        {/* {
            vis ? (
              <Listado Visto={vis} anime={anime} id_anime={id_anime} />
            ) : (
              null
            )
          } */}


        <Texto>Estado: {anime.state}</Texto>

        <Texto> Total de Episode: {anime.total_episodes}</Texto>

        <Texto >Generos:</Texto>
        <Lista>
          {anime.genres.map((genres, i) => {
            if (i === anime.genres.length - 1) {
              return <Texto key={genres}>{genres}</Texto>
            } else {
              return <Texto key={genres}>{genres},&nbsp;</Texto>
            }
          })}
        </Lista>
        {
          anime.next_episode ? (
            <Texto >Siguente Episodio: {anime.next_episode}</Texto>
          ) : (
            null
          )
        }
        <Texto>Descripción:</Texto>

        <Sinosis>{anime.description}</Sinosis>
      </div>

    </Contenedor>
  )
}

export default InfoAmine

const ConteinerImg = styled.div`
    display: grid;
    place-items: center;
    margin: 10px;
  img {
   border-radius: 1rem;
  }
`
const Titulo = styled.h1`
  text-align: center;
`
const Texto = styled.p`
  font-size: 1.2rem;
  display: flex;
  margin-top: 1rem;
`
const Lista = styled.ul`
  display: flex;
  li {
    margin-right: 0.5rem;
  }
`
const Sinosis = styled.p`
  font-size: 1rem;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 1rem;
`

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  margin: 10px;
  margin-top: 1rem;
   
  @media screen and (max-width: 1024px) {
     grid-template-columns: 1fr;
     width: 100%;
  }
`
