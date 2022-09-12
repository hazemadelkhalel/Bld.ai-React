import React, { Component } from 'react';
import Description from './description';
import Courses from './courses';
import './static/style/index.css';

class CoursesBox extends Component {
    render() { 
        return (
            <div className='text3'>
                <div className='customize3'>
                    <Description/>
                    <Courses/>
                </div>
            </div>
        );
    }
}
 
export default CoursesBox;