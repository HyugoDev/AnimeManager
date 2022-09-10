import React from 'react'
import {Contenedor, Left, ArrowLeft, Middle, Right, ArrowRight} from '../../styles/directorio/styled.js'
import AnimeCard from './AnimeCard'
import useInicialFin from '../../hooks/InicioFin.js'

const Directorio = ({ animes }) => {
  const { Inicio, Fin, Incrementar, Decrementar } = useInicialFin(animes)


  return (
    <Contenedor>
      <Left>
        <ArrowLeft onClick={Decrementar} />
      </Left>
        <Middle>
          {
              animes.slice(Inicio, Fin).map((Anime) => (
                  <AnimeCard key={Anime.id} anime={Anime} />
              ))
          }
        </Middle>
      <Right>
        <ArrowRight onClick={Incrementar} />
      </Right>
    </Contenedor>
  )
}

export default Directorio

