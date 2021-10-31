import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

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
        <Card style={{ height: '700px' }}>
          <Card.Img variant="top" src={img} style={{ height: '300px' }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h6>Package : {pack}</h6>
            <h5>TK: {price}</h5>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {/* <Link> */}
              <button className="btn btn-primary" onClick={book}>
                Book Now
              </button>
              {/* </Link> */}
            </small>
          </Card.Footer>
        </Card>
      </div>
    </Col>
  );
};

export default Destination;
