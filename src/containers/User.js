import React from "react";
import "./User.css";
import {setActiveUserId} from '../actions'
import { connect } from "react-redux";

const User = ({ user, handleUserClick }) => {
  const { name, profile_pic, status, user_id } = user;


  return (
    <div className="User" onClick={() => handleUserClick(user_id)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};


export default connect(null, { handleUserClick: setActiveUserId })(User);