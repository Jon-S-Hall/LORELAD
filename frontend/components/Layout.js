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
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.menu}>
            <button onClick={Toggle} className={styles.mobile}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <ul
              className={toggle ? `${styles.show_nav}` : `${styles.nav_links}`}
            >
              <li>
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>

              <li>
                <Link href="/explore/languages">
                  <a>EXPLORE</a>
                </Link>
              </li>
              <li>
                <Link href="/record">
                  <a>RECORD</a>
                </Link>
              </li>
              <li>
                <a
                  className={`${styles.coming_soon} ${styles.mobile_none}`}
                  href=""
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <Link href="/record">
            <a className={styles.mobile_none}>RECORD</a>
          </Link>
          <Link href="/explore/languages">
            <a className={styles.mobile_none}>EXPLORE</a>
          </Link>
          <h1 className={styles.h1}>
            <Link href="/">
              <a>LORELAD</a>
            </Link>
          </h1>
          <Link href="/about">
            <a className={styles.mobile_none}>ABOUT</a>
          </Link>
          <a className={`${styles.coming_soon} ${styles.mobile_none}`} href="">
            CONTACT
          </a>
          <div className={styles.profile_container}>
            <div className={styles.dropdown}>
              <button className={styles.profile}></button>
              <div className={styles.dropdown_content}>
                <div>{props.user_state.logged_in ? logged_in : logged_out}</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {props.children}
      <footer className={styles.footer}>
        <div className={styles.info}>
          <div>
            <p className={styles.email}>lorelad@gmail.com</p>
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
          <p>
            ©<span>LORELAD</span> 2020
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
