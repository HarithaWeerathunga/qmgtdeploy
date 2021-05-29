import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col , Card, Button, CardBody} from 'reactstrap';
import {Navbar , Nav, Form, NavDropdown, FormControl} from 'react-bootstrap';



export default class Player extends Component {


    constructor(props){
        super(props);

        this.state = {
            videoId: this.props.match.params.id
        }
    }

    render(){
        return(
            <div>
                <h1>VideoID : {this.state.videoId}</h1>
                <video controls muted autoPlay>
                    <source src={`api/video/${this.state.videoId}`}type="video/mp4"></source>
                </video>
            </div>
        )
    }
}