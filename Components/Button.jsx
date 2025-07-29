import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    const { text,outline, ...rest} = props
    return (
        
            
            outline ? (
              <OutlineButton {...rest}>{text}</OutlineButton>): (<Buttons {...rest}>
                {text}
            </Buttons>
            )
        
    )
}

export default Button

const Buttons = styled.button`
    padding: 12px 28px;
    border: none;
    background-color: #1e90ff;
    color: white;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    

  &:hover {
    opacity: 0.85;
  }
`

const OutlineButton = styled(Buttons)`
  background: transparent;
  border: 1px solid #1e90ff;
  color: #1e90ff;
`