import React, { Component } from 'react';
import './static/style/index.css';
import Starsgenerator from './starsgenerator';

class Reviewdetails extends Component {
    render() { 
        return (
            <div className='Reviewdetails'>
                <span className='reviewspan'>
                    <div>
                    <img className= 'reviewimg' src= "/static/images/review.PNG" ></img>
                    </div>
                    <div className='ReviewInfo'>
                        <h3 className='review'>Asif H.</h3>
                        <div className='review2'>
                            <Starsgenerator stars = {3.7}/>
                        </div>
                        <h3 className='reviewDetail1'>Sometimes confusing but able to clarify. Good job nonetheless.</h3>
                        <h4 className='reviewDetail2'>Was this review helpful?</h4>
                        <div className='reviewspan'>
                            <img className= 'reviewicon' src= "/static/images/like.png" ></img>
                            <img className= 'reviewicon' src= "/static/images/dislike.png" ></img>
                            <h4 className='report'>Report</h4>
                        </div>
                    </div>
                </span>
            </div>
         );
    }
}
 
export default Reviewdetails;