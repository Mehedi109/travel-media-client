import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('https://howling-zombie-15151.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://howling-zombie-15151.herokuapp.com/orders/${id}`;
    const proceed = window.confirm('Are you sure, you want to delete');
    if (proceed) {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('data deleted successfully');
            const remainig = orders.filter((order) => order._id !== id);
            setOrders(remainig);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="mt-5 mb-5">All Orders : {orders.length}</h2>
      <Table className="manage-orders" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Total Price</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.destination}</td>
              <td>{order.price}</td>
              <td>{order.phone}</td>
              <td>{order.status}</td>
              <td>
                <Link to={`/updateOrders/${order._id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
