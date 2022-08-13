import React from 'react';
import './Home.css'
import image from '../../images/laptop.jpg';
import useReviews from '../../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <div className='home-container'>
                <div className='text-container'>
                    <h1><span className='tagline-first'>You don't just want a laptop</span></h1>
                    <h2><span className='tagline-second'>You want a laptop that works for you</span></h2>
                    <p className='home-text'>Laptops. There are just so many of them. But what's the best laptop for you? Is it a business notebook, a powerful gaming laptop, or a Chromebook? We know the sheer number of choices can be overwhelming. We've created this handy, dandy guide so you'll know all the ins and outs of your prospective system before you make the decision to hit the buy button. From advice on choosing screen size, to selecting between an SSD and HDD, to insider scoops on where to find the best prices on laptops, here are some essential tips for finding the right system for you.</p>
                    <br />
                    <button className='live-btn'>Live Demo</button>
                </div>
                <div className='image-container'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='home-review-container'>
                <h1>Customer Reviews(3)</h1>
                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview
                            key={review.id}
                            review={review}
                        ></HomeReview>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='see-all-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;