import React, { Component } from 'react';
import Description from './description';
import Courses from './courses';
import './static/style/index.css';

function CoursesBox (props) {
    console.log(props.courses + "pag1");
    return (
        <div className='text3'>
            <div className='customize3'>
                <Description/>
                <Courses courses = {props.courses}/>
            </div>
        </div>
    );
    
}
 
export default CoursesBox;