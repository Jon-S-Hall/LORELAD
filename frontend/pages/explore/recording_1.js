import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Recording.module.css";
import Layout from "../../components/Layout";

// Example page of what a Recording Page would look like

const Recording = ({ recording }) => (
  <Layout>
    <div>
      <Head>
        <title>Recording 1</title>
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
        <div className={styles.recording_name}>
          <Link href="/explore/taishanese/all_recordings">
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
          <div>
            <h1>Recording 1</h1>
            <p>Uploaded by @lrlspeaker123</p>
          </div>
        </div>
        <section className={styles.about_container}>
          <div className={styles.buttons_container}>
            <div>
              <button>taishanese</button>
              <button>cooking</button>
              <button>recipe</button>
            </div>
            <button className={styles.download_btn}>
              Download
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.667 16.6666L20.0003 25L28.3337 16.6666"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 25V5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.description}>
            <div>
              <p>
                This is a description with filler text. The user may upload
                backstory, context or information about their recording to this
                section. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Amet volutpat nisi, eget amet tempus, ut aenean nunc sit.
                Nec, enim, enim nulla mauris magna mauris lorem in.
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.stats}>
              <p>Record player here</p>
            </div>
          </div>
        </section>
        <section className={styles.translations_container}>
          <h3>Translations</h3>
          <div className={styles.translations}>
            <div className={styles.translation_1}>
              <h6>Translated by @lrlspeaker123</h6>
              <p>
                This is a description with filler text. The user may upload of
                their own recording or others may tranlsate the recordings.
              </p>
            </div>
            <div className={styles.translation_2}>
              <h6>Translated by @lrlspeaker123</h6>
              <p>
                This is a description with filler text. The user may upload of
                their own recording or others may tranlsate the recordings.
              </p>
            </div>
          </div>
          <button>
            <i class="fas fa-plus"></i> Add A Translation
          </button>
        </section>
      </main>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // Call an external API endpoint to get languages
  const res = await fetch("https://sampleapis.com/fakebank/api/Accounts");
  const recording = await res.json();

  // Pass languages to the page via props
  return {
    props: {
      recording: recording,
    },
  };
}

export default Recording;