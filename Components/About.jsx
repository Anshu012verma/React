import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutSection id="About">
      <Title>About Me</Title>
      <Intro>I'm a passionate full-stack developer skilled in React and Python, eager to build scalable websites and web applications and contribute to impactful projects.</Intro>
      <SkillsGroup>
        <Skills>
          <Subheading>Frontend</Subheading>
          <Tagcontainer>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>React</Tag>
          </Tagcontainer>
        </Skills>
        <Skills>
          <Subheading>Backend</Subheading>
          <Tagcontainer>
            <Tag>Python</Tag>
            <Tag>SQL</Tag>
          </Tagcontainer>
        </Skills>
      </SkillsGroup>
      <Education>
        <Subheading>Education</Subheading>
        <Edlist>
        <ul>
          <li><strong>Graduation in BA Programme (Computer Science + Mathematics)</strong><br />
          University of Delhi<br />
          Graduated: 2024
          </li>
          <li><strong>Currently pursuing Full Stack Web Development</strong> (With python). </li>
        </ul>
        </Edlist>
      </Education>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.div`
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    /* scroll-margin-top: 80px;  */
`
const Title = styled.p`
    background: linear-gradient(to right, #1e90ff, #00ffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`
const Intro = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: white;
    border: 1px solid #222;
    border-radius: 12px;
    padding: 20px;
`
const SkillsGroup = styled.div`
    display: flex;
    gap: 50px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    border: 1px solid #222;
    border-radius: 12px;
    padding: 20px;

`
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 250px;
 
  `
const Subheading = styled.h3`
    color: white; 

`
const Tagcontainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
`
const Tag = styled.button`
    background-color: #111;
    color: #00bfff;
    border: 1px solid #1e90ff;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 0.9rem;
`

const Education = styled.div`
   justify-content: center;
    max-width: 1000px;
    margin: auto;
     border: 1px solid #222;
    border-radius: 12px;
    padding: 20px;
`

const Edlist = styled.div`
  color: white;
`