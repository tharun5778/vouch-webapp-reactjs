import React, { Component } from 'react';
import Home from './Home';
import Main from './main';
import Loading from './loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return ( 
        <div>
            <Router >
            <div className = "App" >
            <Route path = {["/","/loading"]} component = { Loading }/> 
            <Route path = "/main"component = { Main }/> 
            <Route path = "/home"component = { Home }/> 
            </div > 
            </Router> 
            </div >
             );
    }
}

export default Routes;