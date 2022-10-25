import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const CourseSideBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                user &&
                <div className='bg-red-400 p-10 m-10 mx-auto'>
                    <img className='w-20 mx-auto rounded-full' src={user?.photoURL} alt="" />
                    <h3 className='text-center mt-3 text-white font-bold'>{user?.displayName}</h3>
                    <h3 className='text-center'>{user?.email}</h3>
                </div>
            }
            <div className='p-10'>
                <h2 className='text-3xl text-white'>Courses List</h2>
                <li className='text-white'>Course 1</li>
                <li className='text-white'>Course 1</li>
                <li className='text-white'>Course 1</li>
                <li className='text-white'>Course 1</li>
                <li className='text-white'>Course 1</li>
                <li className='text-white'>Course 1</li>
            </div>
        </div>
    );
};

export default CourseSideBar;