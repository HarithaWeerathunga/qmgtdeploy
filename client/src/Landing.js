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

           
         
            <div className="divmain" style={{backgroundColor: 'white', color:'darkblue'}}>
               


                <Navbar style={{color: 'blue'}} bg="light"  expand="lg">
                    {/* <DiIcons.DiGoogleAnalytics color="white"/> */}
                    
                  
                    <img  src={logo} style={{width: 130,height:50}}/>
                    
                    
                   
                    <p>&nbsp;</p>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <NavDropdown title="Select Camera" id="basic-nav-dropdown">
                                        {/* <NavDropdown.Item href="/0">Video 1</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/1">Video 2</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/2">Video 3</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/4">Video 4</NavDropdown.Item>
                                        <NavDropdown.Divider/> */}
                                       
                                        <NavDropdown.Item> <Link to="/1" >Camera 1</Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/4" >Camera 4 </Link> </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/8" > Camera 8 </Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                   
                                      
                                        {/* <NavDropdown.Item> <Nav.Link as={Link} to="/1" >Camera 1 </Nav.Link> </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Nav.Link as={Link} to="/2" >Camera 2 </Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Nav.Link as={Link} to="/4" >Camera 4 </Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Nav.Link as={Link} to="/8" >Camera 8 </Nav.Link></NavDropdown.Item>
                                        <NavDropdown.Divider/> */}
                                        
                                   
                            </NavDropdown>
                            <p style={{fontSize: 24 , color: 'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;Queue Analytics</p>
                        </Nav>
                       
                    </Navbar.Collapse>

                   
                </Navbar>
 
                 
        
    
            </div>
        )
    }
}