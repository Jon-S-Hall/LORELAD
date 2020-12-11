import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import styles from "../../styles/authentication.module.css";
import Link from "next/link";
import { server } from "../../config";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
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

  handle_login = (e, data) => {
    e.preventDefault();
    fetch(`${server}/token-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.user.username,
        });
        alert("logged in!");
      });
  };

  handle_submit = (e) => {
    e.preventDefault();
    if (this.state.password.length < 5) {
      document.getElementById("status").innerHTML = "Password must be longer.";
      e.preventDefault();
    } else if (this.state.username.length < 5) {
      document.getElementById("status").innerHTML = "Username must be longer.";
      e.preventDefault();
    } else {
      this.props.handle_login(e, this.state);
    }
  };

  render() {
    return (
      <Footer
        title="Login"
        user_state={this.props.user_state}
        handle_logout={this.props.handle_logout}
      >
        <Head>
          <title>Log In</title>
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
            Login
          </h1>
          <p className={styles.cta}>
            {" "}
            Don't have an account?{" "}
            <Link href="/authentication/SignupForm">
              <span className={styles.sign}>Sign Up </span>
            </Link>
          </p>
          <div className={styles.container}>
            <div className={styles.ls}>
              <p> Login to your LORELAD account to:</p>
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
              <h4 id="status"> </h4>
              <button type="submit">Login</button>
            </form>
            <img src="/auth_img.png" alt="" />
          </div>
        </main>
      </Footer>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired,
};
