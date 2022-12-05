import React from "react";
import { BsEnvelope } from "react-icons/bs";

const UserMessage = () => {
  return (
    <div className="message">
      <div>
        <span>
          <BsEnvelope />
        </span>
        <div className="nCount">5</div>
      </div>
    </div>
  );
};

export default UserMessage;
