import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Explore.module.css";
import Layout from "../../components/Layout";

const Explore = ({ languages }) => (
  <Layout title="Explore">
    <div>
      <Head>
        <title>Explore</title>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
        />
      </Head>

      <main className={styles.main}>
        <h1>Explore Languages</h1>
        <section>
          <form action="index.html" method="post">
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
          <h2>All Languages</h2>
          <div className={styles.language_container}>
            {/* Example sections showing what the language list would look like */}
            <Link href="/explore/taishanese">
              <h3>Taishanese</h3>
            </Link>
            <div>
              <p>Native speakers: 500</p>
              <p>Country: China</p>
            </div>
          </div>
          <div className={styles.language_container}>
            <Link href="/explore/taishanese">
              <h3>Taishanese</h3>
            </Link>
            <div>
              <p>Native speakers: 500</p>
              <p>Country: China</p>
            </div>
          </div>
          <div className={styles.language_container}>
            <Link href="/explore/taishanese">
              <h3>Taishanese</h3>
            </Link>
            <div>
              <p>Native speakers: 500</p>
              <p>Country: China</p>
            </div>
          </div>
          {/* actual code for generating the language list: */}
          {languages.map((language) => (
            <Link
              href={{
                pathname: "/explore/[slug]",
                query: { slug: language.name },
              }}
            >
              <div className={styles.language_container}>
                <h3>{language.name}</h3>
                <div>
                  {/* <p>Native speakers: {language.speakers}</p>
                  <p>Country: {language.country}</p> */}
                  <p>Native speakers: 500</p>
                  <p>Country: China</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // Call an external API endpoint to get languages
  const res = await fetch("https://lorelad-backend.herokuapp.com/languages");
  const languages = await res.json();

  // Pass languages to the page via props
  return {
    props: {
      languages,
    },
  };
}

export default Explore;
