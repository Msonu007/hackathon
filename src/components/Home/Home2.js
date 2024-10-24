import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md"; // Import email and phone icons

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" }}>
              Feel free to <span className="purple">connect </span>with us
            </h1>
            <p className="home-about-body">
              <MdPhone /> +1 (804) 302-3699
              <br />
              <MdEmail /> vyacapin@gitservices.com
              <br />
              <AiOutlineGlobal /> www.gitservices.com
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/GITServices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/git-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/GITServices_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
