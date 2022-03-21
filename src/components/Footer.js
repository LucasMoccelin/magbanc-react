import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-start ">
          {/* mb-5*/}
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="py-xs-5">
          {/* mb-5 */}
          <Image src={applestore} />
          <Image src={googleplay} className="ml-2" />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faFacebookSquare} color="a7c7c7c" size="2x" />
          <FontAwesomeIcon
            icon={faTwitter}
            color="a7c7c7c"
            size="2x"
            className="ms-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="a7c7c7c"
            size="2x"
            className="ms-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
