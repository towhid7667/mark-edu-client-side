import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    const [category, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://mark-edu-server-side.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])



    return (
        <div className='bg-orange-400 flex justify-center items-start gap-10'>
            <div className='grid grid-cols-3 py-10 w-8/12 gap-10'>

            
            {
                courses.map(course => <Course key={course.id} course = {course}></Course>)
            }
            </div>

            <div>
                <Categories category = {category}></Categories>
            </div>
        </div>
    );
};

export default Courses;