import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/photo.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item className="carousel-item">
          {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/Ytj2Qr9/photo-1499856871958-5b9627545d1a-ixlib-rb-1-2.jpg"
            alt="First slide"
          /> */}
          <img
            className="d-block w-100"
            src="https://i.ibb.co/k9P2T2j/photo-1500828131278-8de6878641b8-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="carousel-heading">
              A journey of a thousand miles begins with a single step.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/ydnmVxd/photo-1512453979798-5ea266f8880c-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            alt="Second slide"
          /> */}
          <img
            className="d-block w-100"
            src="https://i.ibb.co/myYBzcP/photo-1473210630848-e12656228f26-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="carousel-heading">
              A journey of a thousand miles begins with a single step.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/YPsszJ5/photo-1530789253388-582c481c54b0-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          /> */}
          <img
            className="d-block w-100"
            src="https://i.ibb.co/TmpmmZX/photo-1454496522488-7a8e488e8606-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="carousel-heading">
              A journey of a thousand miles begins with a single step.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          {/* <img
            className="d-block w-100"
            src="https://i.ibb.co/YPsszJ5/photo-1530789253388-582c481c54b0-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          /> */}
          <img
            className="d-block w-100"
            src="https://i.ibb.co/WgH6Nz5/photo-1549880181-56a44cf4a9a5-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxh.jpg"
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
