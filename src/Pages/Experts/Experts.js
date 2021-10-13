import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Expert from "./Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="px-md-5 px-3" id="expert">
      <h2 className="text-center my-5 pb-2">Our Experts</h2>
      {
        <Row className="g-3">
          {experts.map((item) => (
            <Expert expert={item} key={item.id} />
          ))}
        </Row>
      }
    </section>
  );
};

export default Experts;
