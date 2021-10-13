import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { img, title, name } = expert;
  return (
    <Col md={4} sm={6} xs={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <small className="text-uppercase text-secondary">{title}</small>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
