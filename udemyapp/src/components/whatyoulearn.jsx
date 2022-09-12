import React, { Component } from 'react';
import './static/style/index.css';


class WhatyouLearn extends Component {
    
    render() { 
        return (
            <div className="whatyoulearn">
                <h2>What you'll learn</h2>
                <ul className='ul-whatyoulearn'>
                    <li>Create your own Python Programs</li>
                    <li>Becaome an experienced Python Programmer</li>
                </ul>
                <ul className='ul-whatyoulearn'>
                    <li>Parse the Web and Create their own Games</li>
                </ul>
            </div>
         );
    }
}
 
export default WhatyouLearn;