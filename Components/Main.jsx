import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Main = () => {
  return (
    
    <Mainsection id="Home">
        <Title>Hi, I’m <span>Anshu Verma</span></Title>
        <About>I’m a full-stack python developer who loves crafting clean, scalable web applications.
        My goal is to build solutions that offer both exceptional performance and a delightful user experience.</About>
        <Buttonss>
        <Button as="a" href="#Projects" text="View Projects" />
        <Button as="a" href="#Contact" text="Contact Me" outline />
        </Buttonss>
    </Mainsection>
  )
}

export default Main

const Mainsection = styled.section `
    text-align: center;
    padding: 100px 20px;
    max-width: 800px;
    margin: auto;
    color: white;
    /* scroll-margin-top: 80px;  */
`

const Title =styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;

    span{
    background: linear-gradient(to right, #1e90ff, #00ffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`
const About = styled.p`
    color: white;
    font-size: 1.1rem;
    line-height: 1.6;
`
const Buttonss = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`