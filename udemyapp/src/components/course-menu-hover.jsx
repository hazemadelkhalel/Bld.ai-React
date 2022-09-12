import React from 'react';
import './static/style/index.css';
const CourseMenuHover = (props) => {
    return (
        <div className='info-container'>
            <div className='course-title-hover'>Learn Python: The Complete Python Programming Course</div>
            <div className='update-date'>
                <span style={{fontWeight:"500"}}>Updated </span>
                <span style={{fontWeight:"700"}}>November 2018</span>
            </div>
            <div className='duration-and-level-container'>
            <span className='total-hours'>1.5 total hours · </span>
            <span className='course-level'>Beginner Level · </span>
            <span className='subtitles'>Subtitles</span>
            </div>
            <div className='short-description'>
                <p>Python introduction for beginners. Learn complete Python from scratch!</p>
            </div>
            <ul className='course-benefits'>
                <li>
                    <span className="check-icon"><i className='fa-solid fa-check '></i></span>
                    <span>Creat fully functional Python programs</span>
                </li>
                <li>
                    <span className="check-icon"><i className='fa-solid fa-check '></i></span>
                    <span>Understand user input</span>
                </li>
                <li>
                <span className="check-icon"><i className='fa-solid fa-check '></i></span>
                    <span>Learn about loop structures and conditionals</span>
                </li>
            </ul>
            <div className='add-btn-and-wish-container'>
                <button className='add-btn'>
                    Add to cart
                </button>
                <button className='add-to-wishlist-btn'>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
        </div>
    );
}

export default CourseMenuHover;
