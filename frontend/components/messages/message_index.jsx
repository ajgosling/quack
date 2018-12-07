import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentWillReceiveProps(nextProps) {
    this.scrollToBottom();
  }

  generateDate(date) {
    const today = new Date;
    let yesterday = today;
    yesterday.setDate(today.getDate() - 1);
  }
  renderMessages() {
    let messages = [];
    Object.values(this.props.messages).forEach((message) => {
      console.log(message.created);
      messages.push(<MessageIndexItem
        key={message.id}
        message={message}
        users={this.props.users}
        />)
      
      
      messages.push(<div
        className="message-date-divider">
        {message.created}

      </div>)

    })

    if (messages.length < 1) {
      messages = <div>No Messages Here</div>
    }

    return messages;


  }
  scrollToBottom() {
    const messageIndex = document.querySelector('.message-index');
    messageIndex.scrollTop = messageIndex.scrollHeight;
    setTimeout(function () {
      const messageIndex = document.querySelector('.message-index');
      messageIndex.scrollTop = messageIndex.scrollHeight;
    }, 0);
  }


  render() {
    const messages = this.renderMessages();
    return (

      <ul className="message-index">
        {messages}
      </ul>
    )
  }
}


export default MessageIndex;
