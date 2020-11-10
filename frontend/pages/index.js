import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home = () => (
  <Layout title="Home">
    <div className={styles.container}>
      <Head>
        <title>Lorelad</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section id="top" className={styles.top}>
          <div className={styles.top_content}>
            <div className={styles.top_text}>
              <div className={styles.left}>
                <h2>YOUR LANGUAGE.</h2>
                <h2>YOUR STORIES.</h2>
                <p>
                  <span>LORELAD</span> is an online database designed to protect
                  and preserve your language for learning, research, &
                  posterity.
                </p>
              </div>
              <div className={styles.right}>
                <h3>HOW IT WORKS</h3>
                <div className={styles.right_content}>
                  <div className={styles.svgs}>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 1.83333C21.475 1.83333 20.0125 2.41279 18.9341 3.44424C17.8558 4.47569 17.25 5.87464 17.25 7.33333V22C17.25 23.4587 17.8558 24.8576 18.9341 25.8891C20.0125 26.9205 21.475 27.5 23 27.5C24.525 27.5 25.9875 26.9205 27.0659 25.8891C28.1442 24.8576 28.75 23.4587 28.75 22V7.33333C28.75 5.87464 28.1442 4.47569 27.0659 3.44424C25.9875 2.41279 24.525 1.83333 23 1.83333V1.83333Z"
                        stroke="#283618"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M36.4168 18.3333V22C36.4168 25.4036 35.0033 28.6678 32.4872 31.0745C29.9711 33.4813 26.5585 34.8333 23.0002 34.8333C19.4418 34.8333 16.0293 33.4813 13.5131 31.0745C10.997 28.6678 9.5835 25.4036 9.5835 22V18.3333"
                        stroke="#283618"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23 34.8333V42.1667"
                        stroke="#283618"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.3335 42.1667H30.6668"
                        stroke="#283618"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.12657 1.06753L0 2.13506V8.7652V15.3953L1.12657 16.4629C1.87736 17.1743 2.64396 17.5304 3.42404 17.5304H4.59494L4.70632 20.7261C4.80653 23.6021 4.89479 23.9319 5.58854 24.0254C6.64034 24.1664 11.6939 19.3594 11.4993 18.4025C11.2569 17.209 10.0201 17.3829 8.45643 18.8298L6.9772 20.1983L6.86119 17.8598L6.74479 15.5217L4.625 15.3391L2.50521 15.1565V8.7652V2.37391H11.5625H20.6198L20.8125 5.47825C20.9998 8.4975 21.0318 8.58259 21.9688 8.58259C22.9149 8.58259 22.9342 8.52489 23.0437 5.37343C23.1528 2.2417 23.1277 2.13761 22.0135 1.08214L20.8719 0H11.5625H2.25315L1.12657 1.06753ZM6.89279 5.46474C5.77855 6.52022 5.7535 6.6243 5.86257 9.75604C5.97203 12.9075 5.9913 12.9652 6.9375 12.9652C7.70217 12.9652 7.92609 12.7578 8.02283 11.9608C8.12458 11.1256 8.33117 10.9565 9.25 10.9565C10.1688 10.9565 10.3754 11.1256 10.4772 11.9608C10.5739 12.7578 10.7978 12.9652 11.5625 12.9652C12.5087 12.9652 12.528 12.9075 12.6374 9.75604C12.7465 6.6243 12.7214 6.52022 11.6072 5.46474C10.8244 4.72298 10.0833 4.3826 9.25 4.3826C8.41673 4.3826 7.67557 4.72298 6.89279 5.46474ZM10.3353 7.76086C10.4452 8.66331 10.3376 8.7652 9.27544 8.7652C8.29455 8.7652 8.09375 8.62058 8.09375 7.91315C8.09375 7.44421 8.2167 6.94423 8.36701 6.8018C9.01258 6.19006 10.2159 6.77623 10.3353 7.76086ZM15.0016 12.024L13.875 13.0916V19.7217V26.3519L15.0016 27.4194C16.0942 28.4548 16.2426 28.4869 19.9237 28.4869H23.7193L27.18 31.7852C31.6994 36.0929 32.1403 36.0841 32.2937 31.6826L32.4051 28.4869H33.576C34.356 28.4869 35.1226 28.1308 35.8734 27.4194L37 26.3519V19.7217V13.0916L35.8734 12.024L34.7469 10.9565H25.4375H16.1281L15.0016 12.024ZM34.4948 19.7217V26.113L32.375 26.2956L30.2552 26.4782L30.1388 28.8233L30.0224 31.1687L27.4409 28.744L24.8594 26.3193L20.6198 26.2164L16.3802 26.113L16.2738 20.1008C16.2156 16.7945 16.2546 13.8742 16.3609 13.6116C16.5139 13.2336 18.4214 13.1547 25.5246 13.2325L34.4948 13.3304V19.7217ZM24.5545 14.4713C24.4042 14.6138 24.2812 15.1057 24.2812 15.5644C24.2812 16.3234 24.0824 16.4081 22.0651 16.5078C19.9889 16.6104 19.849 16.6751 19.849 17.5304C19.849 18.4164 19.9368 18.4467 22.8359 18.5501C24.479 18.6089 25.8229 18.7345 25.8229 18.8291C25.8229 18.9241 25.4545 19.534 25.0043 20.1852C23.9517 21.7063 22.553 22.6971 21.0457 22.9893C20.0979 23.173 19.849 23.4078 19.849 24.1193C19.849 25.4205 21.5194 25.5005 23.7737 24.3066C25.328 23.4831 25.6348 23.4287 26.1713 23.8801C27.0173 24.5915 29.8659 25.3497 30.6387 25.0685C31.7676 24.658 31.174 23.2968 29.674 22.8571C28.9305 22.6391 28.0028 22.2808 27.6124 22.0609C26.9279 21.6749 26.931 21.6077 27.7068 20.1669C28.3671 18.9405 28.7363 18.6524 29.7688 18.5581C30.8206 18.4621 31.026 18.2944 31.026 17.5304C31.026 16.6762 30.8846 16.6104 28.8338 16.5085C26.7718 16.4063 26.6342 16.3409 26.5213 15.4129C26.4034 14.4451 25.1935 13.8658 24.5545 14.4713Z"
                        fill="#283618"
                      />
                    </svg>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.8465 13.3333C5.61571 14.2045 5.49929 15.1005 5.5 16C5.5 16.92 5.621 17.8133 5.8465 18.6667H9.7625C9.57712 16.8934 9.57712 15.1066 9.7625 13.3333H5.8465ZM6.97125 10.6667H10.197C10.5627 9.044 11.0907 7.59067 11.7384 6.38133C9.74212 7.31389 8.08117 8.80698 6.97125 10.6667ZM27.1535 13.3333H23.2375C23.4229 15.1066 23.4229 16.8934 23.2375 18.6667H27.1535C27.6164 16.9172 27.6164 15.0828 27.1535 13.3333ZM26.0288 10.6667C24.9188 8.80698 23.2579 7.31389 21.2616 6.38133C21.9106 7.59067 22.4373 9.044 22.803 10.6667H26.0288ZM12.529 13.3333C12.426 14.2187 12.3746 15.109 12.375 16C12.375 16.9133 12.4273 17.8067 12.529 18.6667H20.471C20.6781 16.8946 20.6781 15.1054 20.471 13.3333H12.529ZM13.0213 10.6667H19.9788C19.7285 9.6644 19.3676 8.69121 18.9021 7.764C18.0386 6.09067 17.1146 5.33333 16.5 5.33333C15.884 5.33333 14.9614 6.09067 14.0979 7.764C13.6648 8.60667 13.3004 9.58667 13.0213 10.6667ZM6.97125 21.3333C8.08117 23.193 9.74212 24.6861 11.7384 25.6187C11.0894 24.4093 10.5627 22.956 10.197 21.3333H6.97125ZM26.0288 21.3333H22.803C22.4373 22.956 21.9093 24.4093 21.2616 25.6187C23.2579 24.6861 24.9188 23.193 26.0288 21.3333ZM13.0213 21.3333C13.3004 22.4133 13.6648 23.3933 14.0979 24.236C14.9614 25.9093 15.8854 26.6667 16.5 26.6667C17.116 26.6667 18.0386 25.9093 18.9021 24.236C19.3352 23.3933 19.6996 22.4133 19.9788 21.3333H13.0213ZM16.5 29.3333C8.90588 29.3333 2.75 23.364 2.75 16C2.75 8.636 8.90588 2.66667 16.5 2.66667C24.0941 2.66667 30.25 8.636 30.25 16C30.25 23.364 24.0941 29.3333 16.5 29.3333Z"
                        fill="#283618"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Record audio of low-resource languages being spoken.</p>
                    <p>
                      Submit the audio to be translated by yourself and others.
                    </p>
                    <p>
                      Explore languages! Listen to recordings of low-resource
                      languages & the stories and culture they bring with them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_cta_button}>
              <p>Get Started</p>
              <a href="#cta">
                <svg
                  width="70"
                  height="30"
                  viewBox="0 0 70 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L35 28L68 2"
                    stroke="#BC6C25"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section id="cta" className={styles.cta}>
          <div className={styles.speaker}>
            <p>Are you a low-resource language speaker?</p>
            <button>
              <a href="">Make A Recording</a>
            </button>
          </div>
          <div className={styles.researcher}>
            <p>Are you a researcher or student?</p>
            <Link href="/explore">
              <button>
                <a href="">Explore Low Resource Languages</a>
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  </Layout>
);

export default Home;
