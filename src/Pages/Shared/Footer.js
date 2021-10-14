import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-dark py-3 text-light px-md-5 px-2 md-2">
      <div className="row justify-content-bpetween px-md-3 g-md-5 g-3 align-items-baseline pb-4">
        <div className="col-md-3 col-sm-6 col-12">
          <h1 className="border-bottom">Health Care</h1>
          <div>
            <h6 className="mb-1">Emergency Number:</h6>
            <small className="d-block">
              <FontAwesomeIcon icon={faPhone} size="xs" />
              &nbsp; 012435***
            </small>
            <small className="d-block">
              <FontAwesomeIcon icon={faWhatsapp} size="xs" />
              &nbsp;015335***
            </small>
          </div>
          <div className="mt-2">
            <h6 className="mb-1">Embulence Number:</h6>

            <small className="d-block">
              <FontAwesomeIcon icon={faPhone} size="xs" />
              &nbsp; 016435***
            </small>
            <small className="d-block">
              <FontAwesomeIcon icon={faWhatsapp} size="xs" />
              &nbsp;01335***
            </small>
          </div>
        </div>
        <div className="col-md-5 col-sm-6 col-12 d-flex align-items-center justify-content-between">
          <div>
            <h4>Information</h4>
            <ul className="ps-0 list-unstyled">
              <li>Privacy Policy</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Career</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4>Helpful Links</h4>
            <ul className="ps-0 list-unstyled">
              <li>Services</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Tearm & Condition</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-8 col-12">
          <h4 className="mb-3">To get Latest Updates</h4>
          <label className="bg-light px-2 d-block mb-2 d-flex align-items-center">
            <FontAwesomeIcon className="text-dark border" icon={faEnvelope} />
            <input
              className="py-2 px-1 border-0 form-control ms-2"
              type="text"
              placeholder="Enter email"
            />
          </label>
          <HashLink to="/home#" className="btn btn-primary py-2 px-3">
            Subscribe
          </HashLink>
        </div>
      </div>
      <div className="border-top pt-2">
        <small className="text-right">
          2019 &copy; corportaionLtd All Right reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
