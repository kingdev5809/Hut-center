import React, { useState } from "react";
import "../layout.css";

import backImg from "../../images/login-page-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faLock, faEye } from "@fortawesome/free-solid-svg-icons";
import "react-bootstrap";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-page d-flex">
      <div className="login-sec">
        <nav>
          <div className="nav-box">
            <h1>Bellefit</h1>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <div className="login-box">
            <h1>Loggin</h1>
            <div className="input-box">
              <span>@</span>
              <input type="text" placeholder="Email address" />
            </div>
            <div className="input-box">
              <span>
                <FontAwesomeIcon icon={faLock} />{" "}
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
              />
              <span onClick={togglePassword} className="eyeSlash">
                <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} />
              </span>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                I agree with <span>Terms</span> and <span>Privacy</span>{" "}
              </p>
            </div>
            <Link to={`/`}>
              <button className="signBtn">SING IN</button>
            </Link>
            <h3>
              Forgotten your password?
              <a href="#">
                <span>Click here</span>
              </a>
            </h3>
          </div>
        </main>
      </div>

      <div className="img-box">
        <img src={backImg} alt="" />
      </div>
    </div>
  );
}
