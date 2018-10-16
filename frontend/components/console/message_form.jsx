import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.body = '';
    this.state.user_id = props.currentUser.id
    this.state.channel_id = props.channel.id
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      channel_id: nextProps.channel.id
    })

  }

  update(e) {
    if (e.target.value !== "\n") {
     this.setState({ body: e.target.value });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      App[this.props.channel.id].speak(this.state);
      this.setState({body: ''});
    }
  }

  render() {
    return (
      <div className="message-form-container">
        <button className="message-form-button">
          G
        </button>
        <form className='message-form'>
          <input value={this.state.body}
            onChange={this.update}
            onKeyPress={this.handleKeyPress}
            placeholder={`Message #${this.props.channel.title}`}/>
        </form>

      </div>


    );
  }
}

export default MessageForm;
