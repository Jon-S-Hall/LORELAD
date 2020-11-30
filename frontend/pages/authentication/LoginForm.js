import React from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import Layout from "../../components/Layout"; //import common layout styles. notice that we're importing a JS class
import styles from "../../styles/authentication.module.css";
import Link from "next/link";

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
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

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('https://lorelad-backend.herokuapp.com/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.user.username
                });
            });
        document.getElementById("status").innerHTML = this.props.logged_in
    };

    handle_submit = e => {
        e.preventDefault()
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
            this.props.handle_login(e, this.state)
        }
    };

    render() {
        return (
            <Layout title="Login" logged_in={this.props.logged_in} handle_logout = {this.props.handle_logout}>
                <Head>
                    <title>Log In</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=MuseoModerno:wght@400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <main className={styles.main}>
                    <h1>Log In</h1>
                    <p> Don't have an account? <Link href="/authentication/SignupForm" > Create One </Link></p>
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

export default LoginForm;

LoginForm.propTypes = {
    handle_login: PropTypes.func.isRequired
};