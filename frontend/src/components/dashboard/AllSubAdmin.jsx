import React from "react";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";

const AllSubAdmin = () => {
  const user = "admin";
  const status = "block";
  return (
    <div className="all-sub-admin">
      <Helmet>
        <title>Sub Admin</title>
      </Helmet>
      <div className="elements-numberOf-search-add-new">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>All Sub Admin (22)</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Sub Admin"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/all-user">
              User
            </Link>
          </div>
        </div>
        <div className="loading-elements">
          <div className="elements">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr className="tr">
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="No">1</td>
                    <td data-label="Name">Naimur Rahman</td>
                    <td data-label="Email">admin@gmail.com</td>
                    <td data-label="Image">
                      <img
                        src="http://localhost:3000/articleImage/artificial.jpg"
                        alt=""
                      />
                    </td>
                    <td data-label="Action">
                      {user === "admin" ? (
                        status === "block" ? (
                          <span className="unsus">unblock</span>
                        ) : (
                          <span className="sus">block</span>
                        )
                      ) : (
                        ""
                      )}
                      <Link to="/dashboard/sub-admin-profile/32">Profile</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSubAdmin;
