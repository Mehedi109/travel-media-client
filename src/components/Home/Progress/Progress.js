import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Progress = () => {
  return (
    <Container>
      <div className="mt-5">
        <Row>
          <Col xs={12} md={6} className="">
            <img
              src="https://i.ibb.co/6823Yk5/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera-1284-10476.jpg"
              alt=""
              className="w-75"
            />
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <h4>Our common region for travlling</h4>
            <h6>Asia</h6>
            <ProgressBar variant="success" now={40} data-aos="" />
            <h6>Europe</h6>
            <ProgressBar variant="info" now={20} />
            <h6>America</h6>
            <ProgressBar variant="warning" now={60} />
            <h6>Australia</h6>
            <ProgressBar variant="danger" now={80} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Progress;
