import React from "react";
import { setTypingValue, sendMessage } from "../actions";
import { connect } from "react-redux";
import "./MessageInput.css";

const MessageInput = ({ value, setTypingValue, sendMessage, typing, activeUserId }) => {

  const handleChange = e => {
    setTypingValue(e.target.value);
  };

const handleSubmit = e => {
    e.preventDefault();
    sendMessage(typing, activeUserId);
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    typing: state.typing,
    activeUserId: state.activeUserId
  }
}



export default connect(mapStateToProps , {setTypingValue, sendMessage})(MessageInput);