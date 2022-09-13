import React, { useState } from 'react';
import './static/style/index.css';
import Course from './course';
import {filter} from './Nav'
import {courses} from './FetchData';
function Courses (){
	
	// const [data,setData] = useState([]);
	// let uri = 'https://www.udemy.com/api-2.0/courses/?search='+filter +'&fields[course]=@all&page_size=15';
    // let h= new Headers();
    // h.append("Accept","application/json, text/plain, */*");
    // h.append("Authorization","Basic M05kN3ByOTBrWEJhN0VTdkZFYUh2eklkTGg5MkxZSXJEZ2NWUmU2TDpDT2Yxb3Y0azNSZ29lbmI2Q0o5MzRZMzM2ZEJMbnNEQlB3RlNFNHBFUFJJM0pMZkNEd2c5YkVDNGhpdXJwbUJ6dWJOWm56anBiT1FTM3V6dTRDSFJnS3VkbEptV1l4Y21RVnNGSDFXelFjeDFVVEZVQ1VIOUlya0Jwbkp1VmNjUA==");
    // h.append("Content-Type", "application/json;charset=utf-8");
    // let req = new Request(uri,{
    //   method:'GET',
    //   headers:h,
    // });
    // fetch(req) 
    // .then(Response => Response.json())
    // .then(_courses => {
	// 	setData(_courses.results);
	// });
	// console.log(courses);
	const Cur = courses.map(function (course) {
		return <Course key={course.id} course = {course} />;
	});
	return (
		<div className='box'>
			{Cur}
		</div>
	);
}
 
export default Courses;