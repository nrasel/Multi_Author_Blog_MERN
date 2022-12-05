import React from "react";
import { Link } from "react-router-dom";

const AdminInfo = () => {
  return (
    <div className="adminInfo">
      <div className="image-email">
        <img src="http://localhost:3000/designimage/register.jpg" alt="" />
        <span>rnaimu313@gmail.com</span>
      </div>
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">View Site</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminInfo;
