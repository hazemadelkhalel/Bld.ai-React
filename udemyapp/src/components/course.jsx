import React, { Component } from 'react';
import './static/style/index.css';
import Starsgenerator from './starsgenerator';
import CourseMenuHover from './course-menu-hover'
import { useNavigate } from "react-router-dom";
function Course (props) {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/course`; 
        navigate(path);
    }
    return (
        <div className='cardd' onClick={routeChange}>
            <div className='haha'>
                <div className='text3s2'>
                    <img className='haha2' key={props.course.id} src={props.course.image}></img>
                    <div className='caption'>
                        <h4>{props.course.title}</h4>
                        <p>{props.course.author}</p>
                        <div>
                            <Starsgenerator stars = {props.course.rating.score.toFixed(1)}/>
                        </div>
                        <h5>{props.course.price}</h5>
                    </div>
                </div>
            </div>
            <div className='course-pop-up'>
                <CourseMenuHover/>
            </div>
        </div>
    );
    
}
 
export default Course;