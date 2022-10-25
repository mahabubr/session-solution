import React from 'react';
import CourseCard from './CourseCard/CourseCard';
import CourseSideBar from './CourseSideBar/CourseSideBar';

const Courses = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1 bg-gray-800 h-full'>
                <CourseSideBar />
            </div>
            <div className='col-span-3 grid grid-cols-2 gap-16 p-24'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    );
};

export default Courses;