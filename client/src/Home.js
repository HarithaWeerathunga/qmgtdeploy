import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container, Row,Col,Card,CardBody, Button, CardHeader} from 'reactstrap';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';

export default class Home extends Component{


    constructor(){
        super();
        this.state = {
            videos:[],
            count: 0,
            pause: false,
            pausedAt: 0
        };

        this.handlePause = this.handlePause.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleRestart = this.handleRestart.bind(this);


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

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.pause){
            return false;
        }
        return true;
    }

    handlePause(){
        this.refs.videoRef.pause();
        this.setState({pause: true, pausedAt: this.state.count})
    }

    handlePlay(){
        this.refs.videoRef.play();
        this.setState({pause:false, count:this.state.pausedAt})
    }

    handleRestart(){
        this.refs.videoRef.pause();
        this.refs.videoRef.currentTime = 0;
        this.refs.videoRef.play();
        this.setState({pause: false, count: 0})
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
                            {/* <NavDropdown title="Select Videos" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/0">Video 1</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/1">Video 2</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/2">Video 3</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                   
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col>

                                <FcIcons.FcVideoCall/> Video 1
                                <div className="videoplay">
                                    <video ref="videoRef" controls muted autoPlay>
                                    <source src={`api/video/1`}type="video/mp4"></source>
                                    </video>
                                </div>

                        </Col>

                        <Col>
                                <Container class="card-container">    
                                                  
                                    <FcIcons.FcComboChart/> Analytics 
                                    <Row>
                                        <Card>
                                            <CardHeader> <FcIcons.FcConferenceCall/> Queue Length</CardHeader>
                                            <CardBody>{this.state.videos.map(video => <h4>{video.qlength}</h4>)} </CardBody>
                                        </Card>
                                        
                                    </Row>
                                    <Row>
                                        <Card>
                                            <CardHeader> <FcIcons.FcAlarmClock/> Average Waiting Time</CardHeader>
                                            <CardBody>{this.state.videos.map(video => <h4>{video.averageWaitingTime}</h4>)}  </CardBody>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            
                                            <CardHeader><FcIcons.FcBusinessman/> Cashier Availability</CardHeader>
                                            <CardBody>{this.state.videos.map(video => <h4>{video.cashierAvailability}</h4>)} </CardBody>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            <CardHeader> <FcIcons.FcClapperboard/> Playback Time</CardHeader>
                                            <CardBody> {this.state.count} </CardBody>
                                        </Card>
                                    </Row>

                                    <Row > 
                                       <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePause} variant="primary"> <FaIcons.FaPause/> Pause </Button>
                                       <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePlay} variant="primary"><AiIcons.AiFillPlayCircle/> Play</Button>
                                       <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handleRestart} variant="primary"><IoIcons.IoMdRefreshCircle/> Restart</Button>
                                    </Row>
                                </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}