import Link from "next/link";
import Head from "next/head";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/Layout.module.css";

const Layout = (props) => {

    console.log(props.logged_in)
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
              <Link href="/"><li onClick={props.handle_logout}> <a>Logout</a></li></Link>
          </ul>
    );
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
                    <Link href="/record">
                        <a>RECORD</a>
                    </Link>
                    <Link href="/explore">
                        <a>EXPLORE</a>
                    </Link>
                    <h1 className={styles.h1}>
                        <Link href="/">
                            <a>LORELAD</a>
                        </Link>
                    </h1>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                    <a className={styles.coming_soon} href="">
                        CONTACT
                    </a>
                    <div className={styles.dropdown}>
                        <button className={styles.profile}></button>
                        <div className={styles.dropdown_content}>
                            <div>{props.logged_in ? logged_in : logged_out}</div>
                        </div>
                    </div>
                </nav>
            </header>
            {props.children}
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <div className={styles.links}>
                        <p>lorelad@gmail.com</p>
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
                    <p>
                        ©<span>LORELAD</span> 2020
                    </p>
                </div>
            </footer>
        </div>
    );
}


export default Layout;