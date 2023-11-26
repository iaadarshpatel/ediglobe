import React from 'react'

const dummy = () => {
  return (
    <div>
    <li className="nav-item">
    <a href="#feature" onClick={() => setActiveNav('#feature')} className={`nav-link ${activeNav === '#feature' ? 'active' : ''}`}>What We Offer</a>
</li>
<a to="/" onClick={Adarsh} className={`nav-link ${activeNav === '#' ? 'active' : ''}`} aria-current="page">About Us
                                    </a >

                                    <li className='right-contents'>
                                    <a class="justify-content-between d-flex" href="#">
                                        <p>Available Seats:</p>
                                        <span class="or">15</span>
                                    </a>
                                </li>
    </div>
    import React from 'react'
import CountUp from 'react-countup';
import Button from './Button';
import './registration.css';
import pic from '../../assets/EdiGlobe Website-03.png'

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
              <div className='reviews col clockinner1 clockinner'>
                <div className='review_pic'>
                <svg width="90%" viewBox="0 0 255 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M216.818 214.202H179.232V155.921C179.232 142.023 178.981 124.132 159.683 124.132C140.107 124.132 137.112 139.274 137.112 154.909V214.198H99.5253V94.3475H135.608V110.726H136.113C139.724 104.613 144.942 99.584 151.212 96.1747C157.481 92.7655 164.567 91.1037 171.714 91.3664C209.81 91.3664 216.833 116.177 216.833 148.454L216.818 214.202ZM57.1158 77.9648C52.8018 77.9655 48.5844 76.6997 44.9971 74.3272C41.4097 71.9548 38.6137 68.5823 36.9621 64.6362C35.3105 60.6902 34.8776 56.3479 35.7185 52.1584C36.5593 47.9688 38.6361 44.1203 41.686 41.0994C44.7358 38.0784 48.6219 36.0208 52.8528 35.1868C57.0837 34.3527 61.4693 34.7796 65.4552 36.4135C69.4411 38.0474 72.8481 40.8149 75.2454 44.3661C77.6428 47.9172 78.9228 52.0926 78.9236 56.364C78.9241 59.2002 78.3603 62.0086 77.2647 64.6291C76.169 67.2495 74.563 69.6306 72.5379 71.6365C70.5129 73.6423 68.1085 75.2335 65.4624 76.3193C62.8163 77.4051 59.9801 77.9643 57.1158 77.9648ZM75.9088 214.202H38.2836V94.3475H75.9088V214.202ZM235.556 0.210594H19.3966C14.4904 0.155772 9.7627 2.03183 6.25276 5.42651C2.74282 8.82119 0.737795 13.4568 0.677917 18.3146V233.233C0.735746 238.093 2.7396 242.732 6.24941 246.13C9.75923 249.528 14.488 251.408 19.3966 251.356H235.556C240.474 251.417 245.216 249.543 248.74 246.145C252.264 242.747 254.281 238.103 254.349 233.233V18.2991C254.279 13.4316 252.26 8.79078 248.736 5.39618C245.213 2.00158 240.472 0.130885 235.556 0.195081" fill="#0A66C2"></path>
                </svg>
                </div>
                <div className='course_rating'>
                  <div className='rating_name'>LinkedIn</div>
                  <div className='rating_num'>Top Rated</div>
                </div>
              </div>
              <div className='reviews col clockinner1 clockinner'>
                <div className='review_pic'>
                <svg width="90%" viewBox="0 0 255 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M216.818 214.202H179.232V155.921C179.232 142.023 178.981 124.132 159.683 124.132C140.107 124.132 137.112 139.274 137.112 154.909V214.198H99.5253V94.3475H135.608V110.726H136.113C139.724 104.613 144.942 99.584 151.212 96.1747C157.481 92.7655 164.567 91.1037 171.714 91.3664C209.81 91.3664 216.833 116.177 216.833 148.454L216.818 214.202ZM57.1158 77.9648C52.8018 77.9655 48.5844 76.6997 44.9971 74.3272C41.4097 71.9548 38.6137 68.5823 36.9621 64.6362C35.3105 60.6902 34.8776 56.3479 35.7185 52.1584C36.5593 47.9688 38.6361 44.1203 41.686 41.0994C44.7358 38.0784 48.6219 36.0208 52.8528 35.1868C57.0837 34.3527 61.4693 34.7796 65.4552 36.4135C69.4411 38.0474 72.8481 40.8149 75.2454 44.3661C77.6428 47.9172 78.9228 52.0926 78.9236 56.364C78.9241 59.2002 78.3603 62.0086 77.2647 64.6291C76.169 67.2495 74.563 69.6306 72.5379 71.6365C70.5129 73.6423 68.1085 75.2335 65.4624 76.3193C62.8163 77.4051 59.9801 77.9643 57.1158 77.9648ZM75.9088 214.202H38.2836V94.3475H75.9088V214.202ZM235.556 0.210594H19.3966C14.4904 0.155772 9.7627 2.03183 6.25276 5.42651C2.74282 8.82119 0.737795 13.4568 0.677917 18.3146V233.233C0.735746 238.093 2.7396 242.732 6.24941 246.13C9.75923 249.528 14.488 251.408 19.3966 251.356H235.556C240.474 251.417 245.216 249.543 248.74 246.145C252.264 242.747 254.281 238.103 254.349 233.233V18.2991C254.279 13.4316 252.26 8.79078 248.736 5.39618C245.213 2.00158 240.472 0.130885 235.556 0.195081" fill="#0A66C2"></path>
                </svg>
                </div>
                <div className='course_rating'>
                  <div className='rating_name'>LinkedIn</div>
                  <div className='rating_num'>Top Rated</div>
                </div>
              </div>
              <div className='reviews col clockinner1 clockinner'>
                <div className='review_pic'>
                <svg width="90%" viewBox="0 0 255 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M216.818 214.202H179.232V155.921C179.232 142.023 178.981 124.132 159.683 124.132C140.107 124.132 137.112 139.274 137.112 154.909V214.198H99.5253V94.3475H135.608V110.726H136.113C139.724 104.613 144.942 99.584 151.212 96.1747C157.481 92.7655 164.567 91.1037 171.714 91.3664C209.81 91.3664 216.833 116.177 216.833 148.454L216.818 214.202ZM57.1158 77.9648C52.8018 77.9655 48.5844 76.6997 44.9971 74.3272C41.4097 71.9548 38.6137 68.5823 36.9621 64.6362C35.3105 60.6902 34.8776 56.3479 35.7185 52.1584C36.5593 47.9688 38.6361 44.1203 41.686 41.0994C44.7358 38.0784 48.6219 36.0208 52.8528 35.1868C57.0837 34.3527 61.4693 34.7796 65.4552 36.4135C69.4411 38.0474 72.8481 40.8149 75.2454 44.3661C77.6428 47.9172 78.9228 52.0926 78.9236 56.364C78.9241 59.2002 78.3603 62.0086 77.2647 64.6291C76.169 67.2495 74.563 69.6306 72.5379 71.6365C70.5129 73.6423 68.1085 75.2335 65.4624 76.3193C62.8163 77.4051 59.9801 77.9643 57.1158 77.9648ZM75.9088 214.202H38.2836V94.3475H75.9088V214.202ZM235.556 0.210594H19.3966C14.4904 0.155772 9.7627 2.03183 6.25276 5.42651C2.74282 8.82119 0.737795 13.4568 0.677917 18.3146V233.233C0.735746 238.093 2.7396 242.732 6.24941 246.13C9.75923 249.528 14.488 251.408 19.3966 251.356H235.556C240.474 251.417 245.216 249.543 248.74 246.145C252.264 242.747 254.281 238.103 254.349 233.233V18.2991C254.279 13.4316 252.26 8.79078 248.736 5.39618C245.213 2.00158 240.472 0.130885 235.556 0.195081" fill="#0A66C2"></path>
                </svg>
                </div>
                <div className='course_rating'>
                  <div className='rating_name'>LinkedIn</div>
                  <div className='rating_num'>Top Rated</div>
                </div>
              </div>
     

            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="register_form">
              <h3>Enroll for Free</h3>
              <p>It is high time for learning</p>
              <form className="form_area" id="myForm" action="#" method="post">
                <div className="row">
                  <div className="col-lg-12 form_group">
                    <input name="name" placeholder="Your Name" required="" type="text" />
                    <input name="phone" placeholder="Your Phone Number" required="" type="tel" />
                    <input name="email" placeholder="Your Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="" type="email" />
                    <select name="course" id="course-details" required>
                      <option value="" disabled selected>Select a course</option>
                      <option value="ECE">Web Development</option>
                      <option value="EEE">Digital Marketing</option>
                      <option value="Civil">Machine Learning</option>
                      <option value="Civil">Artificial Intelligence</option>
                    </select>

                  </div>
                  <Button />
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

.section_gap {
  padding: 70px 0px 70px 0px;
}

.reviews{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.review_pic{
  width: 30%;
  height: 100%;
  line-height: 4;
}

.course_rating{
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 10px 0px 10px 0px;
  justify-content: center;
}

.rating_name{
  opacity: .7;
  font-size: .8rem;
  color: #030a21;
 font-family: "Roboto", sans-serif;
}

.rating_num{
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.1rem;
}

#course-details {
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin: 0px;
  font-size: inherit;
  font-family: inherit;
}

select{
  color: var(--text-color)
}

option{
  font-family: inherit;
  font-size: inherit;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

/* You can style the label as well, if needed */
label {
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.registration_area {
  background: #002347;
}


.clock_sec {
  color: #fff;
}

.clock_sec h1 {
  font-size: 42px;
  color: #fff;
}

@media (max-width: 575px) {
  .clock_sec h1 {
    font-size: 30px;
  }
}

.clock_sec .clockinner {
  background: #fff;
  padding: 10px 15px 10px 15px;
  margin-right: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  margin-top: 65px;
}

@media (max-width: 991px) {
  .clock_sec .clockinner {
    margin-top: 40px;
  }
}

@media (max-width: 767px) {
  .clock_sec .clockinner {
    margin: 0 15px;
    padding: 10px;
    margin-top: 30px;
  }
}

@media (max-width: 400px) {
  .break{
    display: none;
  }
  .clock_sec .clockinner {
    margin-right: 0;
    padding: 10px 5px;
  }
}

.clock_sec .clockinner:last-child {
  /* margin-right: 0; */
}

@media (max-width: 575px) {
  .break{
    display: none;
  }
  .clock_sec .clockinner:last-child {
    margin-right: 15px;
  }
}

.clock_sec .clockinner h1 {
  font-size: 36px;
  display: inline-block;
}

@media (max-width: 1199px) {
  .break{
    display: none;
  }
  .clock_sec .clockinner h1 {
    display: block;
  }
}

.register_form {
  background: #fff;
  text-align: center;
  padding: 40px;
}

@media (max-width: 991px) {
  .break{
    display: none;
  }
  .register_form {
    margin-top: 60px;
  }
}

.register_form h3 {
  font-size: 24px;
  margin-bottom: 0;
}

.register_form input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #eeeeee;
  padding: 12px;
}

.register_form input:focus {
  outline: none;
  box-shadow: none;
}

.register_form input.placeholder {
  color: #aaaaaa;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.register_form input:-moz-placeholder {
  color: #aaaaaa;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.register_form input::-moz-placeholder {
  color: #aaaaaa;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.register_form input::-webkit-input-placeholder {
  color: #aaaaaa;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.register_form .primary-btn {
  width: 100%;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  background: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 30px;
}

.register_form .primary-btn:hover {
  border: 1px solid var(--bgcolor);
  background: var(--text-color);
  color: var(--bgcolor);
}

  )
}

export default dummy




import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;