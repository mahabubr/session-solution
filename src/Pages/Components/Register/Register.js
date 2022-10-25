import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaYahoo } from 'react-icons/fa';
import Lottie from "lottie-react";
import LottieRegisterAnimation from '../../../Assets/animation/register.json'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='grid lg:grid-cols-2 md:gap-20 md:w-10/12 mx-auto mt-10'>
            <div className='w-8/12 mx-auto'>
                <Lottie animationData={LottieRegisterAnimation} loop={true} />
                <Link to='/login' >
                    <p className='mt-12 text-center font-bold text-xl border border-b-4 border-slate-500 text-slate-600 p-1 cursor-pointer'>
                        Go To Login
                    </p>
                </Link>
            </div>
            <div className='p-16'>
                <h2 className='font-bold text-5xl text-black'>Create Account</h2>
                <form className='mt-5'>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="text" name="name" id="" placeholder='Full Name' />
                    </div>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="text" name="imageURL" id="" placeholder='Image Url' />
                    </div>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <input id='checkbox' type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                            <label htmlFor='checkbox' className="label-text text-lg ml-2 text-blue-600">Accept <Link className='text-xl text-purple-600' to='/terms-and-condition'>Terms And Condition</Link></label>
                        </div>
                    </div>
                    <input type="submit" class="btn btn-success mt-6 w-7/12 text-xl" value="Register" />
                </form>
                <div className="divider mt-10 text-indigo-700">OR REGISTER WITH</div>
                <div className='flex justify-around items-center mt-10'>
                    <FaGoogle className='text-5xl border border-l-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaGithub className='text-5xl border border-l-4 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaFacebook className='text-5xl border border-l-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaYahoo className='text-5xl border border-l-4 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Register;