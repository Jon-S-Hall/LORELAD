import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Send_Kit.module.css";
import Layout from "../../components/Layout";
import axios from "axios";
import React, { useState } from "react";

function Send_Kit(props) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    note: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        note: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: "jv" },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xoqpkqke",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your Send-a-Kit request has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Layout user_state={props.user_state} handle_logout={props.handle_logout}>
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
        </Head>
        <main className={styles.main}>
          <h1>Send a Kit</h1>
          <div classname={styles.container}>
            <h3>Ship To Information</h3>
            <form onSubmit={handleOnSubmit}>
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
              <label for="address_1">Address 1</label>
              <input
                id="address_1"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.address_1}
              />
              <label for="address_2">Address 2</label>
              <input
                id="address_2"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.address_2}
              />
              <div className={styles.row}>
                <div>
                  <label for="city">City</label>
                  <input
                    id="city"
                    type="text"
                    onChange={handleOnChange}
                    required
                    value={inputs.city}
                  />
                </div>
                <div>
                  <label for="state">State/Province</label>
                  <input
                    id="state"
                    type="text"
                    onChange={handleOnChange}
                    required
                    value={inputs.state}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div>
                  <label for="zipcode">ZIP code</label>
                  <input
                    id="zipcode"
                    type="text"
                    onChange={handleOnChange}
                    required
                    value={inputs.zipcode}
                  />
                </div>
                <div>
                  <label for="country">Country of Origin</label>
                  <input
                    id="country"
                    type="text"
                    onChange={handleOnChange}
                    required
                    value={inputs.country}
                  />
                </div>
              </div>
              <label for="note">Note</label>
              <textarea
                id="note"
                name="note"
                onChange={handleOnChange}
                required
                value={inputs.note}
              />
              <div className={styles.check}>
                <input
                  id="terms"
                  type="checkbox"
                  onChange={handleOnChange}
                  required
                  value={inputs.terms}
                />
                <label for="terms">
                  I agree to the LORELAD Terms of Service & Privacy Policy
                </label>
              </div>
              <button type="submit" disabled={status.submitting}>
                {!status.submitting
                  ? !status.submitted
                    ? "Send Kit"
                    : "Sent Request"
                  : "Submitting..."}
              </button>
            </form>
          </div>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </main>
      </div>
    </Layout>
  );
}
export default Send_Kit;
