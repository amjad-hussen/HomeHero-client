import React from 'react';
import Slide from '../../Components/HomeLayout/Slide';
import Service from '../../Components/HomeLayout/Service';

    const slidePromise = fetch('http://localhost:3000/slide').then(res => res.json())
    const serivePromise = fetch('http://localhost:3000/service').then(res =>res.json())

const Home = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Slide slidePromise ={slidePromise}></Slide>
            <Service serivePromise={serivePromise}></Service>
        </div>
    );
};

export default Home;