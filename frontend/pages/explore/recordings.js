import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import Player from "../../components/Player";
import styles from "../../styles/Language.module.css";
import { server } from "../../config";

// All Recordings Page template - incomplete while API is getting finished

function Recordings({ recordings, user_state }) {
  const router = useRouter();
  const { language } = router.query;

  return (
    <Layout user_state={user_state}>
      <div>
        <Head>
          <title>Recordings</title>
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
            <Link
              href={{
                pathname: `/explore/${language}`,
                query: { language: language },
              }}
            >
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
            <h1>{language} - All Recordings</h1>
          </div>
          <section className={styles.search_container}>
            <form action="index.html" method="post">
              <SearchBar />
            </form>
          </section>
          <section className={styles.recordings}>
            {recordings.map((recording) => (
              <div className={styles.recording}>
                <div className={styles.recording_wrapper}>
                  <div className={styles.recording_info}>
                    <h6>{recording.title}</h6>
                    <p>@{recording.speakerID}</p>
                  </div>
                  <Player source="/sample2.mp3" />
                </div>
                <div className={styles.recording_links}>
                  <Link
                    href={{
                      pathname: "/explore/recording/[recording_id]",
                      query: { recording_id: recording.id },
                    }}
                  >
                    <p className={styles.recording_link}>more info</p>
                  </Link>
                  <svg
                    width="30"
                    height="33"
                    viewBox="0 0 30 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.25 20.625V26.125C26.25 26.8543 25.9866 27.5538 25.5178 28.0695C25.0489 28.5853 24.413 28.875 23.75 28.875H6.25C5.58696 28.875 4.95107 28.5853 4.48223 28.0695C4.01339 27.5538 3.75 26.8543 3.75 26.125V20.625"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.75 13.75L15 20.625L21.25 13.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 20.625V4.125"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get languages
  const res = await fetch(`${server}/records`);
  const recordings = await res.json();
  // Pass languages to the page via props
  return {
    props: {
      recordings: recordings,
      revalidate: 5,
    },
  };
}
/*
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://lorelad-backend.herokuapp.com/languages");
    const languages = await res.json();

    // Get the paths we want to pre-render based on recordings
    const paths = languages.map(
        (language) => `/explore/${language.name}/all_recordings`
);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
*/
export default Recordings;
