import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Save_Recording.module.css";
import Layout from "../../../components/Layout";
import SearchBar from "../../../components/SearchBar";

function Save_Recording() {
  const leaveOpen = () => {
    let element = document.getElementById("leave_modal");
    console.log(element == null);
    element.style.visibility = "initial";
  };
  const leaveClose = () => {
    let element = document.getElementById("leave_modal");
    element.style.visibility = "hidden";
  };
  return (
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
            <svg
              width="51"
              height="27"
              viewBox="0 0 51 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={leaveOpen}
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
            <h1>Upload Recording</h1>
          </div>
          <section>
            <form action="index.html" method="post">
              <div className={styles.name}>
                <label for="name">Name: </label>
                <input name="name" placeholder="New recording" />
              </div>
              <br />
              <label for="search">What Language is your recording in?</label>
              <SearchBar />
              <label for="about">What is your recording about?</label>
              <textarea
                name="about"
                placeholder="Type description here ... "
              ></textarea>
              <label for="search">Add Tags</label>
              <SearchBar />
              <div className={styles.tags_container}>
                <p>Reccomended Tags</p>
                <div className={styles.tags}>
                  <button>taishanese</button>
                  <button>cooking</button>
                  <button>recipe</button>
                </div>
              </div>
              <section className={styles.download_container}>
                <p>Download Your Recording:</p>
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
                      d="M11.667 16.6665L20.0003 24.9998L28.3337 16.6665"
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
              </section>
              <section className={styles.upload_btns}>
                <button>Cancel</button>
                <button>Upload</button>
              </section>
            </form>
          </section>
          {/* MODALS */}
          <section
            id="leave_modal"
            className={`${styles.modal_container} ${styles.leave}`}
          >
            <div className={styles.modal}>
              <h2>Return to Recording Workspace?</h2>
              <button onClick={leaveClose}>No</button>
              <Link href="/record/start_recording">
                <button>Yes</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Save_Recording;
