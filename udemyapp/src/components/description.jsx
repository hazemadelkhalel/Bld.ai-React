import React, { Component } from 'react';
import './static/style/index.css';


class Description extends Component {
    
    render() { 
        return (
            <div className='text3s1'>
                <h1>Expand your career opportunities with Python</h1>
                <p> Take one of Udemy's range of Python courses and learn how to code using this incredibly useful languqages. its
                    simple syntax and readability makes Python perfect for Flask, Django, data science, ans machine learning. You'll
                    learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ...
                </p>
                <button className="explore">Explore Python</button>
            </div>
         );
    }
}
 
export default Description;