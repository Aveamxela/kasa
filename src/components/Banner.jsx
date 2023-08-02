import React from 'react';

const Banner = (props) => {
    const test = props.image
    console.log(test)
    return (
        <div className='banner'
        style ={{backgroundImage : `url('${props.image}')` }}
        >
        <div className='opacity-banner'></div>
        <div className='position-title'>
        <div className='banner-title'>{props.title}</div>
        </div>
        </div>
    );
};

export default Banner;