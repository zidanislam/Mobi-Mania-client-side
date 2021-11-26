import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Spinner } from "react-bootstrap";
import Product from "../Home/Product/Product";
import useFirebase from "./../../../Hooks/useFirebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://radiant-brushlands-53565.herokuapp.com/products/")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="my-5">Our Products</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
