import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Layout.module.css";

const Layout = (props) => (
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

export default Layout;
