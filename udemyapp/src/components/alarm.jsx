import React, { Component } from 'react';
import './static/style/index.css';


class Alarm extends Component {
    
    render() { 
        return (
            <section className="alarm-container">
                <img className='alarm' src="/static/images/alarm.png"></img>
                <div className="textalarm1" >
                    <h1> New to Udemy? Lucky you.</h1>
                    <p>Courses start at E€169.99. Get your new-student offer before it expires.</p>
                </div>
            </section>
         );
    }
}
 
export default Alarm;