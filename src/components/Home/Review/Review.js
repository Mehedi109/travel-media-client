import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div className="mt-5 mb-5" data-aos="fade-down" data-aos-delay="500">
        <h2 className="mb-5">What our customers says</h2>
        <Row>
          <Col xs={12} md={4} className="">
            <div className="shadow-lg p-3 border-radius-3">
              <Row>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '' }}>
                    <img
                      src="https://i.ibb.co/9v7w6Xv/photo-1568602471122-7832951cc4c5-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
                      alt=""
                      className=" mt-3 "
                      style={{
                        height: '120px',
                        width: '120px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '10px' }}>
                    <h5>Paris</h5>
                    <p>
                      Really it was an awesome place and wonderful journey with
                      this agency.
                    </p>
                    <h6>Solim Khan</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} className="">
            <div className="shadow-lg p-3 border-radius-3">
              <Row>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '' }}>
                    <img
                      src="https://i.ibb.co/9v7w6Xv/photo-1568602471122-7832951cc4c5-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
                      alt=""
                      className=" mt-3 "
                      style={{
                        height: '120px',
                        width: '120px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '10px' }}>
                    <h5>Dubai</h5>
                    <p>
                      Travel media is very helful for the people who wants to
                      travel safely
                    </p>
                    <h6>Mario</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} className="">
            <div className="shadow-lg p-3 border-radius-3">
              <Row>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '' }}>
                    <img
                      src="https://i.ibb.co/9v7w6Xv/photo-1568602471122-7832951cc4c5-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
                      alt=""
                      className=" mt-3 "
                      style={{
                        height: '120px',
                        width: '120px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '10px' }}>
                    <h5>Bali</h5>
                    <p>
                      Travel media is a very good travel agency for now days.
                    </p>
                    <h6>Domingo</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Review;
