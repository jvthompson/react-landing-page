import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import Navigation from './blocks/Navigation.js'
import CallToAction from './blocks/CallToAction.js'
import SlackChannel from './blocks/SlackChannel.js'

class Header extends React.Component {
  render () {
    return (
      <section className="header">
        <Container>
          <Row>
            <Navigation/>
          </Row>
          <Row>
            <CallToAction title={this.props.title} subtitle={this.props.subtitle}/>
          </Row>
          <Row>
            <SlackChannel messages={this.props.messages}/>
          </Row>
        </Container>
      </section>
    )
  }
}
module.exports = Header;
