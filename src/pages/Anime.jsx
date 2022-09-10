import React, { useState, useEffect } from 'react'
import InfoAnime from '../components/anime/InfoAnime.jsx'
import Episodios from '../components/anime/Episodios.jsx'
import { useParams } from 'react-router-dom'
import Carga from '../components/Carga'



import { GetAnime } from '../services/AnimeServices.js'





const Anime = () => {
  const { id } = useParams()

  const { Info, Episodio, isLoading } = GetAnime(id)




  if (isLoading) {
    return <Carga />
  }

  return (
    <>
      <InfoAnime anime={Info} id_anime={id} />

      <Episodios Epires={Episodio} />
    </>
  )
}

export default Anime
