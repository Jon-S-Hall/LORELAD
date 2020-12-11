import Link from "next/link";
import Head from "next/head";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Upload_Recording.module.css";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import axios from "axios";
import { server } from "../../config";

class Upload_Recording extends React.Component {
  //state of form entry

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subject: "",
      language: 0,
      //date_recorded:null,
      file: null,
      source: "LORELAD input",
    };
  }

  handle_submit = (e, data) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("subject", this.state.subject);
    formData.append("language", parseInt(this.state.language, 10));
    formData.append("media", this.state.file, this.state.file.name);
    formData.append("source", this.state.source);
    this.state.language = parseInt(this.state.language, 10);
    console.log(formData);
    if (this.props.user_state.logged_in == false) {
      alert("You must be logged in to upload a recording.");
    } else {
      fetch(`${server}/records/`, {
        method: "POST",
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            console.log("here");
            return res.json();
          } else {
            console.log("here");
            throw new Error("something went wrong");
          }
        })
        .then((resJson) => {
          console.log(resJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handle_change = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_file_change = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    return (
      <Layout
        title="Upload Record"
        logged_in={this.props.logged_in}
        handle_logout={this.props.handle_logout}
        user_state={this.props.user_state}
      >
        <main className={styles.main}>
          <h1>Upload a Recording</h1>
          <form onSubmit={this.handle_submit}>
            <label for="file">Please select file to upload*</label>
            <input
              type="file"
              id="file"
              value={this.state.media}
              onChange={this.handle_file_change}
              required
            />
            <label for="title">Give a title for your upload!*</label>
            <input
              type="text"
              id="title"
              value={this.state.title}
              placeholder="title"
              onChange={this.handle_change}
              required
            />
            <label for="language">What language is your recording in?</label>
            <select
              id="language"
              onChange={this.handle_change}
              value={this.state.language}
              required
            >
              {this.props.langs.map((lang) => (
                <option value={lang.id} onChange={this.handle_change}>
                  {lang.name}
                </option>
              ))}
            </select>
            <label for="subject">What is your upload about?</label>
            <input
              type="text"
              id="subject"
              value={this.state.subject}
              placeholder="subject"
              onChange={this.handle_change}
            />

            <button type="submit">Upload</button>
          </form>
        </main>
      </Layout>
    );
  }
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get languages
  //   const res = await fetch(`${server}/languages`);
  //const res = await fetch("http://127.0.0.1:8000/languages");
  const res = await fetch("http://lorelad-backend.herokuapp.com/languages");
  const langs = await res.json();
  console.log(langs);
  return { props: { langs } };
}

export default Upload_Recording;
