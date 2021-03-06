import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AddDestination.css';

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

    fetch('https://howling-zombie-15151.herokuapp.com/addDestination', {
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
    <div className="mx-auto w-100">
      <h3 className="mt-5">Add a new destination</h3>
      <div className="insert-form" style={{ textAlign: 'start' }}>
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
            Add Destination
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddDestination;
