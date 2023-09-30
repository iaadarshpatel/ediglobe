import React from 'react'
import './expert.css';
import t1 from '../../assets/trainer/t1.jpg';
import t2 from '../../assets/trainer/t2.jpg';
import t3 from '../../assets/trainer/t3.jpg';
import t4 from '../../assets/trainer/t4.jpg';

const Expert = () => {
  return (
    <section className="trainer_area section_gap_top">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
          <h2 className="mb-3">Our Expert Trainers</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
          </div>
        </div>
      </div>

    <div className="row justify-content-center d-flex align-items-center">
      <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
        <div className="thumb d-flex justify-content-sm-center">
          <img className="img-fluid" src={t1} alt="" />
        </div>
        <div className="meta-text text-sm-center">
            <h4>Mated Nithan</h4>
            <p className="designation">Sr. web designer</p>
          <div className="mb-4">
            <p>If you are looking at blank cassettes on the web, you may be very confused at the.</p>
        </div>
        <div className="align-items-center justify-content-center d-flex">
            <a href=""><i className="ti-facebook"></i></a>
            <a href=""><i className="ti-twitter"></i></a>
            <a href=""><i className="ti-linkedin"></i></a>
            <a href=""><i className="ti-pinterest"></i></a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
    <div className="thumb d-flex justify-content-sm-center">
    <img className="img-fluid" src={t2} alt="" />
    </div>
    <div className="meta-text text-sm-center">
    <h4>David Cameron</h4>
    <p className="designation">Sr. web designer</p>
    <div className="mb-4">
    <p>
    If you are looking at blank cassettes on the web, you may be
    very confused at the.
    </p>
    </div>
    <div className="align-items-center justify-content-center d-flex">
    <a href=""><i className="ti-facebook"></i></a>
    <a href=""><i className="ti-twitter"></i></a>
    <a href=""><i className="ti-linkedin"></i></a>
    <a href=""><i className="ti-pinterest"></i></a>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
    <div className="thumb d-flex justify-content-sm-center">
    <img className="img-fluid" src={t3} alt="" />
    </div>
    <div className="meta-text text-sm-center">
    <h4>Jain Redmel</h4>
    <p className="designation">Sr. Faculty Data Science</p>
    <div className="mb-4">
    <p>
    If you are looking at blank cassettes on the web, you may be
    very confused at the.
    </p>
    </div>
    <div className="align-items-center justify-content-center d-flex">
    <a href=""><i className="ti-facebook"></i></a>
    <a href=""><i className="ti-twitter"></i></a>
    <a href=""><i className="ti-linkedin"></i></a>
    <a href=""><i className="ti-pinterest"></i></a>
    </div>
    </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
    <div className="thumb d-flex justify-content-sm-center">
    <img className="img-fluid" src={t4} alt="" />
    </div>
    <div className="meta-text text-sm-center">
    <h4>Nathan Macken</h4>
    <p className="designation">Sr. web designer</p>
    <div className="mb-4">
    <p>
    If you are looking at blank cassettes on the web, you may be
    very confused at the.
    </p>
    </div>
    <div className="align-items-center justify-content-center d-flex">
    <a href=""><i className="ti-facebook"></i></a>
    <a href=""><i className="ti-twitter"></i></a>
    <a href=""><i className="ti-linkedin"></i></a>
    <a href=""><i className="ti-pinterest"></i></a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Expert