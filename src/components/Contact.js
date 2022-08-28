import React from 'react'

import {GrMail} from 'react-icons/gr'
import {ImLocation} from 'react-icons/im'
import {IoMdCall} from 'react-icons/io'
import { Link } from 'react-scroll/modules'


const Contact = () => {
  return (
    <div id = 'contact' className='contact'>
        <div>
          <ul>
            <p>Quick Links</p>
            <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link></li>
            <li> <Link to="books" spy={true} smooth={true} offset={-100} duration={500}>AVAILABLE BOOKS</Link></li>            
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link></li>
          </ul>
        </div>
        <div className='location'>
          <div className='location2'> <ImLocation className='locate'/>No. 7 Akinade Close,Ekerin Ologuneru, Ibadan, Oyo State.
          <p> 3, Olatunde Onasanya Street, Alagbole- Ajuwon, Ogun state</p>
          </div>
          <div className='location2'><GrMail className='locate'/> ekundayoadeniyifolami@rocketmail.com  </div>
          <div className='location2'><IoMdCall className='locate'/> 08066186611, 09014353858, 07086376367</div>
        </div>
        <div className='update'>
          <p>UPDATE</p>
          <h6>Subscribe to get new books update</h6>
          <form action="">
          <input type="email" className='email-text' /> <span><button>SUBSCRIBE</button></span>
          </form>
          <p>We don’t sell your email and spam</p>
        </div>
      </div>

  )
}



export default Contact