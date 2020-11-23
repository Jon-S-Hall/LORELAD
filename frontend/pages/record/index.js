import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Record.module.css";
import Layout from "../../components/Layout";

const Record = () => (
  <Layout>
    <div>
      <Head>
        <title>Record</title>
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
        <h1>Record</h1>
        <div className={styles.container}>
          <section>
            <Link href="/record/start_recording">
              <div className={styles.record}>
                <svg
                  width="299"
                  height="269"
                  viewBox="0 0 299 269"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.record_svg_1}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.335 -60.6913C50.7162 -81.4852 83.1551 -111.26 116.873 -101.464C151.468 -91.4133 152.403 -41.1062 177.725 -15.5458C197.849 4.76723 233.378 5.73095 247.624 30.5189C263.421 58.0039 270.827 94.1149 257.273 122.861C243.925 151.171 210.082 162.719 180.476 172.935C156.793 181.107 132.041 171.223 107.233 174.635C74.4155 179.148 40.6281 213.616 12.6515 196.014C-14.5267 178.915 3.92228 134.517 -5.37167 103.79C-14.8779 72.3616 -47.5591 47.4302 -42.0977 15.0083C-36.4642 -18.4351 -5.07176 -40.6113 22.335 -60.6913Z"
                    fill="#8EA934"
                  />
                </svg>
                <svg
                  width="127"
                  height="210"
                  viewBox="0 0 127 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.record_svg_2}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M106.877 0.491785C128.359 4.85715 130.246 38.0443 147.27 52.4096C162.786 65.5028 188.651 61.6802 199.834 78.9329C211.923 97.5841 218.596 125.499 206.918 144.434C194.959 163.826 164.627 154.375 145.835 166.49C129.467 177.042 125.581 204.248 106.877 208.93C87.5236 213.774 68.3002 201.237 51.4924 190.106C33.6965 178.321 16.838 164.092 8.58855 143.839C-0.126653 122.444 -3.67329 97.3229 4.97079 75.8957C13.3503 55.1243 35.5768 46.3201 53.1855 33.2908C70.5282 20.4583 86.0147 -3.7476 106.877 0.491785Z"
                    fill="#8EA934"
                  />
                </svg>
                <h2>Start a New Recording</h2>
                <img src="/microphone.png" alt="microphone" />
                <p>
                  Use our built-in recorder tool to record and upload audio of a
                  low-resource language!
                </p>
                <Link href="/record/start_recording">
                  <a>Get Started</a>
                </Link>
              </div>
            </Link>
            <button className={styles.upload}>
              Already have a recording? <span>Upload Here</span>
            </button>
          </section>
          <section>
            <Link href="/record/send_kit">
              <div className={styles.send}>
                <svg
                  width="129"
                  height="148"
                  viewBox="0 0 129 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.send_svg_1}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M105.765 50.5958C102.819 76.6513 121.958 108.581 105.288 127.217C88.3554 146.146 60.1218 127.053 36.6712 127.838C19.1176 128.426 2.75232 133.047 -14.6773 131.234C-40.6447 128.534 -72.2852 136.625 -89.3844 114.728C-106.393 92.9475 -104.177 56.5439 -94.6822 28.7834C-86.02 3.45672 -61.5922 -8.42926 -41.9079 -24.084C-26.9001 -36.0196 -11.804 -46.8327 5.96647 -51.2616C23.7166 -55.6854 41.1374 -53.1766 58.7585 -49.1729C81.3555 -44.0385 111.676 -47.7042 122.472 -24.79C133.311 -1.78404 108.734 24.3327 105.765 50.5958Z"
                    fill="#DDA15E"
                  />
                </svg>
                <svg
                  width="277"
                  height="158"
                  viewBox="0 0 277 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.send_svg_2}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M181.077 -94.9897C211.656 -94.6608 239.233 -83.9541 266.33 -71.978C298.229 -57.8793 338.39 -47.9513 351.554 -19.6434C364.824 8.8893 352.165 43.196 331.652 68.484C313.527 90.8292 277.375 93.4036 249.274 106.45C225.924 117.291 206.474 131.585 181.077 138.391C145.059 148.043 106.989 166.072 72.0325 153.948C35.5152 141.282 10.4404 108.881 2.04807 76.2947C-6.01088 45.0026 11.1425 13.7236 28.5983 -14.7031C43.6956 -39.2891 66.4101 -59.1787 94.2336 -73.8289C120.443 -87.6295 150.196 -95.3218 181.077 -94.9897Z"
                    fill="#DDA15E"
                  />
                </svg>
                <h2>Send a Kit</h2>
                <img src="/kit.png" alt="kit" />
                <p>
                  Know a low-resource language speaker who can’t use our record
                  tool? Send them an audio kit on us!
                </p>
                <Link href="/record/send_kit">
                  <a>Get Started</a>
                </Link>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </div>
  </Layout>
);

export default Record;
