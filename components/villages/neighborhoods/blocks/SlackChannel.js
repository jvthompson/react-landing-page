import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import UserMessage from './houses/UserMessage.js';
import ChatBotMessage from './houses/ChatBotMessage.js';

class SlackChannel extends React.Component {
  render () {
    const messages = this.props.messages;
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./img/Slack Channel.svg"/>
        {messages ? (
          //messages TRUE
          <div>
            <UserMessage/>
            <ChatBotMessage/>
          </div>
        ) : (
          //messages FALSE
          <div></div>
        )}
      </Col>
    )
  }
}
module.exports = SlackChannel;
