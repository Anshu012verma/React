import React from 'react'
import styled from 'styled-components'

const Settings = ({data, setdata}) => {
    const{theme} = data;
    const handleDataChange = (e) => {
        setdata((prevState)=>({...prevState,theme: e.target.value}));
    }
    return (
        <Settingss>
            <label>
                <input type="radio" name="theme" value="dark" checked={theme==="dark"} onChange={handleDataChange}/>
                Dark
            </label>
            <label>
                <input type="radio" name="theme" value="light" checked={theme==="light"} onChange={handleDataChange}/>
                Light
            </label>

        </Settingss>
    )
}

export default Settings

const Settingss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`