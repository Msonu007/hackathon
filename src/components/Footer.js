import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGlobal,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="15" className="footer-copywright">
          <h3>Copyright © GIT Services</h3>
        </Col>

        <Col md="0.1" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://x.com/GITServices_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/GITServices_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/company/git-services/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/company/git-services/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGlobal />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="www.gitservices.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
