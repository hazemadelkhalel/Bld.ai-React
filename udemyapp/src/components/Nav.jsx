import React, { Component } from 'react';
import FetchData from './FetchData';
import CreatePage1 from './Page1';
import './static/style/index.css';

function Nav () {
    const update = ()=>{
        if(document.getElementById("searchbar").value.length === 0){
            console.log("ahah1");
            <React.Fragment>
                <FetchData filter = {"python"}/>
                <CreatePage1/>
            </React.Fragment>
        }
        else{
            console.log("ahah2");
            console.log(document.getElementById("searchbar").value);
            <React.Fragment>
                <FetchData filter = {document.getElementById("searchbar").value}/>
                <CreatePage1/>
            </React.Fragment>

        }
    }
    return (
        <div className='nav-container'>
            <img className='toggle' src ="/static/images/toggle.png"></img> 
            <img className="icon" src="/static/images/Udemy_logo.png"></img>
            <button className="nav-text">Categories</button>
            <div className="searchbar">        
                <button type="submit" id="search-btn" className="search-icon" onClick={update}></button>
                <input  id = "searchbar" type="text" title="Search" placeholder="Search for anything" ></input>
                <div id="myDropdown" className="dropdown-content"> </div>
            </div>
            <button className="nav-text">Udemy Business</button>
            <button className="nav-text">Teach on Udemy</button>
            <button className = "shopicon"> </button>
            <button className = "login-button"> Login </button>
            <button className = "signup-button"> Sign up </button>
            <div className = "language"> <img  src="/static/images/lang.png"></img></div>
        </div>
        );
}
 
export default Nav;