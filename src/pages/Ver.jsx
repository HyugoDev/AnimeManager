import React from 'react'
import VerEpisodio from '../components/anime/VerEpisodio.jsx'
import Carga from '../components/Carga'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

import { GetVerEpisodio } from '../services/AnimeServices.js'



const Ver = () => {
  const { episodio } = useParams()
  const { data, isLoading } = GetVerEpisodio(episodio)

  if (isLoading) {
    return <Carga />
  }

  return (
    <Container>
      <Link to={`/anime/${data.anime_id}`} >
        {data.anime_id ? data.anime_id.replace(/-/g, ' ').toUpperCase() : ''}
      </Link>
      {
        data.episode_URL ?
          <VerEpisodio ver={data.episode_URL} /> : null
      }
    </Container>
  )
}

export default Ver

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;