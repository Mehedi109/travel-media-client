import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { user, setUser } = useAuth();
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const [destination, setDestinaion] = useState([]);
  const addressRef = useRef();
  const phoneRef = useRef();

  console.log(id);
  useEffect(() => {
    const url = `http://localhost:5000/destinations/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinaion(data));
  }, []);

  const handleOrder = (e) => {
    const status = 'Pending';
    const userName = user.displayName;
    const email = user.email;
    const destinationName = destination.name;
    const price = destination.price;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    console.log(address);
    console.log(destination.price);
    const newOrder = {
      name: userName,
      email: email,
      destination: destinationName,
      price: price,
      address: address,
      phone: phone,
      status: status,
    };

    console.log(newOrder);
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Booked Successfully');
        e.target.reset();
      });
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="">
          <img src={destination.img} alt="" />
          <h5 className="mt-5">{destination.name}</h5>
          <p>{destination.description}</p>
          <h5>TK : {destination.price}</h5>
        </div>
        <div className="mx-auto w-100 p-5 booking">
          <h4 className="">Confirm Your Booking</h4>
          <div className="booking-form" style={{ textAlign: 'start' }}>
            <Form onSubmit={handleOrder}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={user.displayName || ''}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.email || ''}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Destiantion"
                  value={destination.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Total Price"
                  value={destination.price}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  ref={addressRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" ref={phoneRef} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlaceOrder;
