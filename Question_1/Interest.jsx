import React from 'react'
import styled from 'styled-components'

const Interest = ({data, setdata}) => {
    const{interests} = data;
    const handleDataChange = (e) => {
      const { name, checked } = e.target;
      setdata((prevState) => ({...prevState,interests:checked ? [...prevState.interests,name]
        : prevState.interests.filter((i) => i !== name),
    }))
    }
  return (
    <Interestbox>
      <label> 
      <input type="checkbox" name='coding' checked={interests.includes("coding")} onChange={handleDataChange} />
      Coding
      </label>
      <label>
      <input type="checkbox" name='dancing' checked={interests.includes("dancing")} onChange={handleDataChange}/>
      Dancing
      </label>
      <label>
      <input type="checkbox" name='music' checked={interests.includes("music")} onChange={handleDataChange}/>
      Music
      </label>

    </Interestbox>
  )
}

export default Interest

const Interestbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`