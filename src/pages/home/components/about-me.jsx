import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { FaDev, FaLinkedinIn } from 'react-icons/fa';

const socialInfoConfigs = [
  {
    icon: <AiFillGithub />,
    href: 'https://github.com/tarikpnr',
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/tarik-pinarci/',
  },
  {
    icon: <BsStackOverflow />,
    href: 'https://stackoverflow.com/users/9631529/tarik',
  },
  {
    icon: <AiFillMediumCircle />,
    href: 'https://medium.com/@tarikpnr',
  },
  {
    icon: <FaDev />,
    href: 'https://dev.to/tarikpnr/',
  },
];

export default function AboutMe() {
  const AboutMeIcon = ({ icon, href }) => {
    return (
      <li className="social-icons">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          {icon}
        </a>
      </li>
    );
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>ABOUT ME</h1>
            <p className="home-about-body">
              Tarık is an experienced software developer specializing
              in mobile app development for both Android and iOS. He
              is keen on developing stable, solid apps with React
              Native. Tarık is always looking for learning
              opportunities that help expand my knowledge and
              expertise. He is strongly committed to delivering the
              highest quality products.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              {socialInfoConfigs.map(({ icon, href }) => (
                <AboutMeIcon key={href} icon={icon} href={href} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
