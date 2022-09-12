import React, { Component } from 'react';
import './static/style/index.css';


class Nav extends Component {
    
    render() { 
        return (
            <div className='nav-container'>
                <img className='toggle' src ="/static/images/toggle.png"></img> 
                <img className="icon" src="/static/images/Udemy_logo.png"></img>
                <button className="nav-text">Categories</button>
                <form className="searchbar">        
                    <button type="submit" id="search-btn" className="search-icon"></button>
                    <input  id = "searchbar" type="text" title="Search" placeholder="Search for anything" ></input>
                    <div id="myDropdown" className="dropdown-content"> </div>
                </form>
                <button className="nav-text">Udemy Business</button>
                <button className="nav-text">Teach on Udemy</button>
                <button className = "shopicon"> </button>
                <button className = "login-button"> Login </button>
                <button className = "signup-button"> Sign up </button>
                <div className = "language"> <img  src="/static/images/lang.png"></img></div>
            </div>
         );
    }
}
 
export default Nav;