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
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.574 15.8315V19.8636C21.574 20.3983 21.3616 20.9111 20.9835 21.2892C20.6055 21.6672 20.0927 21.8797 19.558 21.8797H5.44572C4.91104 21.8797 4.39825 21.6672 4.02017 21.2892C3.64209 20.9111 3.42969 20.3983 3.42969 19.8636V15.8315"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.46289 10.7915L12.503 15.8316L17.5431 10.7915"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.502 15.8316V3.73535"
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
          <div className={styles.player}>
            <div>
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
