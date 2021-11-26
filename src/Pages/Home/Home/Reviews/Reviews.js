import React, { useState, useEffect } from "react";
import useFirebase from "./../../../../Hooks/useFirebase";
import { Col, Row, Card } from "react-bootstrap";
import { CardText } from "reactstrap";
import { Rating } from "@mui/material";
// requires a loader

const Reviews = () => {
  const [users, setUsers] = useState([]);
  const { user, loding } = useFirebase();
  useEffect(() => {
    fetch("https://radiant-brushlands-53565.herokuapp.com/users/rating")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        // console.log(result);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <h2 className="my-5">Our Users Reviews </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {users.map((us) => (
          <Col key={us._id}>
            <Card className="shadow p-3 m-5 bg-white rounded">
              <Card.Body>
                <Card.Title>{us.displayName}</Card.Title>
                <Rating
                  name="read-only"
                  readOnly
                  name="half-rating"
                  defaultValue={us.rating}
                  precision={0.5}
                />


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
