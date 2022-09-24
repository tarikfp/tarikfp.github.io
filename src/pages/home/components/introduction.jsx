import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Particle from './particle';
import Type from './type';

export default function Introduction() {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Col md={12} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{' '}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I am
            <strong className="main-name"> Tarık Pınarcı</strong>
          </h1>
        </Col>
        <div style={{ padding: 50 }}>
          <Type />
        </div>
      </Container>
    </Container>
  );
}
