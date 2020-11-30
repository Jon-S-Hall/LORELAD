import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import styles from "../../styles/authentication.module.css";
import Link from "next/link";


class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
    };
    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    handle_submit = e => {
        if(this.state.password.length < 5)
        {
            document.getElementById("status").innerHTML = "Passwords must be longer.";
            e.preventDefault();
        }
        else if(this.state.username.length < 5)
        {
            document.getElementById("status").innerHTML = "Username must be longer.";
            e.preventDefault();
        }else{
            this.props.handle_signup(e, this.state)
        }
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(res)
                });
    };


    render() {
        return (
            <Layout title="Sign-up">
                    <Head>
                        <title>About</title>
                        <link rel="icon" href="/favicon.ico" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
                            rel="stylesheet"
                        />
                    </Head>
                <main className={styles.main}>
                    <h1>Sign Up</h1>
                    <p> Already have an account? <Link href="/authentication/LoginForm" > Sign In </Link></p>
                    <div className={styles.container}>
                        <form onSubmit={ this.handle_submit}>
                            <h4> Username </h4>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handle_change}
                            />
                            <h4>Password </h4>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handle_change}
                            />
                            <h4 id = "status"> </h4>
                            <input type="submit" />
                        </form>
                    </div>
                </main>
            </Layout>
        );
    }
}

export default SignupForm;

SignupForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
};