import Directorio from '../components/anime/Directorio.jsx'
import React, { useState, useEffect } from 'react'
import Carga from '../components/Carga'

import { GetDirectorioFuturo } from '../services/AnimeServices.js'

const Futuros = () => {
  const { Animes, isLoading } = GetDirectorioFuturo()

  if (isLoading) {
    return <Carga />
  }
  return (
    <>
      <title>Animes Futuros</title>
      <Directorio animes={Animes} />
    </>
  )
}

export default Futuros
