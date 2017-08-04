import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  render () {
    return (
      <div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesen volutpat, elit pulvinar aliquam
          convallis, libero mauris hroncus erat, non portitor lectus justo et ex. In hac habitasse platea dictumst.
        </p>
      </div>
    )
  }
}
module.exports = Paragraph;
