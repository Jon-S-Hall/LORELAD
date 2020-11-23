import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Languages_All_Recordings.module.css";
import Layout from "../../../components/Layout";
import SearchBar from "../../../components/SearchBar";
import SearchBarLg from "../../../components/SearchBarLg";

// Example page of what an All Recordings Page would look like

const Recordings = ({ language }) => (
  <Layout>
    <div>
      <Head>
        <title>{language.name} Recordings</title>
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
        <div className={styles.language_name}>
          <Link href="/explore/taishanese">
            <svg
              width="51"
              height="27"
              viewBox="0 0 51 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          <h1>Language - All Recordings</h1>
        </div>
        <section>
          <form action="index.html" method="post">
            {/* <div>
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
            </div> */}
            <SearchBarLg />
          </form>
        </section>
        <section className={styles.recordings}>
          <div className={styles.recording}>
            <div className={styles.recording_wrapper}>
              <div className={styles.recording_info}>
                <div>
                  <h6>Recording Title</h6>
                  <p>@lrlspeaker123</p>
                </div>
                <Link href="/explore/recording_1">
                  <p className={styles.recording_link}>more info</p>
                </Link>
              </div>
              <p>Audio player here</p>
            </div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49 35V44.3333C49 45.571 48.5083 46.758 47.6332 47.6332C46.758 48.5083 45.571 49 44.3333 49H11.6667C10.429 49 9.242 48.5083 8.36683 47.6332C7.49167 46.758 7 45.571 7 44.3333V35"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.333 23.3334L27.9997 35L39.6663 23.3334"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 35V7"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.recording}>
            <div className={styles.recording_wrapper}>
              <div className={styles.recording_info}>
                <div>
                  <h6>Recording Title</h6>
                  <p>@lrlspeaker123</p>
                </div>
                <Link href="/explore/recording_1">
                  <p className={styles.recording_link}>more info</p>
                </Link>
              </div>
              <p>Audio player here</p>
            </div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49 35V44.3333C49 45.571 48.5083 46.758 47.6332 47.6332C46.758 48.5083 45.571 49 44.3333 49H11.6667C10.429 49 9.242 48.5083 8.36683 47.6332C7.49167 46.758 7 45.571 7 44.3333V35"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.333 23.3334L27.9997 35L39.6663 23.3334"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 35V7"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.recording}>
            <div className={styles.recording_wrapper}>
              <div className={styles.recording_info}>
                <div>
                  <h6>Recording Title</h6>
                  <p>@lrlspeaker123</p>
                </div>
                <Link href="/explore/recording_1">
                  <p className={styles.recording_link}>more info</p>
                </Link>
              </div>
              <p>Audio player here</p>
            </div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49 35V44.3333C49 45.571 48.5083 46.758 47.6332 47.6332C46.758 48.5083 45.571 49 44.3333 49H11.6667C10.429 49 9.242 48.5083 8.36683 47.6332C7.49167 46.758 7 45.571 7 44.3333V35"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.333 23.3334L27.9997 35L39.6663 23.3334"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 35V7"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>
      </main>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // Call an external API endpoint to get languages
  const res = await fetch("https://sampleapis.com/fakebank/api/Accounts");
  const language = await res.json();

  // Pass languages to the page via props
  return {
    props: {
      language: language,
    },
  };
}

export default Recordings;
