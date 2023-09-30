import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Feature from './components/features/Feature'
import Course from './components/courses/Course'
import Registration from './components/registration/Registration'
import Testimonial from './components/testimonials/Testimonial'
import Footer from './components/footer/Footer'
import Expert from './components/Experts/Expert'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
  },[]);
  return (  
    <>
          <Nav/>
          <Home/>
          <Feature/>
          <Course/>
          <Registration/>
          <Expert/>
          <Testimonial/>
          <Footer/> 
    </>
  );
}

export default App