import Head from "next/head";
import styles from "../styles/Explore.module.css";
import Layout from "../components/Layout";
//functional or stateless component. recordings property gets passed in from getStaticProps
const Explore = ({ recordings }) => (
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
          {recordings.map((recording) => (
            <li>{recording.media}</li>
          ))}
        </section>
      </main>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // This is a real endpoint
  const res = await fetch("https://lorelad-backend.herokuapp.com/records");
  const recordings = await res.json();

  return {
    props: {
      recordings,
    },
  };
}

export default Explore;
