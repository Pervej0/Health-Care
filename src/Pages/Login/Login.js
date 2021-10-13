import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { facebookSignin, googleSignIn } = useFirebase();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/home#" } };

  return (
    <Container>
      <h1 className="text-center">Log in</h1>
      <Form>
        <Form.Group controlId="formBasicEmail" className="mb-2">
          <Form.Label className="fw-bold" style={{ width: "100%" }}>
            Email
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          className="btn btn-primary py-0 px-2"
          type="submit"
        >
          Log in
        </Button>
      </Form>
      <div className="my-3">------------- or ----------------</div>
      <div>
        <button
          onClick={() => facebookSignin(from, history)}
          className="btn btn-success py-0 px-3"
        >
          <small>Sign in Facebook</small>
        </button>
        <button
          onClick={() => googleSignIn(from, history)}
          className="btn btn-success py-0 px-3 ms-3"
        >
          <small>Sign in Google</small>
        </button>
      </div>
      <div className="my-2">
        <p className="text-dark fw-bold">
          Are you New here?{" "}
          <Link to="/register" className="fw-normal text-decoration-none">
            Create an account
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
