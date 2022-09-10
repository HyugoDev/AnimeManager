import React from 'react'
import { Card, Name, Episodio, CardContent } from '../../styles/home/card_EpiRecientes.js'
import { Link } from 'react-router-dom'

// import {getuseEpisodio} from '../../../hooks/useEpisodio.js'

const CardEpisodesRecientes = ({ UltiEpisodes }) => {
  //const existe = getuseEpisodio(UltiEpisodes.id)


  return (
        <Card key={UltiEpisodes.id} >
          <Link to={`/ver/${UltiEpisodes.id}`}>
              <div>
                <img
                  src={`${UltiEpisodes.img}`}
                  alt={UltiEpisodes.title}
                  loading="lazy"
                />
              </div>
              <CardContent>
                <Episodio>{UltiEpisodes.episode}</Episodio>
              </CardContent>
                <Name>{UltiEpisodes.title} </Name>
          </Link>
        </Card>
  )
}

export default CardEpisodesRecientes