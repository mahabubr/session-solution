import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaYahoo } from 'react-icons/fa';
import Lottie from "lottie-react";
import LottieRegisterAnimation from '../../../Assets/animation/register.json'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Register = () => {

    const {
        registerUser,
        userProfileUpdate,
        verifyUser,
        googleLogin,
        githubLogin,
        facebookLogin,
        yahooLogin
    } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Successfully',
                    'Your Register Request Accepted!',
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Successfully',
                    'Your Register Request Accepted!',
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Successfully',
                    'Your Register Request Accepted!',
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleYahooLogin = () => {
        yahooLogin()
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Successfully',
                    'Your Register Request Accepted!',
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    const handleResisterUser = (e) => {
        e.preventDefault()

        registerUser(email, password)
            .then(result => {
                const user = result.user
                e.target.reset()
                Swal.fire(
                    'Successfully',
                    'Your Register Request Accepted!',
                    'success'
                )
                handleUserProfile(name, photoURL)
                handleVerifyUser()
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleUserProfile = (name, photoURL) => {
        userProfileUpdate(name, photoURL)
            .then(() => {
                toast.success('Your Name And Photo Updated')
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error.message);
            })

    }

    const handleVerifyUser = () => {
        verifyUser()
            .then(() => {
                toast.success('Send Verify Email. Please Check Inbox of Spam')
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error.message);
            })
    }

    const handleRegisterName = (e) => {
        const inputName = e.target.value
        setName(inputName)
    }

    const handleRegisterPhotoURL = (e) => {
        const inputPhotoURL = e.target.value
        setPhotoURL(inputPhotoURL);
    }

    const handleRegisterEmail = (e) => {
        setEmailError('')
        const inputEmail = e.target.value
        if (!/(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/.test(inputEmail)) {
            setEmailError('please input valid email address')
            return
        }
        return setEmail(inputEmail)
    }

    const handleRegisterPassword = (e) => {

        setPasswordError('')

        const inputPassword = e.target.value

        if (!/(?=.*[a-z])/.test(inputPassword)) {
            setPasswordError('your password must be 1 small characters')
            return
        }
        else if (!/(?=.*[A-Z])/.test(inputPassword)) {
            setPasswordError('your password must be 1 capital characters')
            return
        }
        else if (!/(?=.*[0-9])/.test(inputPassword)) {
            setPasswordError('your password must be 1 number characters')
            return
        }
        else if (!/(?=.*[!@#$%^&*])/.test(inputPassword)) {
            setPasswordError('your password must be 1 special characters')
            return
        }
        else if (inputPassword.length < 6) {
            setPasswordError('your password must be 6 characters')
            return
        }
        return setPassword(inputPassword)
    }

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
                <form onSubmit={handleResisterUser} className='mt-5'>
                    <div>
                        <input required onChange={handleRegisterName} className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="text" name="name" id="" placeholder='Full Name' />
                    </div>
                    <div>
                        <input required onChange={handleRegisterPhotoURL} className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="text" name="imageURL" id="" placeholder='Image Url' />
                    </div>
                    <div>
                        <input onChange={handleRegisterEmail} className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="email" name="email" id="" placeholder='Email' />
                        <p className='mt-2 text-red-500 font-bold'>{emailError}</p>
                    </div>
                    <div>
                        <input onChange={handleRegisterPassword} className='w-full border-b-2 border-slate-700 py-2 text-xl mt-5' type="password" name="password" id="" placeholder='Password' />
                        <p className='mt-2 text-red-500 font-bold'>{passwordError}</p>
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <input id='checkbox' type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                            <label htmlFor='checkbox' className="label-text text-lg ml-2 text-blue-600">Accept <Link className='underline text-purple-600' to='/terms-and-condition'>Terms And Condition</Link></label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-success mt-6 w-7/12 text-xl" value="Register" />
                </form>
                <div className="divider mt-10 text-indigo-700">OR REGISTER WITH</div>
                <div className='flex justify-around items-center mt-10'>
                    <FaGoogle onClick={handleGoogleLogin} className='text-5xl border border-l-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaGithub onClick={handleGithubLogin} className='text-5xl border border-l-4 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaFacebook onClick={handleFacebookLogin} className='text-5xl border border-l-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    <FaYahoo onClick={handleYahooLogin} className='text-5xl border border-l-4 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Register;