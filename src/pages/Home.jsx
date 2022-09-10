import React from 'react'
import UltimosEpisodios from '../components/anime/UltimosEpisodios.jsx'
import UtimasNoticias from '../components/news/UtimasNoticias.jsx'


import { GetLastNews } from '../services/NewsServices.js'


const Home = () => {
  const { News, isLoading } = GetLastNews()
  return (
    <>
      <UltimosEpisodios />
      <UtimasNoticias News={News} isLoading={isLoading} />
    </>
  )
}

export default Home


