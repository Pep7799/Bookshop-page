import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Animated from '../images/animated.png'
import hp from '../images/hp.png'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Home = () => {
  return (
    <div id='home' className = 'home'>
      <h3>Best Book Seller in Today's World</h3>
      
      <div className='image-components'>       
        <div>
          <img src={Animated} className = 'animated' alt="animated" />
        </div>
        <div>
          <img src={hp} className = 'book' alt="home" />
        </div>
      </div>
      <div className='btnbtn'>
        <button className='btn'>Check books <span> <AiOutlineArrowDown/></span></button>
      </div>
    </div>   
  )
}


export default Home