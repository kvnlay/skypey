import React from "react";
import Header from "../components/Header";
import Chats from "../components/Chats"; 
import { connect } from "react-redux";
import MessageInput from "./MessageInput";
import './ChatWindow.css';
import _ from 'lodash';

const ChatWindow = ({ activeUserId, activeUser, activeMsgs, typing }) => {
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)}/>
      <MessageInput value={typing} />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return { activeUser: state.contacts[ownProps.activeUserId],
            activeMsgs: state.messages[ownProps.activeUserId],
            typing: state.typing,
  }
}

export default connect(mapStateToProps)(ChatWindow);