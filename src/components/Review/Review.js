import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css';
import Rating from 'react-rating';


const Review = (props) => {
    const { name, image, review, rating } = props.review;
    return (
        <div className='cart'>
            <div>
                <div className='img-container'>
                    <img src={image} alt="" />
                    <p>{name}</p>
                </div>
                <Rating className='rating'
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={
                        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
                    }
                    readonly
                ></Rating>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;