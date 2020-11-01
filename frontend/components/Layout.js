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
        <a className={styles.coming_soon} href="">
          RECORD
        </a>
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
  </div>
);

export default Layout;
