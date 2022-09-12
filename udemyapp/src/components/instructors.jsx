import React, { Component } from 'react';
import './static/style/index.css';
import Instructordetalis from './instructordetalis';


class instructors extends Component {
    
    render() { 
        return (
            <div className='instructor'>  
                <h1 className='instructorBanner'>Instructors</h1>             
                <Instructordetalis/>
                <Instructordetalis/>
                
            </div>
         );
    }
}
 
export default instructors;