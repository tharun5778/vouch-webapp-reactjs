import React, { Component } from 'react';
import Home from './home';
import Main from './main';
import Loading from './loading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return ( < div >
            <
            Router >
            <
            div className = "App" >
            <
            Route path = "/main"
            component = { Main }
            /> <
            Route path = "/loading"
            component = { Loading }
            /> <
            Route path = "/home"
            component = { Home }
            /> < /
            div > <
            /Router> < /
            div > );
    }
}

export default Routes;