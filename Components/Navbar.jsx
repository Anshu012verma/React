import React from 'react'
import styled from "styled-components"

const Navbar = () => {
  return (
    
      <Navwrapper>
        <Name><span className='startname'>Anshu</span> <span className='endname'>Verma</span></Name>
        <Navlinks>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
        </Navlinks>
      </Navwrapper>
    
  )
}

export default Navbar

const Navwrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Name = styled.p`
    color: white;
    font-size: 26px;
    font-weight: 600;

    .endname{
        color: #1e90ff;
    }
`
const Navlinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  color: white;

  li{
    cursor: pointer;
    font-weight: 500;

    &:hover{
       color: #1e90ff;
    }

       a {
      color: white;
      text-decoration: none;

      &:hover {
        color: #1e90ff;
      }
  }
}
`