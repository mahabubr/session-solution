import React from 'react';
import { Link } from 'react-router-dom';


const CourseSideBarItems = ({ data }) => {
    return (
        <div>
            <Link to={`/category/${data.id}`}>
                <li className='bg-white text-lg mt-5 text-gray-800 rounded-xl list-none py-2 px-4 cursor-pointer'>{data.name}</li>
            </Link>
        </div>
    );
};

export default CourseSideBarItems;