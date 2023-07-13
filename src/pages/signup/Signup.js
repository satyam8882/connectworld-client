import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup.scss";
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/slices/appConfigSlice";
import { TOAST_SUCCESS } from "../../App";

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, confirm_setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
        confirm_password,
      });
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "USer Created successfully",
        })
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Signup container">
      <div className="left-part">
        <div className="sticky">
          <h2 className="heading-h2">"ConnectWorld: Unite and Inspire"</h2>
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
              to communicate privately. Users can send text messages to
              individuals.
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
      <div className="signup-box">
        <h2 className="heading">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

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

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            className="confirm_password"
            id="confirm_password"
            onChange={(e) => confirm_setPassword(e.target.value)}
          />

          <input type="submit" className="submit" />
        </form>
        <p className="subheading">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
