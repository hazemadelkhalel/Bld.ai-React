import React, { Component } from 'react';
import './static/style/index.css';
import Starsgenerator from './starsgenerator';

class DescriptionCourseDetails extends Component {

    render() { 
        return (
            <div className='descripe'>
                <h1>Learn Python: The Complete Python Programming Course</h1>
                <p>Learn A-Z everything about Python, from the basics to advanced topics like
                    Python GUI, Python Data Analysis, and Morel
                </p>
                <div>
                    <Starsgenerator stars = {3.7}/>
                    <a href='' style={{marginRight: "5px"}}>3,116 ratings</a>
                    <a>18,867 students</a>
                    <p>Created by Avinash Jein, The Codes</p>
                </div>
             </div>
         );
    }
}
 
export default DescriptionCourseDetails;