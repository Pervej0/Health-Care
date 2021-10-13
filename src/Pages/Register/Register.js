import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { facebookSignin, googleSignIn } = useFirebase();

  return (
    <Container>
      <h1 className="text-center">Sign up</h1>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label className="fw-bold" style={{ width: "100%" }}>
            Full Name
          </Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bold" style={{ width: "100%" }}>
            Email
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          className="btn btn-primary py-0 px-2"
          type="submit"
        >
          Sign up
        </Button>
      </Form>
      <div className="my-3">------------- or ----------------</div>
      <div>
        <button onClick={facebookSignin} className="btn btn-success py-0 px-3">
          <small>Sign up Facebook</small>
        </button>
        <button
          onClick={googleSignIn}
          className="btn btn-success py-0 px-3 ms-3"
        >
          <small>Sign up Google</small>
        </button>
      </div>
      <div className="my-2">
        <p className="text-dark fw-bold">
          Already have an account?{" "}
          <Link to="/login" className="fw-normal text-decoration-none">
            Just sign in
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
