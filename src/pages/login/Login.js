import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import { FaHandPointRight } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login container">
      <div className="left-part">
        <div className="sticky">
          <h2 className="heading-h2">"ConnectWorld: Unite and Inspire" </h2>
          <div className="element">
            <h4>
              <FaHandPointRight style={{ color: "#29b4ff" }} />
              &nbsp;This website are defined simply by their ability to bring
              people together has been seen as too broad, this platforms allow
              users to have conversations, share information and create web
              content.
            </h4>
            <h4>
              <FaHandPointRight style={{ color: "#29b4ff" }} />
              &nbsp;This can be a valuable department for communication between
              people and express there ideas between people.
            </h4>
            <h4>
              <FaHandPointRight style={{ color: "#29b4ff" }} />
              &nbsp;ConnectWorld includes a messaging system that enables users
              to communicate privately. 
            </h4>
            <h4>
              <FaHandPointRight style={{ color: "#29b4ff" }} />
              &nbsp;The News Feed is the central component of ConnectWorld. It
              displays a curated stream of content from users' connections and
              pages they follow. The feed includes status updates, photos,
              videos, and shared links. Users can interact with posts by liking,
              commenting, and sharing.
            </h4>
            <h4>
              <FaHandPointRight style={{ color: "#29b4ff" }} />
              &nbsp;ConnectWorld allows users to create a comprehensive profile
              that reflects their personality and interests. Users can include
              information such as education, work experience, interests, and
              personal achievements. Profiles can be made public or private, and
              users have control over the visibility of specific sections.
            </h4>
          </div>
        </div>
                
      </div>
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" className="submit" />
        </form>
        <p className="subheading">
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
