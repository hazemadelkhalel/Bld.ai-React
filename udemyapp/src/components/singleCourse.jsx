import React, { Component } from 'react';
import './static/style/index.css';
import Instructors from './instructors';
import Reviews from './review';
import CourseDetails from './coursedetails';
import DescriptionCourseDetails from './DescriptionCourseDetails';
import WhatyouLearn from './whatyoulearn';
import Requirments from './Requirments';
import CourseDescription from './CourseDesciption';
import Footer from './footer'
import Nav from './Nav';
import CourseContentContainer from './courseContentContainer';
class singleCourse extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="back" >
                    <DescriptionCourseDetails/>
                    <CourseDetails/>
                </div>
                <WhatyouLearn/>
                <Requirments/>
                <div className='main-content'>
                    <div className='sub-content'>
                        <CourseContentContainer/>
                    </div>
                </div>
                <CourseDescription/>
                <Instructors/>
                <Reviews/>
                <Footer/>
            </div>
        );
    }
}
 
export default singleCourse;