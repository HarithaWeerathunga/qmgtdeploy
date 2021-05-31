import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container, Row,Col,Card,CardBody, Button} from 'reactstrap';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export default class HomeTest extends Component{


    constructor(){
        super();
        this.state = {
          videos:[]
        };

    }

    async componentDidMount(){
        try{
            const response = await fetch('api/videos');
            const data = await response.json();
            this.setState({videos : [...data]});
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

   
    render(){
        return(
            <div className="App App-header">
                <Navbar bg="primary" variant="dark" expand="lg">
                    <DiIcons.DiGoogleAnalytics color="white"/>
                    <Navbar.Brand>Queue Analytics</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Select Videos" id="basic-nav-dropdown">
                                {this.state.videos.map(video => 
                                    <div className="col-md-8" key={video.id}>
                                        <NavDropdown.Item href={`/${video.id}`}> {video.name} </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                    </div>
                                    )}
                                        
                                       
                                   
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        )
    }
}