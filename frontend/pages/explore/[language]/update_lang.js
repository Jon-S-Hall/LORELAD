import Link from "next/link";
import Head from "next/head";
import React, { Component } from 'react';
import {server} from "../../../config";

class Update_Language extends React.Component {
    static async getInitialProps({query}) {
        if (query != null) {
            const res = await fetch(`${server}/languages/${query.language}`);
            const json = await res.json();
            console.log(json);
            return {
                lang: {
                    name: json.name,
                    family: "",
                    continent: json.continent,
                    num_speakers: json.num_speakers,
                    num_recordings: json.num_recordings,
                    summary: json.summary,
                },
            }
        } else {
            return {
                lang: {
                    name: "",
                    family: "",
                    continent: "",
                    num_speakers: null,
                    num_recordings: 0,
                    summary: "",
                },
            }
        }
    }
}

export default Update_Language;