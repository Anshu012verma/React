import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Bar = ({progress}) => {
  const[animatedprogress, setAnimatedProgress] = useState(0)

  useEffect(()=> {
    setTimeout(()=> setAnimatedProgress(progress) ,100)
  }, [progress])
  return (
    <Outer>
      <div className='inner' style={{width: `${animatedprogress}%`, color: animatedprogress<5 ? "blue" : "black"}}>
        {progress}%
      </div>
    </Outer>
  )
}

export default Bar

const Outer = styled.div`   
        width: 70vw;
        border: 2px solid black;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px;
    .inner{
        background-color: #4bce2b;
        font-weight: bold;
        padding: 3px;
        transition: 0.5s ease-in;
    }

`