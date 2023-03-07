import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { register } from "../actions/userAction";
import FormContainer from "../components/shared/FromContainer";
import loginScreen from '../Images/mobile-login.jpg'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("Password do not macth");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div class='flex justify-center'>
      <Row className="shadow mt-5">
        <Col className="my-4">
          <FormContainer>
            <h1>Register</h1>
            {error && <span className="text-[red] ">{error}*</span>}
            {loading && <Loader />}
            {message && <span className="text-[red] ">{message}*</span>}
            <Form onSubmit={submitHandler} className='mt-3'>
              <Form.Group controlId="email">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Username / Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="username/email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <button className="mt-2 bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" varient="primary">
                SIGN IN
              </button>
            </Form>
            <Row className="mt-2">
              <Col>
                Have an account ! <br/>
                <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
                  Login
                </Link>
              </Col>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterScreen;
