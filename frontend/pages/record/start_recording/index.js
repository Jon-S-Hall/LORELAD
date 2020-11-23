import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Start_Recording.module.css";
import Layout from "../../../components/Layout";

function Start_Record() {
  let isRecording = false;
  let isNew = true;
  const leaveOpen = () => {
    let element = document.getElementById("leave_modal");
    console.log(element == null);
    element.style.visibility = "initial";
  };
  const deleteOpen = () => {
    let element = document.getElementById("delete_modal");
    element.style.visibility = "initial";
  };
  const finishOpen = () => {
    let element = document.getElementById("finish_modal");
    element.style.visibility = "initial";
  };
  const leaveClose = () => {
    let element = document.getElementById("leave_modal");
    element.style.visibility = "hidden";
  };
  const deleteClose = () => {
    let element = document.getElementById("delete_modal");
    element.style.visibility = "hidden";
  };
  const finishClose = () => {
    let element = document.getElementById("finish_modal");
    element.style.visibility = "hidden";
  };
  const changeRecordingStatus = () => {
    let start_btn = document.getElementById("start_btn");
    let stop_btn = document.getElementById("stop_btn");
    let indicator = document.getElementById("indicator");
    if (isNew) {
      let finish_btn = document.getElementById("finish_btn");
      let delete_btn = document.getElementById("delete_btn");
      finish_btn.style.opacity = "1";
      delete_btn.style.visibility = "initial";
      isNew = false;
    } else {
      let play_btn = document.getElementById("play_btn");
      play_btn.style.opacity = "1";
    }
    if (isRecording == false) {
      start_btn.style.display = "none";
      stop_btn.style.display = "initial";
      indicator.style.fill = "#FF0000";
      isRecording = true;
    } else {
      start_btn.style.display = "initial";
      stop_btn.style.display = "none";
      indicator.style.fill = "#acacac";
      isRecording = false;
    }
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Start Recording</title>
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
            <h1>New Recording</h1>
            <svg
              width="55"
              height="60"
              viewBox="0 0 55 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="delete_btn"
              className={styles.delete_btn}
              onClick={deleteOpen}
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
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.play_btn}
                  id="play_btn"
                >
                  <path
                    d="M37.333 23.3335V88.6668L88.6663 56.0002L37.333 23.3335Z"
                    fill="#8EA934"
                  />
                </svg>
                <p className={styles.record_label}>Play Recording</p>
              </div>
              <div>
                <div className={styles.rec_btn}>
                  <svg
                    width="197"
                    height="197"
                    viewBox="0 0 197 197"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.start_btn}
                    id="start_btn"
                    onClick={changeRecordingStatus}
                  >
                    <circle cx="98.5" cy="98.5" r="98.5" fill="#8EA934" />
                    <path
                      d="M73.481 93.256V102.94H77.153C78.809 102.94 80.069 102.496 80.933 101.608C81.821 100.696 82.265 99.532 82.265 98.116C82.265 94.876 80.453 93.256 76.829 93.256H73.481ZM86.693 115H83.201L77.261 105.424H76.973H73.481V115H70.565V90.736H76.649C79.457 90.736 81.581 91.396 83.021 92.716C84.485 94.036 85.217 95.86 85.217 98.188C85.169 99.868 84.725 101.296 83.885 102.472C83.045 103.648 81.857 104.476 80.321 104.956L86.693 115ZM93.2036 112.444H103.824V115H90.2876V90.736H103.644V93.292H93.2036V101.608H102.42V104.164H93.2036V112.444ZM125.639 91.708V94.696C124.583 94.144 123.635 93.748 122.795 93.508C121.955 93.268 120.851 93.148 119.483 93.148C116.867 93.148 114.683 94.036 112.931 95.812C111.203 97.588 110.339 99.904 110.339 102.76C110.339 105.736 111.203 108.112 112.931 109.888C114.659 111.664 116.951 112.552 119.807 112.552C122.111 112.552 124.079 111.94 125.711 110.716V113.776C124.223 114.784 122.183 115.288 119.591 115.288C115.943 115.288 112.979 114.172 110.699 111.94C108.419 109.684 107.279 106.624 107.279 102.76C107.279 99.112 108.431 96.148 110.735 93.868C113.063 91.564 115.979 90.412 119.483 90.412C122.003 90.412 124.055 90.844 125.639 91.708Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="203"
                    height="203"
                    viewBox="0 0 203 203"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.stop_btn}
                    id="stop_btn"
                    onClick={changeRecordingStatus}
                  >
                    <path d="M0 0H203V203H0V0Z" fill="#8EA934" />
                    <path
                      d="M76.4448 91.636V94.696C74.9808 93.736 73.2288 93.256 71.1888 93.256C69.7248 93.256 68.5608 93.604 67.6968 94.3C66.8328 94.972 66.4008 95.86 66.4008 96.964C66.4008 97.54 66.5088 98.056 66.7248 98.512C66.9648 98.968 67.3728 99.4 67.9488 99.808C68.5248 100.192 69.0168 100.492 69.4248 100.708C69.8328 100.9 70.4688 101.188 71.3328 101.572C72.1488 101.932 72.7728 102.22 73.2048 102.436C73.6368 102.628 74.1888 102.952 74.8608 103.408C75.5568 103.84 76.0728 104.272 76.4088 104.704C76.7688 105.112 77.0808 105.664 77.3448 106.36C77.6328 107.032 77.7768 107.764 77.7768 108.556C77.7768 110.692 77.0448 112.348 75.5808 113.524C74.1168 114.676 72.2328 115.252 69.9288 115.252C67.3848 115.252 65.2248 114.736 63.4488 113.704V110.572C65.2008 111.892 67.3368 112.552 69.8568 112.552C71.3688 112.552 72.5568 112.216 73.4208 111.544C74.2848 110.872 74.7168 109.9 74.7168 108.628C74.7168 108.1 74.6088 107.632 74.3928 107.224C74.2008 106.792 73.8648 106.408 73.3848 106.072C72.9288 105.712 72.4848 105.424 72.0528 105.208C71.6448 104.968 71.0808 104.68 70.3608 104.344C70.2168 104.272 70.0008 104.176 69.7128 104.056C68.6808 103.6 67.8888 103.228 67.3368 102.94C66.8088 102.652 66.1728 102.232 65.4288 101.68C64.7088 101.104 64.1808 100.444 63.8448 99.7C63.5088 98.956 63.3408 98.092 63.3408 97.108C63.3408 95.044 64.0728 93.436 65.5368 92.284C67.0248 91.108 68.8848 90.52 71.1168 90.52C73.2048 90.52 74.9808 90.892 76.4448 91.636ZM96.5118 90.736V93.292H89.9598V115H87.0438V93.292H80.4918V90.736H96.5118ZM98.9389 102.76C98.9389 98.944 99.9109 95.908 101.855 93.652C103.823 91.396 106.475 90.268 109.811 90.268C113.219 90.268 115.883 91.396 117.803 93.652C119.747 95.884 120.719 98.92 120.719 102.76C120.719 106.576 119.735 109.624 117.767 111.904C115.823 114.16 113.183 115.288 109.847 115.288C106.559 115.288 103.919 114.148 101.927 111.868C99.9349 109.588 98.9389 106.552 98.9389 102.76ZM101.999 102.76C101.999 105.76 102.707 108.136 104.123 109.888C105.563 111.64 107.471 112.516 109.847 112.516C112.319 112.516 114.227 111.652 115.571 109.924C116.939 108.196 117.623 105.808 117.623 102.76C117.623 99.712 116.939 97.324 115.571 95.596C114.203 93.868 112.283 93.004 109.811 93.004C107.363 93.004 105.443 93.88 104.051 95.632C102.683 97.36 101.999 99.736 101.999 102.76ZM128.106 103.588H131.85C133.674 103.588 135.102 103.12 136.134 102.184C137.166 101.224 137.682 100.012 137.682 98.548C137.682 96.916 137.154 95.62 136.098 94.66C135.042 93.7 133.542 93.22 131.598 93.22H128.106V103.588ZM125.19 90.736H131.562C134.37 90.736 136.578 91.468 138.186 92.932C139.818 94.372 140.634 96.244 140.634 98.548C140.634 100.708 139.83 102.508 138.222 103.948C136.614 105.364 134.49 106.072 131.85 106.072H128.106V115H125.19V90.736Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className={styles.time}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" id="indicator" />
                  </svg>
                  0:00
                </p>
              </div>
              <div>
                {/* <Link href=""> */}
                <svg
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="finish_btn"
                  className={styles.finish_btn}
                  onClick={finishOpen}
                >
                  <path
                    d="M77.4197 35.3735L46.6663 66.1268L29.913 49.4202L23.333 56.0002L46.6663 79.3335L83.9997 42.0002L77.4197 35.3735ZM55.9997 9.3335C30.2397 9.3335 9.33301 30.2402 9.33301 56.0002C9.33301 81.7602 30.2397 102.667 55.9997 102.667C81.7597 102.667 102.666 81.7602 102.666 56.0002C102.666 30.2402 81.7597 9.3335 55.9997 9.3335ZM55.9997 93.3335C35.373 93.3335 18.6663 76.6268 18.6663 56.0002C18.6663 35.3735 35.373 18.6668 55.9997 18.6668C76.6263 18.6668 93.333 35.3735 93.333 56.0002C93.333 76.6268 76.6263 93.3335 55.9997 93.3335Z"
                    fill="#8EA934"
                  />
                </svg>
                {/* </Link> */}
                <p className={styles.record_label}>Finish Recording</p>
              </div>
            </div>
          </section>
          <p className={styles.directions}>
            When you’re ready, click the record button (circle) to start. You
            can pause your recording by clicking button (now square). You can
            play back your recording and if you’re happy with it, click finish
            recording!
          </p>
          {/* MODALS */}
          <section
            id="leave_modal"
            className={`${styles.modal_container} ${styles.leave}`}
          >
            <div className={styles.modal}>
              <h2>
                If you leave this page, your recording will be discarded. Do you
                wish to proceed?
              </h2>
              <button onClick={leaveClose}>No</button>
              <Link href="/record">
                <button>Yes</button>
              </Link>
            </div>
          </section>
          <section
            id="delete_modal"
            className={`${styles.modal_container} ${styles.delete}`}
          >
            <div className={styles.modal}>
              <h2>
                Your recording will be permanently deleted. Do you wish to
                proceed?
              </h2>
              <button onClick={deleteClose}>No</button>
              <button>Yes</button>
            </div>
          </section>
          <section
            id="finish_modal"
            className={`${styles.modal_container} ${styles.finish}`}
          >
            <div className={styles.modal}>
              <h2>Are You Finished Recording?</h2>
              <button onClick={finishClose}>No</button>
              <Link href="/record/start_recording/save_recording">
                <button>Yes</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

// function module() {
//   // When the modal is shown, we want a fixed body
//   document.querySelector("finish_container").style.visibility = "initial";
//   document.main.style.position = "fixed";
//   document.main.style.top = `-${window.scrollY}px`;

//   // When the modal is hidden...
//   const scrollY = document.body.style.top;
//   document.main.style.position = "";
//   document.main.style.top = "";
//   window.scrollTo(0, parseInt(scrollY || "0") * -1);
// }

export default Start_Record;
