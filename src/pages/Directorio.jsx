import Directorio from '../components/anime/Directorio.jsx'
import React from 'react'
import Carga from '../components/Carga.jsx'

import { GetDirectorio } from '../services/AnimeServices.js'

const DirectorioPage = () => {
  const { Animes, isLoading } = GetDirectorio();

  if (isLoading) {
    return <Carga />
  }

  return (
    <>
      <title>Directorio</title>
      <Directorio animes={Animes} />
    </>
  )
}

export default DirectorioPage
