import React, { Component } from 'react';
import './App.css';
import qs from 'qs';
import { Spinner } from 'reactstrap';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true
        };

    }

    componentDidMount = () => {
        var oauth_verifier = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).oauth_verifier;
        var oauth_token = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).oauth_token;
        if(oauth_verifier != undefined && oauth_token != undefined){
        fetch("https://vouch-api-1.herokuapp.com/auth_verify/" + oauth_token + "/" + oauth_verifier)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.error){
                        alert("internal server error")
                    }else{
                        this.props.history.push({
                            pathname: '/home',
                            state: { detail: result.tweets }
                        })
                    }
                    this.setState({isLoading:false})
                },
                (error) => {
                    console.log("error", error)
                    this.setState({isLoading:false})
                }
            )
        }else{
            this.setState({isLoading:false})
            this.props.history.push({pathname: '/main'})
        }
    }

    render() {
        return ( 
            <div>
            {(this.state.isLoading)&&(
                <div className = "background" >
                <div>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
      </div>
            </div>)}
            </div>
         );
        }
    }

    export default Loading;