import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { FaDev, FaLinkedinIn } from 'react-icons/fa';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Tarık Pınarcı</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {CURRENT_YEAR} TFP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/tarikpnr"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tarik-pinarci/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/9631529/tarik"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsStackOverflow />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@tarikpnr"
                target="_blank"
                style={{ color: 'white' }}
                rel="noreferrer"
              >
                <AiFillMediumCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://dev.to/tarikpnr/"
                target="_blank"
                style={{ color: 'white' }}
                rel="noreferrer"
              >
                <FaDev />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
