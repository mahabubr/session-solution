import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)

    console.log(user);

    return (
        <div className='my-24 bg-gray-800 p-24 md:flex justify-center items-center '>
            <div>
                <img src={user?.photoURL} className="rounded-full w-28 h-28" alt="" />
            </div>
            <div className='md:p-8 mt-2 text-white' >
                <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
                <p>{user?.email}</p>
                <p className='text-pink-500 font-bold'>{user?.emailVerified ? "Verified" : "Not Verify"}</p>
                <p>{user?.metadata?.creationTime}</p>
            </div>
        </div>
    );
};

export default Profile;