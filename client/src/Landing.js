import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container, Row,Col,Card,CardBody, Button, CardHeader} from 'reactstrap';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';
import logo from './logo.png';
import Parent from './Parent';


export default class Landing extends Component{


    render(){
        return(

           
         
            <div className="divmain" style={{backgroundColor: 'black'}}>
               


                <Navbar style={{backgroundColor:'#ddff00'}} bg="primary" variant="dark" expand="lg">
                    {/* <DiIcons.DiGoogleAnalytics color="white"/> */}
                    
                  
                    <img  src={logo} style={{width: 130,height:50}}/>
                    
                    <Navbar.Brand style={{color:'darkblue'}}> &nbsp;&nbsp;   Queue Analytics</Navbar.Brand>
                    

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown   title="Select Videos" id="basic-nav-dropdown">
                                        {/* <NavDropdown.Item href="/0">Video 1</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/1">Video 2</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/2">Video 3</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/4">Video 4</NavDropdown.Item>
                                        <NavDropdown.Divider/> */}
                                        <NavDropdown.Item> <Link to="/1" >Camera 1 </Link> </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/2" >Camera 2 </Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/4" >Camera 4 </Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/8" >Camera 8 </Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        
                                   
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
 
                 
        
    
            </div>
        )
    }
}