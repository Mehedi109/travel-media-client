import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './UpdateOrders.css';

const UpdateOrders = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const url = `https://howling-zombie-15151.herokuapp.com/orders/${id}`;
  console.log(id);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleName = (e) => {
    const updatedName = e.target.value;
    const updatedOrder = {
      name: updatedName,
      email: order.email,
      destination: order.destination,
      price: order.price,
      address: order.address,
      phone: order.phone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handleEmail = (e) => {
    const updatedEmail = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: updatedEmail,
      destination: order.destination,
      price: order.price,
      address: order.address,
      phone: order.phone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handleDestination = (e) => {
    const updatedDestination = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: order.email,
      destination: updatedDestination,
      price: order.price,
      address: order.address,
      phone: order.phone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handlePrice = (e) => {
    const updatedPrice = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: order.email,
      destination: order.destination,
      price: updatedPrice,
      address: order.address,
      phone: order.phone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handleAddress = (e) => {
    const updatedAddress = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: order.email,
      destination: order.destination,
      price: order.price,
      address: updatedAddress,
      phone: order.phone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handlePhone = (e) => {
    const updatedPhone = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: order.email,
      destination: order.destination,
      price: order.price,
      address: order.address,
      phone: updatedPhone,
      status: order.status,
    };
    setOrder(updatedOrder);
  };

  const handleStatus = (e) => {
    const updatedStatus = e.target.value;
    const updatedOrder = {
      name: order.name,
      email: order.email,
      destination: order.destination,
      price: order.price,
      address: order.address,
      phone: order.phone,
      status: updatedStatus,
    };
    setOrder(updatedOrder);
  };

  const updateOrder = (e) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Order has approved');
        e.target.reset();
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="mx-auto w-100  booking">
        <h3 className="mt-5">Update Orders</h3>
        <div className="update-form" style={{ textAlign: 'start' }}>
          <Form onSubmit={updateOrder}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={order.name || ''}
                onChange={handleName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={order.email || ''}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Destiantion"
                value={order.destination || ''}
                onChange={handleDestination}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total Price"
                value={order.price || ''}
                onChange={handlePrice}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={order.address || ''}
                onChange={handleAddress}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                value={order.phone || ''}
                onChange={handlePhone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                value={order.status || ''}
                onChange={handleStatus}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateOrders;
