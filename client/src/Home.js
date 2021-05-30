import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container, Row,Col,Card,CardBody, Button} from 'reactstrap';

export default class Home extends Component{


    constructor(){
        super();
        this.state = {
            videos:[],
            count: 0
        }
    }

    // async componentDidMount(){
    //     try{
    //         //const response = await fetch('api/videos');
    //         //const response = await fetch('api/blogdata');
    //         const response = await fetch('api/videodata');
    //         const data = await response.json();
    //         this.setState({videos : [...data]});
    //         console.log(data);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    async componentDidMount(){
       try{
           setInterval(async() => {
               const response = await fetch('api/videodata/1/'+ this.state.count );
               const data = await response.json();

               this.setState({
                   videos: [...data], count: this.state.count + 1
               })

           }, 1000);
       }catch(e){
           console.log(e);
       }
    }

    render(){
        return(
            <div className="App App-header">
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand>Queue Analytics</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Select Videos" id="basic-nav-dropdown">
                                        <NavDropdown.Item>1</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                   
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                                <div className="videoplay">
                                    <video controls muted autoPlay>
                                    <source src={`api/video/1`}type="video/mp4"></source>
                                    </video>
                                </div>
                        </Col>

                        <Col>
                                <Container>
                                    <h1>Analytics</h1>
                                    <Row>
                                        <Card>
                                            <CardBody><h4>Queue Length</h4> {this.state.videos.map(video => <h4>{video.qlength}</h4>)} </CardBody>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            <CardBody><h4>Cashier Present</h4> {this.state.videos.map(video => <h4>{video.cashierAvailability}</h4>)} </CardBody>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            <CardBody><h4>Avg Waiting Time</h4> {this.state.videos.map(video => <h4>{video.averageWaitingTime}</h4>)}  </CardBody>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            <CardBody><h4>VideoTime</h4> {this.state.count} </CardBody>
                                        </Card>
                                    </Row>
                                </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}