import styled from 'styled-components'
import React, { useState, useEffect } from 'react'


const VerEpisodio = ({ ver }) => {
  const [video, setVideo] = useState(ver[0])

  const handleChange = (e) => {
    setVideo(e)
  }

    useEffect(() => {
    setVideo(ver[0])
  }, [ver])


  return (
    <Container id="divvideo">
      <ContainerB>
        {ver.map((info) => (
          <button
            key={info.url}
            className={'button'}
            onClick={() => handleChange(info)}
          >
            {info.server}
          </button>
        ))}
      </ContainerB>

      <Video
        src={video.url}
        allowFullScreen
        title={video.server}
        controls

      

      />

    </Container>
    
  )
}

export default VerEpisodio

const Video = styled.iframe`
  width: 1500px;
  height: 800px;
  border-radius: 20px;
  border: none;
  margin-bottom: 20px;

  @media (max-width: 1600px) {
    width: 1000px;
    height: 600px;
  }

  @media (max-width: 1000px) {
    width: 800px;
    height: 500px;
  }
  @media (max-width: 800px) {
    width: 600px;
    height: 400px;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 300px;
  }
  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 300px) {
    width: 200px;
    height: 100px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerB = styled.div`
  margin: 2rem;
  
  .button {
    width: 100px;
    height: 30px;
    border-radius: 1rem;
    cursor: pointer;
    margin: 10px;
    text-transform: uppercase;
  }
`
