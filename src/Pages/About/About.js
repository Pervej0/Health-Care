import React from "react";
import { Col, Row } from "react-bootstrap";
import History from "../../Images/history.jpg";

const About = () => {
  return (
    <section className="px-md-5 px-3" id="about">
      <h2 className="text-center my-5 pb-2">About us</h2>
      <Row className="g-3">
        <Col md={6} xs={12}>
          <img className="img-fluid" src={History} alt="" />
        </Col>
        <Col md={6} xs={12}>
          <p>
            <span className="h1 fst-italic text-primary">The</span> evolution of
            the hospital is traced from its onset in ancient Mesopotamia towards
            the end of the 2nd millennium to the end of the Middle Ages.
            Reference is made to institutionalised health care facilities in
            India as early as the 5th century BC, <br /> and with the spread of
            Buddhism to the east, to nursing facilities, the nature and function
            of which are not known to us, in Sri Lanka, China and South East
            Asia.
            <br />
            <br /> Special attention is paid to the situation in the
            Graeco-Roman era: one would expect to find the origin of the
            hospital in the modern sense of the word in Greece, the birthplace
            of rational medicine in the 4th century BC, but the Hippocratic
            doctors paid house-calls, and the temples of Asclepius were visited
            for incubation sleep and magico-religious treatment.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
