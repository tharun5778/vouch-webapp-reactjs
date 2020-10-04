import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import './main.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
            redirect_link: '',
        };
        this.getTwitterToken.bind(this);
    }
    componentDidMount = () => {
        this.getTwitterToken()
    }
    getTwitterToken = () => {
        fetch("https://vouch-api-1.herokuapp.com/auth")
            .then(response => response.json())
            .then(result => {
                if (!result.error) {
                    this.setState({ auth: result, redirect_link: "https://api.twitter.com/oauth/authenticate?oauth_token=" + result["oauth_token"] + "&force_login=true" })
                } else {
                    alert("internal server error")
                }
            })
            .catch(error => console.log('error', error));
    }

    render() {
        console.log(this.state.auth);
        return ( < div className = "background" >
            <
            div >
            <
            Button style = {
                { height: 50, width: 200, paddingTop: 10 }
            }
            href = { this.state.redirect_link } > Login with Twitter < /Button>                 < /
            div >

            <
            /div>)
        }
    }

    export default Login;