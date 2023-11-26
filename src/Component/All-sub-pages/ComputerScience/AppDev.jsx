import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import { FaDownload  } from "react-icons/fa6";
import course_image from "../../../assets/about/course-details.jpg"
import Department from '../../departments/cards'
import './app.css'
import Rating from '../../departments/Rating'

const AppDev = () => {

  const FaqData = [
    {
      id: 1,
      question: "How the training will be conducted?",
      answer: "Training will be conducted in a variety of ways, such as live interactive sessions as well as recorded sessions and the duration will be as per the Schedule. These methods will ensure an engaging and interactive learning experience."
    },
    {
      id: 2,
      question: "Do we need any software or hardware for the sessions?",
      answer: "No worries! You won't need any specific software or hardware for the training sessions. Just make sure you have a stable internet connection and a device to access the online modules and virtual classes."
    },
    {
      id: 3,
      question: "What are the prerequisites of the program?",
      answer: "There are no specific prerequisites. Nevertheless, having basic skills in accordance with the course would be a good starting point."
    },
    {
      id: 4,
      question: "Which month can I start the program?",
      answer: "You can start the internship in any month as per your availability. In ediglobe every month new batches start."
    }
    ,
    {
      id: 5,
      question: "After enrolling can I change the month for my program due to any reasons?  ",
      answer: "Definitely! After enrolling, if you need to change the start month of your program for any reason, you can reach out to the support team and discuss the possibility of rescheduling. They will assist you with the necessary steps."
    }
  ];

  const Pricedata = [
    {
      id: 1,
      price: "5000",
      dynamicColor: "#016ca5",
      course_type: "Self Paced",
      course_description: [
        {
          course_desc_1: "40hrs Recorded Session",
          course_desc_2: "6 Months of LMS Access",
          course_desc_3: "Course Completion Certificate",
          course_desc_4: "Internship Completion Certificate",
          course_desc_5: "Excellence Completion Certificate",
        }
      ]
    },
    {
      id: 2,
      price: "6500",
      course_type: "Mentor Led",
      course_description: [
        {
          course_desc_1: "40hrs Recorded Session",
          course_desc_2: "6 Months of LMS Access",
          course_desc_3: "Course Completion Certificate",
          course_desc_4: "Internship Completion Certificate",
          course_desc_5: "Excellence Completion Certificate",
          course_desc_6: "Excellence Completion Certificate",
          course_desc_7: "Excellence Completion Certificate",
        }
      ]
    },
    {
      id: 3,
      price: "8500",
      dynamicColor: "#016ca5",
      course_type: "Advanced",
      course_description: [
        {
          course_desc_1: "40hrs Recorded Session",
          course_desc_2: "6 Months of LMS Access",
          course_desc_3: "Course Completion Certificate",
          course_desc_4: "Internship Completion Certificate",
          course_desc_5: "Excellence Completion Certificate",
        }
      ]
    }

  ]


  return (
    <>
      <Nav />
      <section id='aboutUs' className='banner_area'>
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="banner_content text-center">
                  <h2>App Development</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/computerscience">Computer Science</Link>
                    <Link to="">App Development</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='department' className='course_details_area section_gap'>
        <div className="container">
          <div className="main_title" data-aos="fade-up">
            <h2>About Program</h2>
            <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
          <div className="row">
            <div className="col-lg-8 course_details_left">
              <div className="main_image">
                <img className="img-fluid" src={course_image} alt="" />
              </div>
              <div className="content_wrapper">
                <h4 className="title">Objectives</h4>
                <div className="content">
                  When you enter into any new area of science, you almost always find yourself with a
                  baffling new language of
                  technical terms to learn before you can converse with the experts. This is certainly
                  true in astronomy both in

                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                  commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum. Lorem ipsum dolor sit

                </div>
                <h4 className="title">Eligibility</h4>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                </div>
                <h4 className="title">Course Outline</h4>
                <div className="content">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    {FaqData.map((faqItem) => (
                      <div className="accordion-item" key={faqItem.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse${faqItem.id}`}
                            aria-expanded="false"
                            aria-controls={`flush-collapse${faqItem.id}`}
                          >
                            {faqItem.question}
                          </button>
                        </h2>
                        <div
                          id={`flush-collapse${faqItem.id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">{faqItem.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 right-contents">
              <form className='shadow p-1 mb-5 bg-body'>
                <label className="justify-content-between d-flex">
                  <input type="text" placeholder="Full Name" />
                </label>
                <label className="justify-content-between d-flex">
                  <input type="text" placeholder="Email" />
                </label>
                <label className="justify-content-between d-flex">
                  <input type="tel" placeholder="Contact Number" />
                </label>
                <label className="justify-content-between d-flex">
                  <input type="text" placeholder="Institue Name" />
                </label>
                <a href="#" className="primary-btn2 text-uppercase enroll rounded-0">
                  Enroll the course
                </a>
              </form>
              <h4 className="title">Reviews</h4>
              <div className="content">
                <div className="review-top row pt-40">
                  <div className="col-lg-12">
                    <h6 className="mb-15">Provide Your Rating</h6>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                      <Rating/>
                      </div>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Puncuality</span>
                      <div className="star">
                      <Rating/>
                      </div>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                      <Rating/>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title">Check our Curriculum  <FaDownload className='ms-2'/></h4>
              <div className="content">
                <div className="review-top row pt-40">
                  <div className="col-lg-12">
                    <div className="d-flex flex-row reviews justify-content-between">
                    <p>The app development curriculum encompasses programming, UI/UX design, and backend development using Swift and Flutter, guiding learners through cross-platform deployment and API integration for a comprehensive skill set.</p>
                    
                    </div>
                  </div>
                </div>
                </div>
                <div className="feedback">
                  <form action="#">
                    <h6>Your Feedback</h6>
                    <textarea name="feedback" className="form-control" cols="10" rows="10"></textarea>
                    <div className="mt-3" style={{ textAlign: 'right' }}>
                      <a href="#" className="primary-btn2 rounded-0 ">Submit</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="main_title section_gap" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
          <div className="courses_container" data-aos="fade-up" data-aos-offset="0">
            {
              Pricedata.map((course) => {
                return (
                  <div class="ag-courses_item" key={course.id}>
                    <div href="#" class="ag-courses-item_link" style={{borderRadius: "20px"}}>
                      <div className="ag-courses-item_bg" style={{ backgroundColor: course.dynamicColor }}></div>
                      <div class="ag-courses-item_title text-center">
                        <b>{course.course_type}</b> <br />
                        <hr />
                        {course.course_description ? (
                          <ul style={{ fontSize: "1rem" }} className='text-start'>
                            {Object.values(course.course_description[0]).map((desc, index) => (
                              <li className='bullet' key={index}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>No course description available.</p>
                        )}
                      </div>
                      <div class="ag-courses-item_date-box">
                        <Link to={course.link_path}>
                          <button className="btn btn-outline-success cards-btn" type="submit" >View Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </section>
      <Department/>
      <Footer />
    </>
  )
}

export default AppDev