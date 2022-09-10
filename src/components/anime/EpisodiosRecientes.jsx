import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Contenedor, Left, ArrowLeft, Middle, Right, ArrowRight } from '../../styles/home/episodiorecientes.js'
import CardEpisodesRecientes from './Card_EpisodesRecientes'
import useInicioFin from '../../hooks/useInicioFin.js'

import { GetLastAnime } from '../../services/AnimeServices.js'
import Carga from '../Carga.jsx'


const EpisodiosRecientes = () => {

  const { Animes, isLoading } = GetLastAnime()

  const [tamano, setTamano] = useState(window.innerWidth)


  useEffect(() => {
    window.addEventListener('resize', () => {
      setTamano(window.innerWidth)
    })
  }, [])



  const { Inicio, Fin, Decrementar, Incrementar } = useInicioFin(Animes, tamano)

  if (isLoading) {
    return <Carga />
  }

  return (
    <>
      <Titulo>Ultimos Episodios</Titulo>


      <Contenedor>
        <Left>
          <ArrowLeft onClick={Decrementar} />
        </Left>
        <Middle>
          {
            Animes !== undefined ?
              Animes.slice(Inicio, Fin).map((Anime) => (
                <CardEpisodesRecientes key={Anime.id} UltiEpisodes={Anime} />
              )) : <Carga />

          }
        </Middle>
        <Right>
          <ArrowRight onClick={Incrementar} />
        </Right>

      </Contenedor>
    </>
  )
}

const Titulo = Styled.h3`
    text-align: center;
    color: #fff;

    margin-top: 20px;
`


export default EpisodiosRecientes

