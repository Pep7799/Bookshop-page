import React from 'react'
import Logo from '../images/logo2.jpg'


import { Link } from 'react-scroll/modules';


const Header = () => {
  const [click, setClick] = React.useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)


  return (
    <div className = 'headers'> 
    <div className='img-div'>
      <img src={Logo} width= "80" height="60" alt="logo" />
    </div>
    <div>
     <h1> IDEAL MINDS PUBLICATION CONCEPTS </h1>
    </div>
    <div className='list-menu'>
      <ul className='unordered-lists'>
        <li className='items'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>

          HOME
          </Link>
        </li>
        <li className='items'>
        <Link to="books" spy={true} smooth={true} offset={-130} duration={500}>
            AVAILABLE BOOKS
            </Link>
         
        </li>
        
        
        <li className='items'>
        <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>

          CONTACT
          </Link>
        </li>
      </ul>
    </div>

    <div className='moving-text'>
      <h4>We deliver the books upon request. Kindly contact us via the contact page.
        <br /> You can also contact us for seminars or trainings</h4>
    </div>
  </div>   
  )
}


export default Header