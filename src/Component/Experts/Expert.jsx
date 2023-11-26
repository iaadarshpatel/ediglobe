import React from 'react'
import './expert.css';
import t1 from '../../assets/trainer/alok.jpg';
import t2 from '../../assets/trainer/Aadarsh.png';
import t3 from '../../assets/trainer/Avinash.jpeg';
import t4 from '../../assets/trainer/Shabnoor.jpeg';
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'


const data = [
  {
    id: 1,
    Image: t1,
    mentorname: "Alok Singh",
    designation: "Front-End Developer",
    aboutmentor: "Seasoned Frontend Developer, Mentor, and Educator",
  },
  {
    id: 2,
    Image: t2,
    mentorname: "Aadarsh Patel",
    designation: "Data Analyst",
    aboutmentor: "Working with complex data in Multi National Company ",
  },
  {
    id: 3,
    Image: t3,
    mentorname: "Avinash Kumar",
    designation: "Sr. Software Developer",
    aboutmentor: "Guiding aspiring developers to excel in software engineering ",
  },
  {
    id: 4,
    Image: t4,
    mentorname: "Shabnoor",
    designation: "Backend Developer",
    aboutmentor: "Guiding backend devs to successful careers ",
  }]

const Expert = () => {
  return (
    <section className="trainer_area section_gap_top">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Our Expert Trainers</h2>
              <p>We are here to support you on your learning journey</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center d-flex align-items-center">
          {
            data.map(({ id, Image, mentorname, designation, aboutmentor }) => {
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
                      <a href="#"><FiTwitter /></a>
                      <a href="#"><FaFacebookF /></a>
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaLinkedin /></a>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>
      </div>
    </section>
  )
}

export default Expert