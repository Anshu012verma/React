import React from 'react'
import flipkart from './flipkart.png'
import amazon from './amazon.png'
import shoeImg from './shoe_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH 
                    OUR 
                    SHOES.</p>
                <div className='hero-btn'>
                <button className='btn btn-danger'>Shop Now</button>
                <button className='cate-btn'>Category</button>
                </div>
                <div>
                    <p>Also Available On</p>
                    <div className='shop-image'>
                    <img src={flipkart} alt="flipkart" />
                    <img src={amazon} alt="amazon" />
                    </div>

                </div>

            </div>
            <div className='hero-image'>
                <img src={shoeImg} alt="image" />
            </div>
        </div>
    )
}

export default Hero
