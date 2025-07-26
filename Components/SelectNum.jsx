import { useState } from 'react';
import styled from 'styled-components'

const SelectNum = ({setError, error, selectedNum, setselectedNum}) => {

  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) =>{
    setselectedNum(value)
    setError("")
  }
  return (
    <Upper>
      {error && <ErrorText>{error}</ErrorText>}
    <Container >
      {
        arrNum.map((value, i)=>(
            <Box isSelectNum={value=== selectedNum} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))
      }
    </Container>
    <p>Select Number</p>
</Upper>
  )
}

export default SelectNum
const Upper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
const ErrorText = styled.p`
  color: red;
  font-size: 16px;
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  text-align: center;
  align-content: center;
  font-size: 30px;
  background-color: ${(props) => (props.isSelectNum ? "black" : "white")};
  color: ${(props) => (props.isSelectNum ? "white" : "black")};
  
`


const Container = styled.div`
  display: flex;
  gap: 10px;

  
`

