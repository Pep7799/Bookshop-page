import Logo from './images/logo2.jpg'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Animated from './images/animated.png'
import hp from './images/hp.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import images from './imagesdata'
import bgabout from './images/bgabout.png'
import {FaAward} from 'react-icons/fa'
import {AiTwotoneBook} from 'react-icons/ai'
import {BsClipboardData} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {ImLocation} from 'react-icons/im'
import {IoMdCall} from 'react-icons/io'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


function App() {
  return (
    <div className="container">
      <FirstPage>
      <Header> 
        <div className='img-div'>
          <img src={Logo} width= "80" height="60" alt="logo" />
        </div>
        <div>
         <h1> IDEAL MINDS PUBLICATION CONCEPTS </h1>
        </div>
        <div className='list-menu'>
          <ul className='unordered-lists'>
            <li className='items'>
              HOME
            </li>
            <li className='items'>
              AVAILABLE BOOKS
            </li>
            <li className='items'>
              ABOUT US
            </li>
            <li className='items'>
              CONTACT
            </li>
          </ul>
        </div>

        <div className='moving-text'>
          <h4>We deliver the books upon request. Kindly contact us via the contact form/page.
            <br /> You can also contact us for seminars or trainings</h4>
        </div>
      </Header>   


      <Home>
        <h3>Best Book Seller in Today's World</h3>
        
        <div className='image-components'>       
          <div>
            <img src={Animated} alt="animated" />
          </div>
          <div>
            <img src={hp} alt="home" />
          </div>
        </div>
        <div className='btnbtn'>
          <button className='btn'>Check books <span> <AiOutlineArrowDown/></span></button>
        </div>
      </Home>   
      </FirstPage>

      <BooksC>
        <h5>Available Books</h5>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}

          spaceBetween={200}
          slidesPerView={3}
          navigation
          pagination={{  hide: true, }}

          scrollbar={{  hide: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => {
            return(
              <SwiperSlide className='imagesliders'>
                <img src={image} alt="" />
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
      </BooksC>

      <Contact>
        <div>
          <ul>
            <li>HOME</li>
            <li>AVAILABLE BOOKS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className='location'>
          <div> <ImLocation className='locate'/>No. 7 Akinade Close,Ekerin Ologuneru, Ibadan, Oyo State.
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
      </Contact>

    </div>
  );
}


const FirstPage = styled(motion.div)`
  height: 700px;
  min-height: auto;
`


const Header = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    word-spacing: 10px;
  }

  .unordered-lists {
    list-style: none;
    display: flex;
    margin: 0px 0px;
  }

  .items {
    margin:0px 40px 0px 20px;
    font-size: 16px;
  }

  .moving-text {
      h4 {
        position: absolute;
        white-space: nowrap;
        animation: floatText 12s infinite reverse ease-in;
    }


    @keyframes floatText{
  from {
    left: 00%;
  }

  to {
    /* left: auto; */
    left: 50%;
  }
}
}
  
`

const Home = styled(motion.div)`
  color: #000;
  height: 100px;
  margin: 65px 0px 0px 0px;
  
  font-family: 'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  h3{
    font-size: 30px;
    margin: 0px 20px 0px 0px;
    display: flex;
    justify-content: center;

  }
   
  
  .image-components {
      display: flex;
      flex-direction: row;
      margin: 5px 0px 0px 0px;
      max-width: 100%;
      justify-content: center;


      img {
        width: 300px;
        height: 300px;
        margin:0px 50px 0px 40px;
        
      }
    }

    .btnbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;

    }
    .btnbtn button  {
      background: #FFF;
      color: #000;
      border-radius: 3px;
      
      padding: 5px 0px 5px 10px;
    }

    .btnbtn button:hover {
      cursor: pointer;
    }

    .btnbtn span {
      background: #5429CE;
      padding: 6px 9px 5px 6px;
    }
`

const BooksC = styled(motion.div)`
  background: url(bg);
   height: 630px;
   min-height: auto;
   margin:5px 0px 10px 0px;

   .imagesliders {
     img {
      width: 258px;
      height: 300px;
      margin-bottom: 20px;
     }
   }

   .about {
    display: flex;
    flex-direction: row;
   }

   .icons-about {
    flex-direction: column;
    margin: 0px 0px 0px 10px;
   }

   .words {
    margin: 0px 20px;
   }

   .icon {
    margin: 15px 0px;
   }

` 

const Contact = styled(motion.div)`
  height: 300px;
  min-height: auto;
  background: black;
  color: #FFF;
  display: flex;
  flex-direction: row;

  ul {
    list-style: none;
    margin-top: 28px;

  }

  li {
    margin: 8px 0px 40px 0px;
    font-size: 15px;
  }

  .location {
    margin: 1px 24px 1px 55px; 
  }

  .location p {
    padding-left: 14px;
  }
  .location2 {
    margin: 30px 0px;
  }
  .locate {
    color: #5429CE;
    font-size: 20px;
    margin-top: 24px;
  }

  .update {
    margin: 10px 10px 0px 80px ;
  }

  .email-text {
    padding: 8px 10px;
    border-radius: 15px;
    position: absolute;
  }

  .update button {
    color: #FFF;
    position: relative;
    background: #5429CE;
    left: 120px;
    top: 7px;
    font-size: 10px;
    padding: 6px 3px;
    border: none;
    border-radius: 7px;
    
  }

  .update button:hover {
    cursor: pointer;
  }
`

export default App;
