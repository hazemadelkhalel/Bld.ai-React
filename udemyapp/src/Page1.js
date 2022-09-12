import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import CoursesBox from './components/CoursesBox';
import Alarm from './components/alarm';
// import {useNavigate} from "react-router-dom"


const CreatePage1 = () => {

    // const navigate = useHistory();
    
        return (
            <div>
              <h1 style={{color:"green"}}>GeeksForGeeks</h1>
              <button onClick={()=>navigate.push("/course")}>About</button>
            </div>
        )






    // return ( 
        // <React.Fragment>
        //     <Alarm/> 
        //     <CoursesBox/>
        // </React.Fragment>
    //  );
}
 
export default CreatePage1;