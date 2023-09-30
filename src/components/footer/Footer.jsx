import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {FaPhoneAlt} from 'react-icons/fa'
// import {FaHome} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  const color = {
    color: "#fdc632"
  }

  return (
    <footer id='footer' className='footer-area section_gap'>
    <div className="container">
    <div className="row">

    <div className="col-lg-4 col-md-6 single-footer-widget">
    <h4>About US</h4>
    <li className='about-details'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit neque magnam quasi quia maxime libero qui, incidunt minima autem officia quis at adipisci, ab numquam porro rem. At quos voluptas maiores. ajha askjasaks asjka askj?</p>
    </li>

    <li className='about-details'>
      <span>
        <FaPhoneAlt style={color} className='phone-icon'/><a href="#">+1291 3912 329</a>
      </span>
    </li>
    <li className='about-details'>
      <span>
        <BiLogoGmail style={color} className='phone-icon'/><a href="#">info@ediglobe.com</a>
      </span>
    </li>
    </div>
  

    <div className="col-lg-2 col-md-6 single-footer-widget">
    <h4>Features</h4>
    <ul>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Brand Assets</a></li>
    <li><a href="#">Investor Relations</a></li>
    <li><a href="#">Terms of Service</a></li>
    </ul>
    </div>

    <div className="col-lg-2 col-md-6 single-footer-widget">
    <h4>Resources</h4>
    <ul>
    <li><a href="#">Guides</a></li>
    <li><a href="#">Research</a></li>
    <li><a href="#">Experts</a></li>
    <li><a href="#">Agencies</a></li>
    </ul>
    </div>
    <div className="col-lg-4 col-md-6 single-footer-widget">
    <h4>Newsletter</h4>
    <p>You can trust us. we only send promo offers,</p>
    <div className="form-wrap" id="mc_embed_signup">

    <form className="form-inline">
    <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address'" required="" type="email" />
    <button className="click-btn btn btn-default">
    <span>subscribe</span>
    </button>
    
    <div style={{position: "absolute", left: "-5000px"}}>
    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
    </div>
    <div className="info"></div>
    </form>
    </div>
    </div>
    </div>

      <hr/>
      <div class="row footer-bottom d-flex justify-content-between">
      <p class="col-lg-8 col-sm-12 footer-text m-0 text-white"> Copyright &copy; All rights reserved </p>
      <div className="row footer-bottom d-flex">
      <div className="col-lg-4 col-sm-12 footer-social">
      <a href="#"><FaFacebookF/></a>
      <a href="#"><FaTwitter/></a>
      <a href="#"><FaLinkedin/></a>
      <a href="#"><FiTwitter/></a>
      </div>
      </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer