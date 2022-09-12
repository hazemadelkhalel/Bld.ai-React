import React, { useState } from 'react';
import './static/style/index.css';
import Course from './course';

function Courses (){
	const [data,setData] = useState([]);
	fetch('https://api.jsonbin.io/v3/b/62f5ba62e13e6063dc76baff?meta=false%27')
		.then((response) => response.json())
		.then(_courses => {
		setData(_courses.record.courses);
		});
	const courses = data.map(function (course) {
		console.log(course);
		return <Course key={course.id} course = {course} />;
	});
	return (
		<div className='box'>
			{courses}
		</div>
	);
}
 
export default Courses;