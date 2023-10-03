import React from 'react'
import t1 from "../../assets/testimonials/t1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonial.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import {Autoplay, Pagination } from 'swiper';

const data = [
  {
    id: 1,
    test_name: 'Aadarsh',
    feedback: "The ML internship was a game-changer! It boosted my skills and prepared me for the future!",
    Image: t1
  },
  {
    id: 2,
    test_name: 'Rahul',
    feedback: "The web development internship was incredible; I learned a lot and worked on cool projects. It's a perfect stepping stone for my future.",
    Image: t1
  },
  {
    id: 3,
    test_name: 'Avinash',
    feedback: "The digital marketing team was amazing, offering invaluable guidance and support throughout the internship. Their expertise was truly appreciated.",
    Image: t1
  },
  {
    id: 4,
    test_name: 'Aadarsh',
    feedback: "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto.Saw from",
    Image: t1
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
    slidesPerView={2}
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
    data.map(({id, test_name, feedback, Image}) => {
      return (
    <SwiperSlide>
          <div className="row" key={id}>
            <div className="testi_item">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <img src={Image} alt="" />
                </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>{test_name}</h4>
                      <p>{feedback}</p>
                    </div>
                  </div>
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