import React from 'react'
import CountUp from 'react-countup';
import Button from './Button';
import './registration.css';

const Registration = () => {
  return (
    <section id='registration' className='section_gap registration_area'>
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-lg-7">
            <div className="row clock_sec clockdiv" id="clockdiv">
              <div className="col-lg-12">
                <h1 className="mb-3">Register Now</h1>
                <p>
                  Embark on a transformative learning experience with us. Join our platform to access a universe of educational possibilities. Register now to empower your future through knowledge and innovation.
                </p>
              </div>
              <div className="col clockinner1 clockinner">
                <h1>
                  <CountUp className="days" end={500} duration={8} enableScrollSpy={false} />
                </h1>
                <span className="smalltext">Happy Customers</span>
              </div>

              <div className="col clockinner clockinner1">
                <h1>
                  <CountUp className="days" end={100} duration={8} enableScrollSpy={false} />+
                </h1>
                <span className="smalltext">Industrial Projects</span>
              </div>

              <div className="col clockinner clockinner1">
                <h1>
                  <CountUp className="days" end={5} duration={8} enableScrollSpy={false} />K
                </h1>
                <span className="smalltext">Registered Users</span>
              </div>

              <div className="col clockinner clockinner1">
                <h1>
                  <CountUp className="days" end={30} duration={8} enableScrollSpy={false} />
                </h1>
                <span className="smalltext">Multifaceted courses</span>
              </div>

            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="register_form">
              <h3>Courses for Free</h3>
              <p>It is high time for learning</p>
              <form className="form_area" id="myForm" action="#" method="post">
                <div className="row">
                  <div className="col-lg-12 form_group">
                    <input name="name" placeholder="Your Name" required="" type="text" />
                    <input name="name" placeholder="Your Phone Number" required="" type="tel" />
                    <input name="email" placeholder="Your Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="" type="email" />
                  </div>
                    <Button/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration