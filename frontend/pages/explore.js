import Head from "next/head";
import styles from "../styles/Explore.module.css";
import Layout from "../components/Layout";

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
          {/* {recordings.map((recording) => (
            <div>
              <p>{recording.Description}</p>
              <h6>We are in the middle of a language extinction.</h6>
              <p>languages in the world.</p>
              <p>are at risk of dying by 2100.</p>
              <p>
                With every language that dies undocumented, so does the culture,
                knowledge and expressions that it encompasses. In our current
                age, we have to the tools to help preserve these low-resource
                languages.
              </p>
            </div>
          ))} */}
        </section>
      </main>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // This is a real endpoint
  const res = await fetch("https://sampleapis.com/fakebank/api/Accounts");
  const recordings = await res.json();

  return {
    props: {
      recordings: recordings.slice(0, 10),
    },
  };
}

export default Explore;
