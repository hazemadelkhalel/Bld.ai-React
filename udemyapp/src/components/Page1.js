import React, { Component } from 'react';
import CoursesBox from './CoursesBox';
import Alarm from './alarm';
import Nav from './Nav';
import Footer from './footer';

const CreatePage1 = () => {
    return ( 
        <React.Fragment>
            <Nav/>
            <Alarm/> 
            <CoursesBox/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default CreatePage1;