import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Container, Row,Col,Card,CardBody, Button, CardHeader} from 'reactstrap';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as IoIcons from 'react-icons/io';
import logo from './logo.png';
import Parent from './Parent';



export default class Player extends Component {


    constructor(props){
        super(props);

        this.state = {
            videoId: this.props.match.params.id,
            videos:[],
            count: 0,
            pause: false,
            pausedAt: 0
        }

        this.handlePause = this.handlePause.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleRestart = this.handleRestart.bind(this);

    }

    async componentDidMount(){
        try{
            setInterval(async() => {
                const response = await fetch('api/videodata/'+this.state.videoId+'/'+ this.state.count );
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
            <div className="divmain" style={{backgroundColor: 'black'}}>

                <Navbar bg="primary" variant="dark" expand="lg">
                    {/* <DiIcons.DiGoogleAnalytics color="white"/> */}
                    
                  
                    <img  src={logo} style={{width: 130,height:50}}/>
                    
                    <Navbar.Brand> &nbsp;&nbsp;   Queue Analytics</Navbar.Brand>
                    

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <NavDropdown title="Select Videos" id="basic-nav-dropdown">
                                        <NavDropdown.Item> <Link to="/0" >Video 1</Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/1" >Video 2 </Link> </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item> <Link to="/2" >Video 3 </Link></NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                   
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row  style={{'marginRight' : 0}}>
                    <Col  xs={8} md={8}>
                    
                    
                    <h3> <FcIcons.FcVideoCall/> Camera ID : {this.state.videoId}</h3>
                    <video ref="videoRef"  muted autoPlay>
                        <source src={`api/video/${this.state.videoId}`}type="video/mp4"></source>
                    </video>
                   <div style={{'alignItems':'center'}}>
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                                    <Button className="pausebutton" style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePause} variant="primary"> <FaIcons.FaPause/> Pause </Button>
                                    <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePlay} variant="primary"><AiIcons.AiFillPlayCircle/> Play</Button>
                                    <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handleRestart} variant="primary"><IoIcons.IoMdRefreshCircle/> Restart</Button>
                        
                                       
                    </div>
                    </Col>
                    <Col  xs={4} md={4}>

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
              
                                                  {/* <Row > 
                                                     <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePause} variant="primary"> <FaIcons.FaPause/> Pause </Button>
                                                     <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handlePlay} variant="primary"><AiIcons.AiFillPlayCircle/> Play</Button>
                                                     <Button style={{'color': 'white', backgroundColor: 'initial'}}  active size="lg" onClick={this.handleRestart} variant="primary"><IoIcons.IoMdRefreshCircle/> Restart</Button>
                                                  </Row> */}
                                </Container>
                                                  



                    </Col>
                </Row>
                
            </div>
            
        )
    }
}