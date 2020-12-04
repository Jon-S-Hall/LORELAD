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
          <section className={styles.save_container}>
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
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.574 15.9824V20.0145C21.574 20.5492 21.3616 21.062 20.9835 21.44C20.6055 21.8181 20.0927 22.0305 19.558 22.0305H5.44572C4.91104 22.0305 4.39825 21.8181 4.02017 21.44C3.64209 21.062 3.42969 20.5492 3.42969 20.0145V15.9824"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.46289 10.9424L12.503 15.9825L17.5431 10.9424"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.502 15.9825V3.88623"
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
