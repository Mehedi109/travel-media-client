import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddDestination = () => {
  const imgRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const packageRef = useRef();

  const handleAdd = (e) => {
    const img = imgRef.current.value;
    const name = nameRef.current.value;
    console.log(name);
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const pack = packageRef.current.value;

    const newDestination = {
      img: img,
      name: name,
      price: price,
      description: description,
      pack: pack,
    };

    fetch('http://localhost:5000/addDestination', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newDestination),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Destination added Successfully');
        e.target.reset();
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add a new destination</h2>
      <div className="booking-form" style={{ textAlign: 'start' }}>
        <Form onSubmit={handleAdd}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" placeholder="Image Url" ref={imgRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Destination Name</Form.Label>
            <Form.Control type="text" placeholder="Destiantion" ref={nameRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" ref={priceRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              ref={descriptionRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Package</Form.Label>
            <Form.Control type="text" placeholder="Phone" ref={packageRef} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddDestination;
