import React, { Component } from 'react';
import './static/style/index.css';


class CourseDescription extends Component {
    
    render() { 
        return (
            <div className='CourseDescription'>
                <h1>Description</h1>
                <p className='CourseDescription-details'>
                Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?

If you’re looking to learn Python for the very first time or need a quick brush-up, this is the course for you!

Python has rapidly become one of the most popular programming languages around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes over $100,000 - this number is only going to grow in the coming years.

The best part? Python is one of the easiest coding languages to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an absolute pro at programming!
                </p>
            </div>
         );
    }
}
 
export default CourseDescription;