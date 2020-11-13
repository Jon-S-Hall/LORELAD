import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Start_Recording.module.css";
import Layout from "../../../components/Layout";

const Save_Recording = () => (
  <Layout>
    <div>
      <Head>
        <title>Save Recording</title>
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
        <div className={styles.top}>
          <Link href="/record">
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
          <h1>New Recording</h1>
          <svg
            width="55"
            height="60"
            viewBox="0 0 55 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 13.167H7.58333H52.25"
              stroke="#606C38"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.958 13.1667V7.58333C15.958 6.10254 16.5463 4.6824 17.5933 3.63532C18.6404 2.58824 20.0605 2 21.5413 2H32.708C34.1888 2 35.6089 2.58824 36.656 3.63532C37.7031 4.6824 38.2913 6.10254 38.2913 7.58333V13.1667M46.6663 13.1667V52.25C46.6663 53.7308 46.0781 55.1509 45.031 56.198C43.9839 57.2451 42.5638 57.8333 41.083 57.8333H13.1663C11.6855 57.8333 10.2654 57.2451 9.21833 56.198C8.17125 55.1509 7.58301 53.7308 7.58301 52.25V13.1667H46.6663Z"
              stroke="#606C38"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.542 27.125V43.875"
              stroke="#606C38"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.708 27.125V43.875"
              stroke="#606C38"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <section>
          <div className={styles.record_btns}>
            <div>
              <svg
                width="78"
                height="91"
                viewBox="0 0 78 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 91H26V0H0V91ZM52 0V91H78V0H52Z" fill="#8EA934" />
              </svg>
              <p className={styles.record_labels}>Pause</p>
            </div>
            <div className={styles.rec_btn}>
              <svg
                width="203"
                height="203"
                viewBox="0 0 203 203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="101.5" cy="101.5" r="101.5" fill="#8EA934" />
              </svg>
              <p className={styles.time}>0:00</p>
              <p className={styles.rec_txt}>REC</p>
            </div>
            <div>
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H91V91H0V0Z" fill="#8EA934" />
              </svg>
              <p className={styles.record_labels}>Finish Recording</p>
            </div>
          </div>
          <div className={styles.record_labels}>
            <p>Pause</p>
            <p>Start a New Recording</p>
            <p>Finish Recording</p>
          </div>
        </section>
        <p className={styles.directions}>
          When you’re ready, click the record button (circle) to start. You can
          pause your recording by clicking the button on the left & to finish
          you recording, press the square on the right.
        </p>
        <button className={styles.upload}>
          Already have a recording? Upload Here
        </button>
        <section className={styles.finish}>
          <h2>Are You Finished Recording?</h2>
          <button>No</button>
          <button>Yes</button>
        </section>
      </main>
    </div>
  </Layout>
);

export default Save_Recording;
