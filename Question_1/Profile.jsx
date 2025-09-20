import React from 'react'
import styled from 'styled-components'

const Profile = ({data, setdata}) => {
    const{name, age, email} = data;
    const handleDataChange = (e, item) => {
        setdata((prevState)=>({...prevState,[item]: e.target.value}));
    }
  return (
    <Inputfield>
    
      <label htmlFor="">NAME</label>    
      <input type="text" value={name} onChange={(e)=>handleDataChange(e, "name")}/>
      <label htmlFor="">AGE</label>
      <input type="number" value={age} onChange={(e)=>handleDataChange(e, "age")}/>
      <label htmlFor="">EMAIL</label>
      <input type="email" value={email} onChange={(e)=>handleDataChange(e, "email")}/>
    </Inputfield>
  )
}

export default Profile

const Inputfield = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`