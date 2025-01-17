"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

const ImageSlider = () => {
  return (
    <Carousel
        arrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
    >
        {['img2.jpg','img4.jpg','img3.jpg','img5.jpg','img6.jpg','img1.jpg',].map((image,index) =>(
            <div key={index} className='p-4'>
                <div className='h-[400px] relative'>
                    <Image src={`/images/${image}`} alt='image' className='object-cover rounded-md' fill/>
                </div>
            </div>
        ))}
    </Carousel>
  )
}

export default ImageSlider