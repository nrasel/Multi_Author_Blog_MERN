import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { email_verify } from "../../store/actions/authAction";
import Navbar from "../home/Navbar";

function EmailVerify({ history }) {
  const dispatch = useDispatch();
  const { errorMessage, loader, authenticate } = useSelector(
    (state) => state.adminReducer
  );

  const [otp, setOtp] = useState("");
  useEffect(() => {
    if (authenticate) {
      history.push("/dashboard");
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [authenticate, errorMessage]);
  return (
    <div className="verify-email">
      <Navbar />
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "15px",
          },
        }}
      />
      <div className="verify">
        <div className="otp">
          <p>Check your email and submit OTP</p>
          <div className="form-group">
            <input
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="form-control"
              id="otp"
              placeholder="send otp"
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              {loader ? (
                <button className="btn btn-block">
                  <div className="spinner">
                    <div className="spinner1"></div>
                    <div className="spinner2"></div>
                    <div className="spinner3"></div>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => dispatch(email_verify(otp))}
                  className="btn btn-block"
                >
                  Send Otp
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerify;
