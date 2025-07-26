import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const StartGame = ({toggle}) => {
  return (
    <div>
      <Container>
        <img src="/dices 1.png" alt="" />
        <div className='content'>
          <h1>DICE GAME</h1>
          <Buttons onClick={toggle} text="Play Now" />
        </div>
      </Container>
    </div>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  gap: 50px;
  margin: 0 auto;
  align-items: center;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
  
`

