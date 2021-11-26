import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const GalleryProduct = ({ product }) => {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.des.slice(0, 75)}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Link to={`purchase/${product._id}`}>
              {" "}
              <Button variant="danger text-white">Purches now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default GalleryProduct;
