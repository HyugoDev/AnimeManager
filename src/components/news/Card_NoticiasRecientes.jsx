import React from 'react'
import Carga from '../Carga'


import { Container, Card, BodyCard, ContainerImg, Titulo } from '../../styles/home/card_noticiaReciente.js'


const CardNoticiasRecientes = ({ News, isLoading }) => {



  if (isLoading) {
    return <Carga />
  }

  return (
    <>
      <Titulo>Noticias</Titulo>
      <Container>
        {
          News.map((item) => (
            <Card key={item.url} >
              <BodyCard href={item.url} target={"_blank"} rel="noreferrer">
                <p>{item.date}</p>
                <ContainerImg>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </ContainerImg>
                <h2>{item.title}</h2>
              </BodyCard>
            </Card>
          ))}
      </Container>
    </>
  )
}




export default CardNoticiasRecientes