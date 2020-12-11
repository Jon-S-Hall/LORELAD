import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import styles from "../../styles/authentication.module.css";
import Link from "next/link";


class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    confirm_password: "",
  };
  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_submit = (e) => {
    if (this.state.password.length < 5) {
      document.getElementById("status").innerHTML = "Passwords must be longer.";
      e.preventDefault();
    } else if (this.state.username.length < 5) {
      document.getElementById("status").innerHTML = "Username must be longer.";
      e.preventDefault();
    } else if (this.state.password != this.state.confirm_password) {
      document.getElementById("status").innerHTML = "Passwords must match.";
      e.preventDefault();
    } else {
      this.props.handle_signup(e, this.state);
    }
  };


  handle_signup = (e, data) => {
    e.preventDefault();
    fetch(`${server}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token == null) {
          alert("Failed to create account. Please try again.");
        } else {
          localStorage.setItem("token", json.token);
          this.setState({
            logged_in: true,
            displayed_form: "",
            username: json.username,
          });
          alert("Account creation successful!");
        }
      });
  };

  render() {
    return (
      <Footer title="Sign-up" user_state={this.props.user_state}>
        <Head>
          <title>Sign Up</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main className={styles.main}>
          <h1>
            <Link
              href={{
                pathname: "/",
              }}
            >
              <svg
                width="51"
                height="27"
                viewBox="0 0 51 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.back_button}
              >
                <path
                  d="M49 13H2"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.375 24.75L2 13.375L13.375 2"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            Sign Up
          </h1>
          <p className={styles.cta}>
            {" "}
            Already have an account?{" "}
            <Link href="/authentication/LoginForm">
              <span>Sign In</span>
            </Link>
          </p>
          <div className={styles.container}>
            <div className={styles.ls}>
              <p> Sign up for a LORELAD account to:</p>
              <ul>
                <li>Upload Recordings</li>
                <li>Translate</li>
                <li>Download Recordings</li>
              </ul>
            </div>
            <form onSubmit={this.handle_submit}>
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
              />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
              />
              <label for="confirm_password">Confirm Password</label>
              <input
                type="confirm_password"
                name="confirm_password"
                value={this.state.confirm_password}
                onChange={this.handle_change}
              />
              <div className={styles.check}>
                <input
                  id="terms"
                  type="checkbox"
                  onChange={this.handle_change}
                  required
                  value={this.state.terms}
                />
                <label for="terms">
                  I agree to the LORELAD
                  <a href="../legal/terms_and_conditions" target="_blank"> Terms of Service </a>
                  &
                  <a href="../legal/privacy_policy" target="_blank"> Privacy Policy </a>
                </label>
              </div>
              <h4 id="status"> </h4>
              <button type="submit">Sign Up</button>
            </form>
            <img src="/auth_img.png" alt="" />
          </div>
        </main>
      </Footer>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired,
};
