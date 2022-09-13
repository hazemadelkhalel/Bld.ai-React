import React, { Component } from 'react';
import CoursesBox from './CoursesBox';
import Alarm from './alarm';
import Nav from './Nav';
import Footer from './footer';
import FetchData from './FetchData';
const CreatePage1 = () => {
    return ( 
        <React.Fragment>
            <FetchData filter = {"python"}/>
            <Nav/>
            <Alarm/> 
            <CoursesBox/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default CreatePage1;