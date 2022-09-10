import React from 'react'
import EpisodiosRecientes from '../components/anime/EpisodiosRecientes.jsx'
import CardNoticiasRecientes from '../components/news/Card_NoticiasRecientes.jsx'


import { GetLastNews } from '../services/NewsServices.js'


const Home = () => {
  const { News, isLoading } = GetLastNews()
  return (
    <>
      <EpisodiosRecientes />
      <CardNoticiasRecientes News={News} isLoading={isLoading} />
    </>
  )
}

export default Home


