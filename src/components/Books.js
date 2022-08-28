import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import images from '../imagesdata'
import bgabout from '../images/bgabout.png'
import {FaAward} from 'react-icons/fa'
import {AiTwotoneBook} from 'react-icons/ai'
import {BsClipboardData} from 'react-icons/bs'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const Books = () => {
  return (
    <div id = 'books'>
    
    <h5>Available Books</h5>

    <Swiper 
      className = "swiper-container"  
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        // when window width is >= 640px
        600: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}

      spaceBetween={200}
      navigation
      pagination={{  hide: true, }}

      scrollbar={{  hide: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image) => {
        return(
          <SwiperSlide className='imagesliders'>
            <img src={image} alt='books available' />
          </SwiperSlide>
        )
      } )}
      
    </Swiper>

    <div className='about'>
      <div className = 'words'>
        <h4>In  IDEAL MIND PUBLICATIONS CONCEPTS,
          
           We provide services that entails lots of ideas  and 
           <br />
           gives teachers training on how to teach their pupils.
         
           We also publish books and organize seminars</h4>
      </div>
      <div className='icons-about'>
        <div className='icon'>
        <FaAward className='each-icon'/> ORGANIZE SEMINARS 
        </div>
        <br />
        <div className='icon'>
        <AiTwotoneBook className='each-icon'/> PUBLISH BOOKS
        </div>
        <br />
        <div className='icon'>
        <BsClipboardData className='each-icon'/> TRAININGS
        </div>
      </div>
    </div>
    </div>
  
  )
}





export default Books