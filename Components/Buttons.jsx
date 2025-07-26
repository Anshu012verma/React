import React from 'react'
import styled from 'styled-components'



const Buttons = (props) => {
  const{text, onClick} = props
  return (
    <div>
      <Button onClick={onClick}>
        {text}
      </Button>
      
    </div>
  )
}

export default Buttons

const Button = styled.button`
  background-color: black;
  color:white ;
  font-size: 13px;
  padding: 7px 50px;
  border-radius: 4px;
  min-width: 220px;

  
  &:hover{
    background-color: #535050;
  }
`
