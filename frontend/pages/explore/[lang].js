//this is a page that uses dynamic routing. pages with "[" and end with "]" us dynamic routing
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Explore.module.css";
import Layout from "../../components/Layout";
import { useRouter } from 'next/router'


export default function Language(props) {
    const router = useRouter()
    const { lang } = router.query

    return (
        <Layout title="Explore">
            <div>
                <Head>
                    <title>Explore</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
                    />
                </Head>

                <p>Language: {lang}</p>
                <section className={styles.results}>
                    {props.records.map((record) => (
                        <div>
                                <p>{record.media}</p>
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    );
}

//use getServerSideProps instead of getStaticProps since this is a dynamic page
export async function getServerSideProps() {
    // This is a real endpoint
    const res = await fetch("https://lorelad-backend.herokuapp.com/records")
    const records = await res.json()

    return {
        props: {
            records,
        },
    };
}