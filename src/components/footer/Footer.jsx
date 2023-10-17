import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  const color = {
    color: "#55e3ea"
  }

  return (
    <footer id='footer' className='footer-area section_gap'>
    <div className="container">
    <div className="row">

    <div className="col-lg-4 col-md-6 single-footer-widget">
    <h4>About US</h4>
    <li className='about-details'>
    <p>Welcome to Ediglobe Elearning Platform, your gateway to a world of knowledge and opportunities. We are more than just an elearning platform; we are your partner in personal and professional growth.</p>
    </li>

    <li className='about-details'>
      <span>
        <BiSolidPhoneCall style={color} className='phone-icon'/><a href="#">+1291 3912 329</a>
      </span>
    </li>
    <li className='about-details'>
      <span>
        <BiLogoGmail style={color} className='phone-icon'/><a href="#">support@ediglobe.com </a>
      </span>
    </li>
    </div>
  

    <div className="col-lg-2 col-md-6 single-footer-widget">
   
    <ul>
    <li><a href="#">About us</a></li>
    <li><a href="#">Terms and conditions </a></li>
    <li><a href="#">Privacy policy</a></li>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Blogs</a></li>
    </ul>
    </div>

    <div className="col-lg-2 col-md-6 single-footer-widget">
    
    <ul>
    <li><a href="#">Career</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Check your certificate </a></li>
    <li><a href="#">Workshop/Webinar</a></li>
    <li><a href="#">Campus ambassador</a></li>
    
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
            <a href="#" className='twitter'><FaTwitter/></a>
            <a href="#" className='facebook'><FaFacebookF/></a>
            <a href="#" className='instagram'><FaInstagram/></a>
            <a href="#" className='linkedin'><FaLinkedin/></a>
          </div>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer