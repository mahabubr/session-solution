import React from 'react';
import CourseSideBar from './CourseSideBar/CourseSideBar';

const Courses = () => {
    return (
        <div className='grid grid-cols-6 gap-32'>
            <div className='col-span-2 bg-gray-800 h-screen'>
                <CourseSideBar />
            </div>
            <div className='col-span-4'>
                page2
            </div>
        </div>
    );
};

export default Courses;