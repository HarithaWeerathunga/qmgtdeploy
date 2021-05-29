import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Home extends Component{


    constructor(){
        super();
        this.state = {
            videos:[]
        }
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
                <Navbar bg="primary" variant="dark" expand="x1">
                    <Navbar.Brand>Queue Analytics</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Select Videos" id="basic-nav-dropdown">
                                {this.state.videos.map(video => 
                                    <div className="col-md-8" key={video.id}>
                                        <NavDropdown.Item>{video.name}</NavDropdown.Item>
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