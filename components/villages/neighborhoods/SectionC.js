import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/CallToAction.js';

class SectionC extends React.Component {
  render () {
    return (
      <section className="section-c">
        <Container>
          <Row>
            <CallToAction/>
          </Row>
        </Container>
      </section>
    )
  }
}
module.exports = SectionC;
