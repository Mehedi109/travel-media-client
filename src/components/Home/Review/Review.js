import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="review-container">
      <Container>
      <div className="mt-5 mb-5">
        <h2 className="mb-5">What our customers says</h2>
        <Row className="g-4">
          <Col xs={12} md={4} className="">
            <div
              className="shadow-lg p-3 border-radius-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
                    <h5>Solim Khan</h5>
                    <p>
                      Really it was an awesome place and wonderful journey with
                      this agency.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} className="">
            <div
              className="shadow-lg p-3 border-radius-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Row>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '' }}>
                    <img
                      src="https://i.ibb.co/Z81fVm5/photo-1570612861542-284f4c12e75f-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
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
                    <h5>Mario</h5>
                    <p>
                      Travel media is very helpful for the people who wants to
                      travel safely
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4} className="">
            <div
              className="shadow-lg p-3 border-radius-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Row>
                <Col xs={12} md={6}>
                  <div style={{ width: '', marginRight: '' }}>
                    <img
                      src="https://i.ibb.co/ccHfdkP/photo-1564564321837-a57b7070ac4f-ixlib-rb-1-2.jpg"
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
                    <h5>Domingo</h5>
                    <p>
                      Travel media is a very good travel agency for now days.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
  );
};

export default Review;
