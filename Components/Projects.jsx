import React from 'react'
import styled from 'styled-components'


const Projects = () => {
  return (
    <Projectsection id="Projects">
      <Title>Projects</Title>
      <Projectgrid>
        {projectData.map((project, index)=> (
            <Projectcard key={index}>
                <Projecttitle>{project.title}</Projecttitle>
                <Taggroup>
                    {project.tags.map((tag, i)=>(
                        <Tag key={i}>{tag}</Tag>
                    ))}
                </Taggroup>
                <Viewlink href={project.link} target='_blank' rel='noopener norefferer'>View Project Code --</Viewlink><br/>
            </Projectcard>
        ))}
      </Projectgrid>
    </Projectsection>
  )
}

const projectData = [
    {
        title: "Contact Form",
        tags: ["React", "Bootstrap", "CSS", "HTML"],
        link:"https://github.com/Anshu012verma/React/tree/main/Contact",
        
    },
    {   
        title: "Dice Game",
        tags: ["React", "Styled CSS", "JavaScript", "HTML"],
        link:"https://github.com/Anshu012verma/React/tree/main/Components",
    },
    {
        title: "Brand Page",
        tags: ["React", "CSS", "HTML", "Bootstrap"],
        link:"https://github.com/Anshu012verma/React/tree/main/Project",
    },
    {
        title: "Quiz",
        tags: ["React", "CSS", "HTML", "JavaScript"],
        link:"https://github.com/Anshu012verma/React/tree/main/Quiz",
    }
]

export default Projects

const Projectsection = styled.div`
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    margin-top: 100px;
    scroll-margin-top: 80px; 
`

const Title = styled.p`
    background: linear-gradient(to right, #1e90ff, #00ffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;`

const Projectgrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

`

const Projectcard = styled.div`
    background-color: #0f0f0f;
    padding: 20px;
    border: 1px solid #222;
    border-radius: 12px;
`

const Projecttitle = styled.p`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
`

const Taggroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 15px 0;
`
const Tag = styled.button`
    background-color: #111;
    color: #00bfff;
    border: 1px solid #1e90ff;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 0.9rem;
`
const Viewlink = styled.a`
    color: #1e90ff;
    font-weight: 600;
    text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`