import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import Header from './neighborhoods/Header.js'
import SectionA from './neighborhoods/SectionA.js'
import SectionB from './neighborhoods/SectionB.js'
import SectionC from './neighborhoods/SectionC.js'
import Footer from './neighborhoods/Footer.js'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <Footer/>
      </div>
    )
  }
}
module.exports = LandingPage;
