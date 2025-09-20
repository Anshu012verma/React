import React from 'react'
import styled from 'styled-components'
import Bar from './Bar'

const Progress = () => {

  const diffBar = [46, 29, 78, 30, 3]
  return (
    <Main>
      <h1>Progress Bar</h1>
      <Bar className='bar' progress={70}/>
      {
        diffBar.map((p)=><Bar key={p} progress={p}/>)
      }
    </Main>
  )
}

export default Progress

const Main = styled.div`
justify-items: center;
`

