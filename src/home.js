import React, { Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

import img from './img.png'
import img2 from './img2.png'

class home extends Component {
  render() {
    return (
      <div>

        <div>ben macintosh selected</div>
        <p/>
        <a href="https://benmacintosh.github.io/freereview/6.html" style={{color:'blue'}}>freereview</a><div></div>

        
        <Link to="/aac">AAC</Link>
        <div></div>


        <a href="https://benmacintosh.github.io/meetingPointOfShortestTravel/" style={{color:'blue'}}>https://benmacintosh.github.io/meetingPointOfShortestTravel/</a><div></div>
        <a href="https://benmacintosh.github.io/walkForTime/" style={{color:'blue'}}>https://benmacintosh.github.io/walkForTime/</a><div></div>

        <div>new precedence</div>
        <div>new</div>
        <a href="https://google.com" style={{color:'blue'}}>google</a>
        <div></div>
        <a href="https://drive.google.com/open?id=1UMUVF1wjC0I4xV33OJNL4nfvhX3BCBVF" style={{color:'blue'}}>New folder</a>
        <p/>
        
        <div></div>
        <img src={img} alt="" width="88"/>


      </div>
    );
  }
}

export default home;
