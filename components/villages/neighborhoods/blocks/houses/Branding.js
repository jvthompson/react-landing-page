import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Branding extends React.Component {
  render () {
    return (
      <div>
        <Link to="/">
          <img className="branding" src="./img/Branding.svg"/>
        </Link>
      </div>
    )
  }
}
module.exports = Branding;
