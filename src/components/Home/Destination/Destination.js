import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Destination = ({ destination }) => {
  const { img, name, price, description, pack, _id } = destination;
  const history = useHistory();

  const url = `/placeOrder/${_id}`;
  console.log(url);

  const book = () => {
    history.push(url);
  };
  return (
    <Col xs={12} md={4} className="g-4">
      <div>
        <Card
          className="shadow-lg"
          style={{
            height: "",
            borderRadius: 0,
            // backgroundColor: '#478ecb7d',
            backgroundColor: "",
            border: "none",
            textAlign: "start",
            fontFamily: "Roboto,sansSerif",
          }}
        >
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "250px", borderRadius: 0 }}
          />
          <Card.Body className="d-flex">
            <div>
              <Card.Title>{name}</Card.Title>
              {/* <Card.Text>{description.slice(0, 100)}</Card.Text> */}
              <h6>Package : {pack}</h6>
            </div>
            <h5 style={{ marginLeft: "90px" }}>TK {price} </h5>
          </Card.Body>
          <small className="text-muted">
            <button
              className="btn btn-success mb-5 border-radius-0"
              onClick={book}
              style={{
                backgroundColor: "",
                marginBottom: "15px",
                marginLeft: "15px",
              }}
            >
              Book Now
            </button>
          </small>
        </Card>
      </div>
    </Col>
  );
};

export default Destination;
