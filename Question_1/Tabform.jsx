import React, { Component, useEffect, useState } from 'react'
import Profile from './Profile';
import Interest from './Interest';
import Settings from './Settings';
import styled from "styled-components";


const Tabform = () => {
    const[data, setdata]= useState({
        name :"Anshu",
        age: 22,
        email: "anshu@gmailcom",
        interests: ["coding","dancing","playing badminton"],
        settings:"dark"
    })
    const [activetab, setactivetab] = useState('Profile')

    const tabs = [
        {
            name: "Profile",
            Component: Profile
        },
        {
            name: "Interest",
            Component: Interest
        },
        {
            name: "Settings",
            Component: Settings
        }

    ]


    const ActiveTabCOmponent = tabs.find(tab => tab.name === activetab)?.Component
    return (
        <Main>
            <Tabwrap>
                {tabs.map((tab) => <div className="Tabss" key={tab.name} onClick={() => setactivetab(tab.name)}>{tab.name}</div>)}
            </Tabwrap>
            <TabBody>
                <ActiveTabCOmponent data={data} setdata={setdata}/>
            </TabBody>
        </Main>

    )
}

export default Tabform

const Main= styled.div`
    
`
const Tabwrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    .Tabss{
        border: 2px solid black;
        padding: 5px;
        cursor: pointer;
    }
`
const TabBody = styled.div`
    border: 2px solid black;
    height: 70vh;
    width: 70vw;
    margin: 0 auto;
`