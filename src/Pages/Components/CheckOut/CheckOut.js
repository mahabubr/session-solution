import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {

    const checkoutData = useLoaderData()

    const { name, image, description } = checkoutData

    const { user } = useContext(AuthContext)

    return (
        <div className='lg:w-5/12 w-8/12 mx-auto mt-12'>
            {
                user &&
                <div className='text-center mb-12'>
                    <h1 className='text-2xl text-black'>{user?.displayName}</h1>
                    <p className='text-xl'>{user?.email}</p>
                    <p className='text-lg text-sky-500'>{user?.emailVerified ? "True" : "False"}</p>
                </div>
            }
            <div className='md:flex justify-center items-center'>
                <div className='md:w-6/12 w-10/12 p-4'>
                    <h2 className='text-2xl text-black font-bold'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='md:w-6/12 w-10/12'>
                    <img className='rounded-xl' src={image} alt="" />
                </div>
            </div>
            <div className='mt-8 bg-gray-800 p-8 text-white rounded-2xl'>
                <p>Subtotal : $500</p>
                <p>Total: $520</p>
                <input className='p-2 rounded-lg mt-2 w-full' type="text" placeholder='Credit Card Number' />
                <br />
                <input className='p-2 rounded-lg mt-2 w-full' type="text" placeholder='Secret Key' />
                <br />
                <input type="submit" className='btn btn-primary mt-4' value="Proceed" />
            </div>
        </div>
    );
};

export default CheckOut;