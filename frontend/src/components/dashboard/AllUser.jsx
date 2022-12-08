import React from "react";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";

const AllUser = () => {
  const user = "user";
  const status = "block";
  return (
    <div className="all-sub-admin">
      <Helmet>
        <title>All User</title>
      </Helmet>
      <div className="elements-numberOf-search-add-new">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>All User (22)</h2>
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
            <Link className="btn" to="/dashboard/all-sub-admin">
              All Sub Admin
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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
                      {status === "block" ? (
                        <span className="unsus">unblock</span>
                      ) : (
                        <span className="sus">block</span>
                      )}
                      {user === "admin" ? <span>add-sub-admin</span> : ""}
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

export default AllUser;
