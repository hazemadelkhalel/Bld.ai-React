import React, { useState, useEffect } from 'react';
import './static/style/index.css';
import Course from './course';
export let courses;
function FetchData (props){
    console.log(props.filter);
    const [data,setData] = useState([]);
    useEffect(() => {
        let uri = 'https://www.udemy.com/api-2.0/courses/?search='+props.filter +'&fields[course]=@all&page_size=15&_limit=2';
        let h= new Headers();
        h.append("Accept","application/json, text/plain, */*");
        h.append("Authorization","Basic M05kN3ByOTBrWEJhN0VTdkZFYUh2eklkTGg5MkxZSXJEZ2NWUmU2TDpDT2Yxb3Y0azNSZ29lbmI2Q0o5MzRZMzM2ZEJMbnNEQlB3RlNFNHBFUFJJM0pMZkNEd2c5YkVDNGhpdXJwbUJ6dWJOWm56anBiT1FTM3V6dTRDSFJnS3VkbEptV1l4Y21RVnNGSDFXelFjeDFVVEZVQ1VIOUlya0Jwbkp1VmNjUA==");
        h.append("Content-Type", "application/json;charset=utf-8");
        let req = new Request(uri,{
            method:'GET',
            headers:h,
        });
        fetch(req) 
        .then(Response => Response.json())
        .then(_courses => {
            setData(_courses.results);
        });       },
    []);
    
    courses = data;
    console.log(courses);
}
 
export default FetchData;