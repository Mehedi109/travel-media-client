import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const email = user.email;
  console.log(email);

  useEffect(() => {
    fetch(`https://howling-zombie-15151.herokuapp.com/myOrders/${email}`)
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
    <>
      <div>
        <h2 className="mt-5 mb-5">My Orders : {orders.length}</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.destination}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
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
    </>
  );
};

export default MyOrders;
