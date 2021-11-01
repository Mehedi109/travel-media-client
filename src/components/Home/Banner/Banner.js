import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Ytj2Qr9/photo-1499856871958-5b9627545d1a-ixlib-rb-1-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>A journey of a thousand miles begins with a single step.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/ydnmVxd/photo-1512453979798-5ea266f8880c-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>A journey of a thousand miles begins with a single step.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/YPsszJ5/photo-1530789253388-582c481c54b0-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>A journey of a thousand miles begins with a single step.</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
