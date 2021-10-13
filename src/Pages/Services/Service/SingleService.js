import React from "react";
import { useParams } from "react-router";

const SingleService = () => {
  const { serviceId } = useParams();
  return (
    <section className="px-md-5 px-3 text-center mt-5">
      <h1>id : {serviceId}</h1>
      <h3>Single service details</h3>
    </section>
  );
};

export default SingleService;
