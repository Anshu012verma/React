import React from 'react'
import styled from 'styled-components';


const Score = ({score}) => {
    return (
        <Main>
            <div className='score'>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
        </Main>
    )
}

export default Score

const Main = styled.main`
  h1{
    font-size: 80px;
    font-weight: 400;
    margin: 0;
  }
  p{
    font-size: 20px;
    margin: 0;
    font-weight: 400;
    

  }
  .score{
    display: flex;
    flex-direction: column;
    max-width: 200px;
    justify-content: center;
    align-items: center;
  }

`