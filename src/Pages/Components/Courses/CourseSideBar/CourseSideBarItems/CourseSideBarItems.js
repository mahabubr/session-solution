import React from 'react';
import { Link } from 'react-router-dom';


const CourseSideBarItems = ({ data }) => {
    return (
        <div>
            <Link to={`/category/${data.id}`}>
                <li className='bg-gray-600 text-lg border mt-5 text-white font-bold rounded-xl list-none py-2 px-4 cursor-pointer'>{data.name}</li>
            </Link>
        </div>
    );
};

export default CourseSideBarItems;