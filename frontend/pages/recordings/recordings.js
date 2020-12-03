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