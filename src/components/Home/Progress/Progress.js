import React, { useEffect, useState } from 'react';
import './Progress.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Progress = () => {
  return (
    <Container>
      <div className="progress-body">
        <Row>
          <Col xs={12} md={6} lg={6} className="">
            <img
              src="https://i.ibb.co/6823Yk5/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera-1284-10476.jpg"
              alt=""
              className="w-75"
            />
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-5">
            <div className="region-progress">
            <h4>Our common region for travelling</h4>
            <h6 className="asia">Asia <span className="span-asia" style={{marginLeft:''}}>90%</span></h6> 
            {/* <ProgressBar variant="success" now={40} data-aos="" /> */}
            <h6 className="europe">Europe <span className="span-europe">70%</span></h6>
            {/* <ProgressBar variant="info" now={20} /> */}
            <h6 className="america">America<span className="span-america">50%</span></h6>
            {/* <ProgressBar variant="warning" now={60} /> */}
            <h6 className="australia">Australia <span className="span-australia">70%</span></h6>
            {/* <ProgressBar variant="danger" now={80} /> */}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Progress;
