import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


class WorkspaceSidebar extends React.Component {

  render() {
    return (
      <div className="workspace-sidebar">
        <div className="current-user-info">
          <h2>Hi {this.props.currentUser.username} !</h2>
          <button onClick={this.props.logout}>Logout</button>

        </div>
        <div className="channel-list">
          <ul>
            <li>I will be the channel list</li>
            <li>also a channel</li>
            <li>jet fuel can't melt steel beams</li>
          </ul>
        </div>

        <div className="direct-list">
          <ul>
            <li>I am direct message between trump and russians</li>
            <li>^wow that's controversial</li>
            <li>jesus montecristo</li>
          </ul>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    // fetchChannels: () => dispatch(fetchChannels()),
    logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceSidebar);