import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Explore.module.css";
import Layout from "../components/Layout";
import { useRouter } from 'next/router'
//functional or stateless component. recordings property gets passed in from getStaticProps
const Explore = (props) => (
  <Layout title="Explore">
    <div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
        />
      </Head>

      <main className={styles.main}>
        <h1>Explore Languages</h1>
        <section>
          <form action="/" method="get">
            <div>
              <label for="search">search</label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                required
              />
              <button type="button" name="send">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>
        </section>
        <section className={styles.results}>
          {props.languages.map((language) => (
              <div>
                <Link href={{
                  pathname:'/explore/[lang]',
                  query: {lang: language.name}
                }}><p>{language.name}</p></Link>
              </div>
          ))}
        </section>
      </main>
    </div>
  </Layout>
);
export default Explore;

export async function getStaticProps() {
  // This is a real endpoint
  const res = await fetch("https://lorelad-backend.herokuapp.com/languages");
  const languages = await res.json();

  return {
    props: {
      languages,
    },
  };
}


