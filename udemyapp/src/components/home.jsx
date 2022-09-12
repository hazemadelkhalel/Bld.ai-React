import React, { Component } from 'react';
import CoursesBox from './CoursesBox';
import Nav from './Nav';
import SingleCourse from './singleCourse';
import './static/style/index.css';
import Alarm from './alarm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './footer';

class Home extends Component {
    render() { 
        return (
            <div>
                <Nav/>
                {/* <SingleCourse/>  */}
                <Alarm/> 
                <CoursesBox/>
                <Footer/>
            </div>
        );
    }
}
 
export default Home;