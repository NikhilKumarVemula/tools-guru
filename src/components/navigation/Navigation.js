import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
               <Navbar.Brand href="/">
                 <img
                   alt=""
                   src="/logo.svg"
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                 />{' '}
                 Tools Guru
               </Navbar.Brand>
                <Nav>
                    <NavLink className="d-inline p-2 text-white" to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 text-white" to="/order">Order</NavLink>
                    <NavLink className="d-inline p-2 text-white" to="/account">Account</NavLink>
                    <NavLink className="d-inline p-2 text-white" to="/contactUs">Contact Us</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}