import React from 'react';
import Slide from '../../Components/HomeLayout/Slide';
import Service from '../../Components/HomeLayout/Service';
import Features from '../../Components/Features/Features';
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard';

    const slidePromise = fetch('http://localhost:3000/slide').then(res => res.json())
    const serivePromise = fetch('http://localhost:3000/service').then(res =>res.json());
    const featuresPromise = fetch('http://localhost:3000/features').then(res => res.json());

const Home = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Slide slidePromise ={slidePromise}></Slide>
            <Service serivePromise={serivePromise}></Service>
            <Features featuresPromise ={featuresPromise}></Features>
            <TestimonialCard></TestimonialCard>
        </div>
    );
};

export default Home;