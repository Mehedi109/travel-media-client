import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Destination from "../Destination/Destination";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://tourism-server.onrender.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <Container>
      <div>
        <h3 className="mt-5 mb-3">
          The destination where we offer for travelling
        </h3>
        <Row>
          {destinations.map((destination) => (
            <Destination
              key={destination._id}
              destination={destination}
            ></Destination>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Destinations;
