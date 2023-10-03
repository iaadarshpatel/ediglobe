import React, { useState} from 'react'
import './nav.css'
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBarsStaggered } from 'react-icons/fa6';
import logo from "../../assets/EdiGlobe Website-01.png"


const Nav = () => {

  // const logoStyle = {
  //   fontFamily: 'Typo Round Regular Demo, sans-serif',
  //   textDecoration: 'none', // Remove underlining for links
  // };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
    window.addEventListener('scroll', changeNavbarColor);

  const [show, setShow] = useState(false);

  const toggleMenu = () => {
        setShow(!show);
    };

    const mobileMenuClass = show ? 'show open' : 'show';

  // Active Navbar on Click
  const [activeNav, setActiveNav] = useState('#')
  const Adarsh = () =>{
    setActiveNav('#');
  }

  return (
    <>
    <section className="navbar-bg">
      <nav className={`navbar navbar-expand-lg navbar-light ${colorChange ? 'navbar colorChange' : 'navbar'}`}>
        <div className="container">
          
          <img src={logo} alt="course_pic" />
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {show ? <LiaTimesSolid/> : <FaBarsStaggered />} 
          </button>
 
            <div className={`collapse navbar-collapse ${mobileMenuClass}`} id="myNavbar">
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" onClick={Adarsh} className={`nav-link ${activeNav === '#' ? 'active' : ''}`} aria-current="page">About Us</a>
              </li>
              
              <li className="nav-item">
                <a href="#feature" onClick={() => setActiveNav('#feature')} className={`nav-link ${activeNav === '#feature' ? 'active' : ''}`}>What We Offer</a>
              </li>
              
              <li className="nav-item">
                <a href="#course" onClick={() => setActiveNav('#course')} className={`nav-link ${activeNav === '#course' ? 'active' : ''}`}>Courses</a>           
              </li>
              
              <li className="nav-item">
                <a href="#registration" onClick={() => setActiveNav('#registration')} className={`nav-link ${activeNav === '#registration' ? 'active' : ''}`}>Blog</a>
              </li> 
              <li className="nav-item">
                <a href="#footer" onClick={() => setActiveNav('#footer')} className={`nav-link ${activeNav === '#footer' ? 'active' : ''}`}>Contact Us</a>
              </li>
            </ul>
            
            <form className="d-flex">
              <button href="/login" onClick={() => setActiveNav('/login')} className="btn btn-outline-success" type="submit" >Join Free</button>
            </form>
        </div>      
      </div>
    </nav>
    </section>
    </> 
  )
}

export default Nav