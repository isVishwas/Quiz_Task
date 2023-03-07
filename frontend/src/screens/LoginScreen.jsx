import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FromContainer";
import loginScreen from '../Images/mobile-login.jpg'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <div class='flex justify-center'>
      <Row className="shadow my-5">
        <img src={loginScreen} width={400} alt="" />
        <Col>
          <FormContainer>
            <h4 className="mt-4">SIGN IN</h4>
            {error && <span className="text-[red] ">{error}*</span>}
            {loading && <Loader />}
            {Loader}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email" className="mt-3">
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
              <button className="mt-2 bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                SIGN IN
              </button>
            </Form>
            <Row>
              <Col className="mt-3">
                New Customer ? <br/>
                <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
                  Register
                </Link>
              </Col>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;
