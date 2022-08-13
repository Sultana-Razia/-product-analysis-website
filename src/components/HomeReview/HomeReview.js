import React from 'react';

const HomeReview = (props) => {
    const { name, image, review, rating } = props.review;
    return (
        <div>
            <div className='img-container'>
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
            <p><small>{rating}</small></p>
            <p>{review}</p>
        </div>
    );
};

export default HomeReview;