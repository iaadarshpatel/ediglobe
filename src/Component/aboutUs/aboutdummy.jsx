import React from 'react';

const AboutSection = () => {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h3 className="font-weight-bold">Welcome To <span className="text-custom">Lorem Ipsum</span></h3>
              <p className="section-subtitle mx-auto text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text.</p>
              <div>
                <i className=""></i>
              </div>
            </div>
          </div>
        </div>

        <div className="row vertical-content-manage mt-5">
          <div className="col-lg-6">
            <div className="about-header-main mt-3">
              <div className="about-icon-box">
                <p className="text-custom font-weight-bold">Lorem Ipsum is simply dummy text</p>
              </div>
              <h4 className="about-heading text-capitalize font-weight-bold mt-4">Lorem Ipsum is simply dummy text of the printing industry.</h4>
              <p className="text-muted mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

              <p className="text-muted mt-3">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-about mt-3">
              <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="" className="img-fluid mx-auto d-block" />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="about-content-box mt-3">
              <div className="about-detail text-center">
                <div className="about-icon">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                <p className="edu-desc mt-3 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-content-box mt-3">
              <div className="about-detail text-center">
                <div className="about-icon">
                  <i className="fab fa-angellist"></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                <p className="edu-desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-content-box mt-3">
              <div className="about-detail text-center">
                <div className="about-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Best Platform</h5>
                <p className="edu-desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
