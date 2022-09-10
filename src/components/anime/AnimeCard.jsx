import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Title } from '../../styles/directorio/card.js'




const AnimeCard = ({ anime }) => {
  return (
      <Card >
        {
          anime.id ? (
            <Link to={ `/anime/${anime.id}`}>
              <img src={anime.img} alt={anime.id} loading="lazy"/>
              <CardContent>
                <Title>{anime.title}</Title>
                <span>Tipo: {anime.type} Año: {anime.year}</span>
                {
                  anime.state ? <span>Estado: {anime.state}</span> : <p>Estado: Finalizado</p>
                }
              </CardContent>    
            </Link>
          ) : (
            <a href={ `${anime.link}`} target={"_blank"} rel="noreferrer" >
              <img src={anime.img} alt={anime.link} loading="lazy"/>
              <CardContent>
                <Title>{anime.title}</Title>
              </CardContent>    
            </a>
          )
        }
      </Card>
  )
}

export default AnimeCard

