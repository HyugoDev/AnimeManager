import React from 'react'
import Directorio from '../components/anime/Directorio.jsx'
import CardNoticiasRecientes from '../components/news/Card_NoticiasRecientes.jsx'
import { useParams } from 'react-router-dom'
import Carga from '../components/Carga'

import styled from 'styled-components'

import { GetSearchAnime } from '../services/AnimeServices.js'

import { GetSearchNews } from '../services/NewsServices.js'

const Search = () => {
  const { query } = useParams()

  const { Anime, isLoading: isLoadingAnime } = GetSearchAnime(query)
  const { News, isLoading: isLoadingNews } = GetSearchNews(query)

  if (isLoadingAnime && isLoadingNews) {
    return <Carga />
  }


  return (
    <Container>
      {
        Anime ?
          (
            <>
              <h2>Animes</h2>
              <Directorio animes={Anime}
              />
            </>) : (null)
      }
      {
        News ?
          (
            <>
              <h2>Noticias</h2>
              <CardNoticiasRecientes News={News} isLoading={isLoadingNews} />
            </>
          ) : (null)
      }
    </Container>
  )
}

export default Search


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
  }
`;