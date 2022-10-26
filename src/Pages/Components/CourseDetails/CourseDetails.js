import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdQuiz } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";

const CourseDetails = () => {

    const courseData = useLoaderData()

    const { name, image, id, video, quiz, live_class, support, duration, review, teachers } = courseData

    const { teacher_name, teacher_img, teacher_title } = teachers

    return (
        <div>
            <div className='flex w-9/12 mx-auto items-start justify-center mt-24'>
                <div className='w-6/12 p-12'>
                    <h1 className='text-3xl font-bold text-pink-500 mb-6 text-justify'>Professional {name} Course.</h1>
                    <div className='flex justify-center items-center my-5'>
                        <div>
                            <img src={teacher_img} alt="" />
                        </div>
                        <div>
                            <h3>{teacher_name}</h3>
                            <p>{teacher_title}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-6 border border-gray-800 rounded-lg p-8'>
                        <article className='flex justify-center items-center text-center'>
                            <div className='mr-2 text-2xl text-sky-600'>
                                <GoDeviceCameraVideo />
                            </div>
                            <div>
                                <p><small className='text-lg'>video</small></p>
                                <p className='text-xl font-bold text-orange-500'>{video}</p>
                            </div>
                        </article>
                        <article className='flex justify-center items-center text-center'>
                            <div className='mr-2 text-2xl text-sky-600'>
                                <MdQuiz />
                            </div>
                            <div>
                                <p><small className='text-lg'>quiz</small></p>
                                <p className='text-xl font-bold text-orange-500'>{quiz}</p>
                            </div>
                        </article>
                        <article className='flex justify-center items-center text-center'>
                            <div className='mr-2 text-2xl text-sky-600'>
                                <SiGoogleclassroom />
                            </div>
                            <div>
                                <p><small className='text-lg'>live_class</small></p>
                                <p className='text-xl font-bold text-orange-500'>{live_class}</p>
                            </div>
                        </article>
                        <article className='flex justify-center items-center text-center'>
                            <div className='mr-2 text-2xl text-sky-600'>
                                <BiSupport />
                            </div>
                            <div>
                                <p><small className='text-lg'>support</small></p>
                                <p className='text-xl font-bold text-orange-500'>{support}</p>
                            </div>
                        </article>
                        <article className='flex justify-center items-center text-center'>
                            <div className='mr-2 text-2xl text-sky-600'>
                                <CiTimer />
                            </div>
                            <div>
                                <p><small className='text-lg'>duration</small></p>
                                <p className='text-xl font-bold text-orange-500'>{duration}</p>
                            </div>
                        </article>
                    </div>
                    <button class="btn glass mt-4 text-xl">Free Seminar</button>
                    <div className='flex justify-between items-center mt-3 text-lg text-slate-800 '>
                        <p>Ratting : {review}</p>
                        <p>18000+ Students</p>
                    </div>
                </div>
                <div className='w-6/12 sticky top-24'>
                    <img className='rounded-2xl border-4 border-blue-400' src={image} alt="" />
                    <Link to={id}>
                        <button className="btn btn-outline btn-primary mt-6 w-full text-xl">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;