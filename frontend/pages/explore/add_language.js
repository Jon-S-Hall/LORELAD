import Link from "next/link";
import Head from "next/head";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../styles/Add_Language.module.css";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import axios from 'axios'

//class to support the addition of langauges by users.
class Add_language extends React.Component {
    //state of form entry

    constructor(props) {
        super(props);
        this.logged_in = props.logged_in;
        this.state = {
            name:"",
            family:"",
            continent:"af",
            num_speakers: null,
            num_recordings:0,
            summary:"",
        };
    }


    handle_submit = (e, data) => {
        e.preventDefault();
        if(this.logged_in == false)
        {
            alert("You must be logged in to add a language.");
        }else {
            fetch('https://lorelad-backend.herokuapp.com/languages/', {
                method: 'POST',
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then((res) => {
                    if (res.ok) {
                        console.log("here");
                        return res.json();
                    } else {
                        console.log("here");
                        throw new Error('something went wrong');
                    }
                }).then((resJson) => {
                console.log(resJson);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    handle_change = e => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <Layout title="Add Language" logged_in={this.props.logged_in} handle_logout = {this.props.handle_logout}>
                <main className={styles.main}>
                    <h1>Add Language to LORELAD</h1>
                    <div> We're sorry if you're language is currently not featured on LORELAD! We'd love if you could introduce us though! Please tell us all about it.</div>
                    <form onSubmit={this.handle_submit}>
                        <div>
                            <div>
                                <h4>What's the languages name?</h4>
                                <h3>If there's no english spelling or you're unsure, just sound it out! </h3>
                                <input type="text" onChange={this.handle_change} value={this.state.name} id="name" placeholder="Language Name"  required/>
                            </div>

                            <div>
                                <h4>Number of speakers (estimate)</h4>
                                <input type="text" id="num_speakers" value={this.state.num_speakers} placeholder="How many people speak language?" onChange={this.handle_change}/>
                            </div>
                        </div>
                            <div>
                                <h4>Tell us something about the language!</h4>
                                <textarea type="text" id="summary" value={this.state.summary} placeholder="Talk about your language!" onChange={this.handle_change}/>
                            </div>

                        <div>
                            <div>What is the country of origin?</div>
                            <select id="continent" onChange={this.handle_change} value={this.state.continent} required>
                                <option onChange={this.handle_change} value="AF">Africa</option>
                                <option onChange={this.handle_change} value="AS">Asia</option>
                                <option onChange={this.handle_change} value="AU">Australia</option>
                                <option onChange={this.handle_change} value="EU">Europe</option>
                                <option onChange={this.handle_change} value="NA">North America</option>
                                <option onChange={this.handle_change} value="SA">South America</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="terms">
                                <input id="terms" type="checkbox"/>
                                I agree to the terms and privacy policy.
                            </label>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </main>
            </Layout>
        );
    };
}


export default Add_language;