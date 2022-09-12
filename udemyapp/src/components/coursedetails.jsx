import React, { Component } from 'react';
import './static/style/index.css';


class CourseDetails extends Component {
    
    render() { 
        return (
            <div className='detail'>
                    <img className= 'coursedetail' src= "/static/images/python1.png" ></img>
                    <h4 className='preview'>Preview this course</h4>
                    <div className='op'></div>
                    <img className='playicon' src='/static/images/playicon3.png'></img>
                    <div className='info'>
                        <h3>E£149.99</h3>
                        <button className='btnAdd' type='submit'> Add to cart</button>
                        <button className='btnBuy' type='submit'> Buy now </button>
                        <p>30-Day Money Back Guarantcc</p>
                    </div>
                    <div className='info2'>
                        <h4>This course includes:</h4>
                        <h5>14 hours on-demand video</h5>
                        <h5>1 article</h5>
                        <h5>8 downloadable resources</h5>
                        <h5>pull lifetime access</h5>
                        <h5>Access on mobile and TV</h5>
                        <h5>Certificate of completion</h5>
                    </div>
                    <div className="line"></div>
                    <div className='under-line'>
                        <h3>Trainging 5 or more people? </h3>
                        <h4>Get your team access to 17,000+ top Udemy courses anytime, anywhere </h4>
                        <button className='btnTry' type='submit'> Try Udemy Business </button>
                    </div>
            </div>
         );
    }
}
 
export default CourseDetails;