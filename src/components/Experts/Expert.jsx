import React from 'react'
import './expert.css';
import t1 from '../../assets/trainer/t1.jpg';
import t2 from '../../assets/trainer/t2.jpg';
import t3 from '../../assets/trainer/t3.jpg';
import t4 from '../../assets/trainer/t4.jpg';
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {FaPhoneAlt} from 'react-icons/fa'


const data = [
  {
    id: 1,
    Image: t1,
    mentorname: "Sakshi Bansal",
    designation: "Sr. Software Engi.",
    aboutmentor: "Replenish man have thing gathering lights yielding ",
  },
  {
    id: 2,
    Image: t2,
    mentorname: "Harshita Saxena",
    designation: "Sr. Software Engi.",
    aboutmentor: "Replenish man have thing gathering lights yielding ",
  },
  {
    id: 3,
    Image: t3,
    mentorname: "Dewasis Mukhia",
    designation: "Sr. Software Engi.",
    aboutmentor: "Replenish man have thing gathering lights yielding ",
  },
  {
    id: 4,
    Image: t4,
    mentorname: "Mili Biswas",
    designation: "Sr. Software Engi.",
    aboutmentor: "Replenish man have thing gathering lights yielding ",
  }]

const Expert = () => {
  return (
    <section className="trainer_area section_gap_top">
    <div className="container">
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-5">
          <div className="main_title">
          <h2 className="mb-3">Our Expert Trainers</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
        </div>
      </div>

    <div className="row justify-content-center d-flex align-items-center">
    {
      data.map(({id, Image, mentorname, designation, aboutmentor}) => {
        return (
        <div className="col-lg-3 col-md-6 col-sm-12 single-trainer" data-aos="fade-up" key={id}>
          <div className="thumb d-flex justify-content-sm-center">
            <img className="img-fluid" src={Image} alt="" />
          </div>
        <div className="meta-text text-sm-center">
            <h4>{mentorname}</h4>
            <p className="designation">{designation}</p>
          <div className="mb-4">
            <p>{aboutmentor}</p>
        </div>

        <div className="align-items-center justify-content-center d-flex">
          <a href="#"><FiTwitter/></a>
          <a href="#"><FaFacebookF/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaLinkedin/></a>
        </div>
      </div>
    </div>
    )})}

    </div>
    </div>
    </section>
  )
}

export default Expert