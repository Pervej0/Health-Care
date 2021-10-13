import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="px-md-5 px-3" id="services">
      <h2 className="text-center my-5 pb-2">Our Services</h2>
      <Row className="g-3">
        {services.map((item) => (
          <Service service={item} key={item.id} />
        ))}
      </Row>
    </section>
  );
};

export default Services;
