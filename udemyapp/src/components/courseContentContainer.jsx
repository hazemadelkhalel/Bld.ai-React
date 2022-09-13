import React from 'react';
import './static/style/index.css';
import Chapter from './chapter';
const CourseContentContainer = () => {
    return (
        <div>
            <div className='content-headline'>Course content</div>
            <div className='info-and-expand-btn'>
                <span className='content-info'>9 sections • 88 lectures • 11h 31m total length</span>
                <button className='expand-btn'>Expand all sections</button>
            </div>
            <div className='chapter-containers'>
                <Chapter id = {1}/>
                <Chapter id = {2}/>
                <Chapter id = {3}/>
                <Chapter id = {4}/>
                <Chapter id = {5}/>
                <Chapter id = {6}/>
            </div>
        </div>
    );
}

export default CourseContentContainer;
