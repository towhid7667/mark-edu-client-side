import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
// import Course from '../Course/Course';
import CoursesWithCategory from './../Courses/CoursesWithCategory';

const CategoryCourse = () => {
    const courses = useLoaderData();
    const [category, setCategories] = useState([]);


    useEffect(()=>{
        fetch('https://mark-edu-server-side.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='bg-orange-400 flex justify-center flex-col-reverse lg:flex-row lg:items-start items-center lg:gap-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:w-8/12 w-12/12 lg:px-10 px-3 lg:gap-0 gap-5 lg:mb-0 mb-52'>
            
            {
                courses.map(course => <CoursesWithCategory key={course.id} course = {course}></CoursesWithCategory>)
            }
            </div>

            <div className='lg:mt-0 mt-16'>
                <Categories category = {category}></Categories>
            </div>
        </div>
    );
};

export default CategoryCourse;