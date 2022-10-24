import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/logo/Logo.png'

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <div className="navbar w-10/12 mx-auto">
                <div className="flex-1 hidden md:flex">
                    <Link to="/">
                        <img className='h-10' src={Logo} alt="" />
                    </Link>
                    <p className="normal-case text-xl cursor-pointer ml-2 font-bold">Session Solution</p>
                </div>
                <div className="flex-none">
                    <Link to='/courses' className="btn btn-ghost text-xl">
                        <p>Courses</p>
                    </Link>
                    <Link to='/faq' className="btn btn-ghost text-xl">
                        <p>FAQ</p>
                    </Link>
                    <Link to='/blog' className="btn btn-ghost text-xl">
                        <p>Blog</p>
                    </Link>
                    <div className='mr-4 mt-2'>
                        <input type="checkbox" className="toggle" />
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;