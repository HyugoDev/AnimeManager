import styled from 'styled-components'
import React from 'react'
import './car.css'

const Carga = () => {
  return (
    <Container>
      <div className='pong'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}

export default React.memo(Carga)


const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 175px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
