import React, { useContext } from 'react';
import Lottie from "lottie-react";
import LottieLoginAnimation from '../../../Assets/animation/login.json'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook, FaYahoo } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';

const Login = () => {

    const { LogInUser } = useContext(AuthContext)


    const handleLoginForm = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        LogInUser(email, password)
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Welcome Back',
                    'Your Login In Request Accepted!',
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div className='grid lg:grid-cols-2 md:gap-20 md:w-10/12 mx-auto mt-10'>
            <div className='w-9/12 mx-auto'>
                <Lottie animationData={LottieLoginAnimation} loop={true} />
                <Link to='/register' >
                    <p className='mt-12 text-center font-bold text-xl border border-b-4 border-slate-500 text-slate-600 p-1 cursor-pointer'>
                        Create An Account
                    </p>
                </Link>
            </div>
            <div className='p-16'>
                <h2 className='font-bold text-5xl text-black'>Welcome Back</h2>
                <form onSubmit={handleLoginForm} className='mt-5'>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div>
                        <input className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <input id='checkbox' type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                            <label htmlFor='checkbox' className="label-text text-xl ml-2 text-blue-600">Remember me</label>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700 cursor-pointer'>Forget Password</p>
                        </div>
                    </div>
                    <input type="submit" class="btn btn-success mt-6 w-7/12 text-xl" value="Login" />
                </form>
                <div className="divider mt-10 text-indigo-700">OR LOGIN WITH</div>
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

export default Login;