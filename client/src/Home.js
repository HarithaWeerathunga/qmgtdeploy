import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Home extends Component{

    render(){
        return(
            <div className="App App-header">
                <Navbar bg="primary" variant="dark" expand="x1">
                    <Navbar.Brand>Queue Analytics</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}