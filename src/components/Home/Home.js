import React from 'react';
import './Home.css'
import image from '../../images/laptop.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='text-container'>
                <h1><span className='tagline-first'>You don’t just want a laptop</span></h1>
                <h2><span className='tagline-second'>You want a laptop that works for you</span></h2>
                <p className='home-text'>Laptops. There are just so many of them. But what's the best laptop for you? Is it a business notebook, a powerful gaming laptop, or a Chromebook? We know the sheer number of choices can be overwhelming. We've created this handy, dandy guide so you'll know all the ins and outs of your prospective system before you make the decision to hit the buy button. From advice on choosing screen size, to selecting between an SSD and HDD, to insider scoops on where to find the best prices on laptops, here are some essential tips for finding the right system for you.</p>
                <br />
                <button className='live-btn'>Live Demo</button>
            </div>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;