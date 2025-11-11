import React, { use } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from 'react-router';

const Slide = ({slidePromise}) => {
    const slides = use(slidePromise)
    return (
        <motion.div 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >
            <Swiper modules = {[Pagination, Autoplay]} pagination ={ {clickable:true }} autoplay= {{delay:5000}} loop={true} >

                {
                    slides.map(slide => (
                        <SwiperSlide key={slide._id}>
                            <div className='relative w-full  h-[350px] md:h-[450px] lg:h-[520px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 mt-5 rounded-2xl' style={{backgroundImage: `url(${slide.image})`}}>
                                <div className='absolute inset-0 bg-black/40 rounded-2xl'></div>
                                <div className='z-20 text-center '> 
                                    <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white'>{slide.headline}</h2>
                                    <p className='font-semibold text-white mt-3 '>{slide.details}</p>
                                    <Link to={'/service'} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold border-none shadow-none mt-5 px-5 py-2 text-xl">{slide.button}</Link>
                                </div>

                            </div>
                             
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </motion.div>
    );
};

export default Slide;