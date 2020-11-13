import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Send_Kit.module.css";
import Layout from "../../components/Layout";

const Send_Kit = () => (
  <Layout>
    <div>
      <Head>
        <title>Send Kit</title>
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
          </section>
          <section>
            <Link href="/record/send_kit">
              <div className={styles.send}>
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

export default Send_Kit;
