import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';
import CourseSideBar from './CourseSideBar/CourseSideBar';

const Courses = () => {

    const categoryData = useLoaderData()

    return (
        <div className='grid lg:grid-cols-4'>
            <div className='col-span-1 bg-gray-800 h-full'>
                <CourseSideBar categoryData={categoryData} />
            </div>
            <div className='lg:col-span-3 grid md:grid-cols-2 gap-16 p-12 lg:p-24'>
                {
                    categoryData.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;