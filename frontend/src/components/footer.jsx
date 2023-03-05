import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer className="min-h-screen flex">
        <Container>
          <Row>
            <Col className="text-center mt-5">
              <span>Copyright &copy; Vishwas Pandey</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
