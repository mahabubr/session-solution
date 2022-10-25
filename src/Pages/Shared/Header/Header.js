import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/logo/Logo.png'
import ReactTooltip from 'react-tooltip';
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);


    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-200 mb-3">
            <ReactTooltip />
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/' className='flex'>
                        <img className='h-10' src={Logo} alt="" />
                        <p className="normal-case text-xl leading-relaxed cursor-pointer ml-2 font-bold">Session Solution</p>
                    </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <GiHamburgerMenu className='text-black' />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                        <Link to='/courses' className="btn btn-ghost text-xl">
                            <p>Courses</p>
                        </Link>
                        <Link to='/faq' className="btn btn-ghost text-xl">
                            <p>FAQ</p>
                        </Link>
                        <Link to='/blog' className="btn btn-ghost text-xl">
                            <p >Blog</p>
                        </Link>
                        <div className='mr-4 mt-2'>
                            <input type="checkbox" className="toggle" />
                        </div>
                        <Link to='/login' className='mr-4'>
                            <button className="btn btn-active tracking-widest">Log in</button>
                        </Link>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" data-tip="hello world" >
                            <div className="w-10 rounded-full" >
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;


// {/* <div className='bg-slate-200'>
//     <ReactTooltip />
//     <div className="navbar w-10/12 mx-auto">
//         <div className="flex-1 hidden md:flex">
//             <Link to="/">
//                 <img className='h-10' src={Logo} alt="" />
//             </Link>
//             <p className="normal-case text-xl cursor-pointer ml-2 font-bold">Session Solution</p>
//         </div>
//         <div className="flex-none">
//             <Link to='/courses' className="btn btn-ghost text-xl">
//                 <p>Courses</p>
//             </Link>
//             <Link to='/faq' className="btn btn-ghost text-xl">
//                 <p>FAQ</p>
//             </Link>
//             <Link to='/blog' className="btn btn-ghost text-xl">
//                 <p >Blog</p>
//             </Link>
//             <div className='mr-4 mt-2'>
//                 <input type="checkbox" className="toggle" />
//             </div>
//             <Link to='/login' className='mr-4'>
//                 <button className="btn btn-active tracking-widest">Log in</button>
//             </Link>
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar" data-tip="hello world" >
//                 <div className="w-10 rounded-full" >
//                     <img src="https://placeimg.com/80/80/people" alt='' />
//                 </div>
//             </label>
//         </div>
//     </div>
// </div> */}