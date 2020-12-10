import Link from "next/link";
import Head from "next/head";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../styles/Add_Language.module.css";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import axios from 'axios'
import { server } from '../../config';
import {useRouter} from "next/router";

//class to support the addition of langauges by users.
class Add_Language extends React.Component {
    //state of form entry

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            family:"",
            continent:"",
            num_speakers: null,
            num_recordings:0,
            summary:"",
            image:null,
        };
    }
    //this function handles when a user wants to update a language, not make a new one.


    handle_submit = (e, data) => {
        e.preventDefault();
        this.state.name = this.state.name.split(" ").join("_")
        if(this.props.user_state.logged_in == false)
        {
            alert("You must be logged in to add a language.");
        }else {
            let formData = new FormData();
            formData.append('name', this.state.name);
            formData.append('continent', this.state.continent);
            formData.append('num_speakers', this.state.num_speakers);
            formData.append('cov_image', this.state.image, this.state.image.name);
            formData.append('num_recordings', this.state.num_recordings);
            formData.append('summary', this.state.summary);
            fetch(`${server}/languages/`, {
                method: 'POST',
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                body: formData
            })
                .then((res) => {
                    if (res.ok) {
                        alert("Successfully Added Language!");
                        return res.json();
                    } else {
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

    handleImageChange = e => {
        this.setState({
            image: e.target.files[0]
            // image: event.target.files[0]
        });
    };
    render() {

        return (
            <Layout title="Add Language" logged_in={this.props.logged_in} handle_logout = {this.props.handle_logout} user_state = {this.props.user_state}>
                <main className={styles.main}>
                    <h1>Add Language to LORELAD</h1>
                    <div> We're sorry if you're language is currently not featured on LORELAD! We'd love if you could introduce us though! Please tell us all about it.</div>
                    <form onSubmit={this.handle_submit}>
                            <div>
                                <h4>What's the languages name?</h4>
                                <h3>If there's no english spelling or you're unsure, just sound it out! </h3>
                                <input type="text" onChange={this.handle_change} value={this.state.name} id="name" placeholder="Language Name"  required/>
                            </div>

                            <div>
                                <h4>Number of speakers (estimate)</h4>
                                <input type="text" id="num_speakers" value={this.state.num_speakers} placeholder="How many people speak language?" onChange={this.handle_change}/>
                            </div>
                            <div>
                                <h4>Tell us something about the language!</h4>
                                <textarea type="text" id="summary" value={this.state.summary} placeholder="Talk about your language!" onChange={this.handle_change}/>
                            </div>

                            <div>
                                <h4>Upload a cover photo for the language!</h4>
                                <input type="file" id="cov_image" accept="image/png, image/jpeg" onChange={this.handleImageChange}/>
                            </div>

                        <div>
                            <div>What is the country of origin?</div>
                            <select id="continent" onChange={this.handle_change} value={this.state.continent} required>
                                <option onChange={this.handle_change} value="Africa">Africa</option>
                                <option onChange={this.handle_change} value="Asia">Asia</option>
                                <option onChange={this.handle_change} value="Australia">Australia</option>
                                <option onChange={this.handle_change} value="Europe">Europe</option>
                                <option onChange={this.handle_change} value="North America">North America</option>
                                <option onChange={this.handle_change} value="South America">South America</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="terms">
                                <input id="terms" type="checkbox" required/>
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

export default Add_Language;