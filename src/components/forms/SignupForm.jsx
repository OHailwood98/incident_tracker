import { useState } from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import InlineError from "../messages/InlineError";

const SignupForm = ({ submit, errors }) => {
  var [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    passwordCfrm: "",
  });

  var [error, setError] = useState({});

  function handleChange(e) {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  }

  function Submit() {
    var err = validator();
    setError(err);
    if (Object.keys(err) < 1) {
      console.dir("subbed");
      submit(userData);
    } else {
      console.dir("failed");
    }
  }

  function validator() {
    const errors = {};
    if (!userData.password) errors.password = "Please enter a password";
    if (!(userData.password === userData.passwordCfrm))
      errors.password = "Please make sure you passwords match";
    if (!Validator.isEmail(userData.email)) errors.email = "Invalid Email";
    if (!userData.email) errors.email = "Please enter an email";
    if (!userData.username) errors.username = "Please enter an username";
    return errors;
  }

  return (
    <Form onSubmit={() => Submit()}>
      <Row>
        {error.global && (
          <Alert variant="danger">
            <Alert.Heading>Something Failed! :(</Alert.Heading>
            <p>{error.global}</p>
          </Alert>
        )}
        <Col md={{ span: 4, offset: 1 }}>
          <Form.Group>
            <Form.Label>Enter your Email Here</Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={userData.email}
              onChange={(e) => handleChange(e)}
            />
            {error.email && <InlineError message={error.email} />}
            {errors?.email && (
              <InlineError message="This Email is already in use" />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Pick a Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              name="username"
              placeholder="BoyRacer"
              value={userData.username}
              onChange={(e) => handleChange(e)}
            />
            {error.username && <InlineError message={error.username} />}
            {errors?.username && (
              <InlineError message="This Username is already in use" />
            )}
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={userData.password}
              onChange={(e) => handleChange(e)}
            />
            {error.password && <InlineError message={error.password} />}
            <br />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              id="passwordCfrm"
              name="passwordCfrm"
              placeholder="re-enter your password"
              value={userData.passwordCfrm}
              onChange={(e) => handleChange(e)}
            />
            {error.password && <InlineError message={error.password} />}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" size="lg" block onClick={() => Submit()}>
            Sign Up!
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SignupForm;
