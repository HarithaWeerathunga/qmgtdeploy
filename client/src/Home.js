import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

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
                                        <NavDropdown.Item href={`/${video.id}`} >{video.name}</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                    </div>
                                    )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container>
                    <h1>VideoID 1:</h1>
                </Container>

            

                <div>
                
                <video controls muted autoPlay>
                    <source src={`api/video/1`}type="video/mp4"></source>
                </video>
                </div>
            </div>
        )
    }
}