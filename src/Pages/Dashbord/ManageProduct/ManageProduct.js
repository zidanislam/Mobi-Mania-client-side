import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import useFirebase from "./../../../Hooks/useFirebase";
import { Table, Button } from "react-bootstrap";
const ManageProduct = () => {
  const [products, setAllProduct] = useState([]);
  const { loding } = useFirebase();
  const [delet, setDelete] = useState();
  if (loding) {
    <CircularProgress />;
  }
  useEffect(() => {
    fetch(`https://radiant-brushlands-53565.herokuapp.com/gallery/products`)
      .then((res) => res.json())
      .then((result) => {
        setAllProduct(result);
      });
  }, [delet]);
  const deleteProduct = (id) => {
    const result = window.confirm("Do you want cancel your order?");
    if (result) {
      fetch(`https://radiant-brushlands-53565.herokuapp.com/gallery/productsr/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setDelete(result);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="my-3 color-success">Manage Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product </th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        {products.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>
                <img src={order.img} style={{ width: "80px" }} />
              </td>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>
                <Button onClick={() => deleteProduct(order._id)}>
                  Delete Product
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProduct;
