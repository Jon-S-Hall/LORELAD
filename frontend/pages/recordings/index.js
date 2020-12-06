import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Explore.module.css";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "next/router";

class Recordings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: "",
            selectedContinent: "",
            selectedSpeakers: "",
            selectedTags:"",
        };
    }

    render() {
        return (
            <Layout {...this.props}>
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
                        <div className={styles.add_language_cont}>
                            <Link href="/record">
                                <a> Upload Recording</a>
                            </Link>
                        </div>
                            <section className={styles.results}>
                                <h1>Explore Recordings</h1>

                                {this.props.recordings.map((record) => (
                                    <div className={styles.language_container}>
                                        <h3>{record.title}</h3>
                                        <div>
                                            <p>Subject: {record.subject}</p>
                                            <p>file: {record.media}</p>
                                        </div>
                                    </div>

                                ))}
                            </section>
                    </main>
                </div>
            </Layout>
        )
    }
}






export async function getStaticProps() {
    // Call an external API endpoint to get languages
    const res = await fetch("https://lorelad-backend.herokuapp.com/records");
    const recordings = await res.json();
    // Pass languages to the page via props
    return {
        props: {
            recordings: recordings,
        },
    };
}

export default Recordings;