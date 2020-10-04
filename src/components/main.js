import React, { Component } from 'react';
import './App.css';
import { Button,Spinner } from 'reactstrap';
import './main.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
            redirect_link: '',
            isLoading:true
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
                    this.setState({ isLoading:false,auth: result, redirect_link: "https://api.twitter.com/oauth/authenticate?oauth_token=" + result["oauth_token"] + "&force_login=true" })
                } else {
                    this.setState({isLoading:false})
                    alert("internal server error")
                }
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return ( 
        <div className = "background" >
            {(!this.state.isLoading)&&( <div >
             <Button style = {{ height: 50, width: 200, paddingTop: 10 }}href = { this.state.redirect_link } > Login with Twitter </Button> 
             </div>)}
            {(this.state.isLoading)&&(
                 <div >
                <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
             </div>
             )}
             </div>
        )
    }
}

export default Login;