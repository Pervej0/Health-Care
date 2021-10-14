import {
  faFacebook,
  faLinkedin,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { img, title, name } = expert;
  return (
    <Col lg={4} sm={6} xs={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <small className="text-uppercase text-secondary">{title}</small>
          <div className="icon-field">
            <i title="facebook">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </i>
            <i title="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </i>
            <i title="skype">
              <FontAwesomeIcon icon={faSkype} size="lg" />
            </i>
            <i title="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </i>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
