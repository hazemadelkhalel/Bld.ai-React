import React, { Component } from 'react';
import './static/style/index.css';


class instructordetails extends Component {
    
    render() { 
        return (
            <React.Fragment>
                    <h3 className='person'>Avinash Jain</h3>
                    <h3 className='personDetail'>CEO of TheCodex.me - Teaching 500,000+Students how to code</h3>
                    <span className='instrutorDetails'>
                        <div>
                        <img className= 'personimg' src= "/static/images/instructor.png" ></img>
                        </div>
                        <div className='PersonInfo'>
                            <h3>4.4 instructor Rating</h3>
                            <h3>73,662 Reviews</h3>
                            <h3>888, 998 Students</h3>
                            <h3>16 Courses</h3>
                        </div>
                    </span>
                    <p className='persontyping'>Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.
His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.
Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.
Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help. 
                            </p>
                </React.Fragment>
         );
    }
}
 
export default instructordetails;