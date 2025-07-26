import React from 'react'
import brandLogo from './brand_logo.png'
import './project.css'


const Project = () => {
    return (
        <div>
            <nav>    
                <div className='logo'>
                <img src={brandLogo} alt="logo" />
            </div>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button className='btn btn-danger'>Login</button>
            </nav>

        </div>
    )
}

export default Project
