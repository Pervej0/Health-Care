import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description, id } = service;
  return (
    <Col md={4} sm={6} xs={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link
            to={`service/${id}`}
            variant="primary"
            className="btn btn-primary py-1"
          >
            See More
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
