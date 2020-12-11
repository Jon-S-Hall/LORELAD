import Link from "next/link";
import Head from "next/head";
import React, { useState, setState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Layout.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = (props) => {
  const logged_out = (
    <ul>
      <li>
        <Link href="/authentication/LoginForm">
          <a>Log In</a>
        </Link>
      </li>
      <li>
        <Link href="/authentication/SignupForm">
          <a>Sign Up</a>
        </Link>
      </li>
    </ul>
  );
  const logged_in = (
    <ul>
      <li>
        <div>Hi {props.user_state.username}! </div>
      </li>
      <Link href="/">
        <li onClick={props.handle_logout}>
          <a>Log out</a>
        </li>
      </Link>
    </ul>
  );

  const [toggle, setToggle] = useState(false);

  let Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Layout">
      <Head>
        <title>{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.children}
      <footer className={styles.footer}>
        <div className={styles.info}>
          <div>
            <div className={styles.right}>
              <p className={styles.email}>lorelad@gmail.com</p>
              <p className={styles.sm_md}>
                ©<span>LORELAD</span> 2020
              </p>
            </div>
            <div className={styles.links}>
              <Link href="/">
                <a>Terms of Service</a>
              </Link>
              <Link href="/">
                <a>Privacy</a>
              </Link>
              <Link href="/">
                <a>Legal</a>
              </Link>
            </div>
          </div>
          <p className={styles.lg}>
            ©<span>LORELAD</span> 2020
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
