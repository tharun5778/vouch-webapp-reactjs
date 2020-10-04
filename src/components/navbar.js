import React, {Component} from 'react';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';



class Header extends Component{
    render(){
        return(<div>
            <div>
            <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">VOUCH</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/main">
                                        <Button >
                                            <span className="fa fa-sign-in fa-lg"></span>Logout
                                        </Button>
                                    </Link>    
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </div>
            
        </div>);
    }
}

export default Header;