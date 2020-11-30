import '../styles/globals.css'
import React, { Component } from 'react';
import Layout from '../components/Layout'
import App from 'next/app';
import Router from 'next/router';


//This is the js file that runs when
export default class MyApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged_in: false,
      username: ''
    };
  }


  componentDidMount() {
    this.state.logged_in = localStorage.getItem('token') ? true : false
    if (this.state.logged_in) {
      fetch('https://lorelad-backend.herokuapp.com/check_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
          .then(res => res.json())
          .then(json => {
            this.setState({ username: json.username });
            console.log("logged in!")
          });
    }
  }

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
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('https://lorelad-backend.herokuapp.com/users/', {
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
            username: json.username
          });
        });
  };


  handle_logout = () => {
    console.log("logged out properly")
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });

  };


  render() {
    const { Component, pageProps } = this.props;

    return (
        <div className="App">
          <Component
              {...pageProps}
              logged_in={this.state.logged_in}
              handle_logout={this.handle_logout}
              handle_login={this.handle_login}
           />
        </div>
    );
  }
}
