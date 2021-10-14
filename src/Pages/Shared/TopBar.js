import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

const TopBar = () => {
  return (
    <section className="px-md-5 px-3 bg-warning">
      <div className="d-flex  flex-wrap justify-content-between align-items-center py-md-2 py-1">
        <p className="fw-bold m-0">
          <small>We are active 24/7 days, so just call us</small>
        </p>
        <div>
          <FontAwesomeIcon icon={faPhone} size="1x" />
          <span className="ps-2">+9664669</span>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
