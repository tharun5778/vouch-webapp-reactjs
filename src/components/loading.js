import React, { Component } from 'react';
import './App.css';
import qs from 'qs';



class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };

    }

    componentDidMount = () => {
        var oauth_verifier = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).oauth_verifier;
        var oauth_token = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).oauth_token;
        var req_body = { oauth_verifier: oauth_verifier, oauth_token: oauth_token };
        console.log(req_body);
        fetch("https://vouch-api-1.herokuapp.com/auth_verify/" + oauth_token + "/" + oauth_verifier)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("RESULT", JSON.stringify(result))
                    this.props.history.push({
                        pathname: '/home',
                        state: { detail: result.tweets }
                    })
                },
                (error) => {
                    console.log("error", error)
                }
            )
    }

    render() {
        return ( < div >
            <
            h1 > Loading... < /h1> <
            /div>);
        }
    }

    export default Loading;