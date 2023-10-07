import React from 'react'
import t1 from '../../assets/trainer/Saakshi.png';
import t2 from '../../assets/trainer/Harshita.png';
import t3 from '../../assets/trainer/Dewasis.png';
import t4 from '../../assets/trainer/Durga.png';
import t5 from '../../assets/trainer/Mili.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonial.css'
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import {Autoplay, Pagination } from 'swiper';

const data = [
  {
    id: 1,
    alum_name: 'Sakshi',
    feedback: "The machine learning internship program was an absolute game-changer! I had the opportunity to work on cutting-edge projects and collaborate with brilliant minds in the field. It was an invaluable experience that boosted my skills and knowledge in machine learning. I can't thank the program enough for preparing me for my future endeavours!",
    Image: t1
  },
  {
    id: 2,
    alum_name: 'Harshita',
    feedback: "That web development internship program was absolutely incredible! I learned so much and had the chance to work on some really cool projects. It was the perfect stepping stone for my future in the field. I can't wait to see where this new adventure takes me! Good luck and here's to an exciting future ahead! ",
    Image: t2
  },
  {
    id: 3,
    alum_name: 'Dewasis',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t3
  },
  {
    id: 4,
    alum_name: 'Durga',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t4
  },
  {
    id: 5,
    alum_name: 'Mili',
    feedback: "The digital marketing and support team were absolutely amazing! They were always there to provide guidance and assistance whenever needed. Their expertise and dedication made the internship experience even more valuable. I can't thank them enough for their support throughout the program!",
    Image: t5
  },
]

const Testimonial = () => {
  return (
    <section id='testimonials' className="testimonial_area section_gap">
      <div  className='container'>
      <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-5">
            <div className="main_title">
                <h2 className="mb-3">Client say about me</h2>
                <p>Replenish man have thing gathering lights yielding shall you</p>
            </div>
          </div>
        </div>
    <Swiper
    slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
  >
  {
    data.map(({id, alum_name, feedback, Image}) => {
      return (
    <SwiperSlide>
    <div className="site-section bg-left-half mb-5" key={id}>
      <div className="container">      
        <div className="media-29101">
          <img src={Image} alt="Image" className="img-fluid"/>
              <h4><a href="#">{alum_name}</a></h4>
                <p className='double-qote'>{feedback}</p>
        </div>
      </div>
    </div>
    </SwiperSlide>
    )})
  }
    </Swiper>
  </div>
    </section>
  )
}

export default Testimonial