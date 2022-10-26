import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdQuiz } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAdobeaudition, SiAdobepremierepro, SiAdobeindesign } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Pdf from "react-to-pdf";
import ReactImageMagnify from 'react-image-magnify';

const CourseDetails = () => {

    const courseData = useLoaderData()

    const ref = useRef()

    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [10, 10]
    };

    const { name, image, id, video, quiz, live_class, support, duration, review, teachers, description } = courseData

    const { teacher_name, teacher_img, teacher_title } = teachers

    return (
        <div className='mb-24'>
            <div className='mt-6 text-right w-10/12 mx-auto'>
                <Pdf targetRef={ref} filename="example.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-error text-xl">
                        <AiOutlineCloudDownload className='text-3xl mr-2' />
                        <p>Download PDF</p>
                    </button>}
                </Pdf>
            </div>
            <div ref={ref} className='lg:flex lg:w-9/12 mx-auto flex-row-reverse items-start justify-center lg:mt-12'>
                <div className='lg:w-6/12 p-12'>
                    <h1 className='text-3xl font-bold text-pink-500 mb-6 text-justify'>Professional {name} Course.</h1>
                    <div className='flex justify-start items-center my-5'>
                        <div>
                            <img className='w-14 h-14 mr-2 rounded-full ' src={teacher_img} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl text-black'>{teacher_name}</h3>
                            <p>Teacher : {teacher_title}</p>
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
                        <div>
                        </div>
                    </div>
                    <button class="btn glass mt-4 text-xl">Free Seminar</button>
                    <div className='flex justify-between items-center mt-3 text-lg text-slate-800 '>
                        <p>Ratting : {review}</p>
                        <p>18000+ Students</p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-3xl text-pink-600 font-bold'>Course Overview</h3>
                        <article className='mt-2 text-xl'>
                            {description}
                        </article>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-3xl text-pink-600 font-bold'>Which Tool Use In</h3>
                        <article className='grid grid-cols-3 gap-7 text-8xl mt-6 text-sky-900'>
                            <SiAdobeillustrator />
                            <SiAdobephotoshop />
                            <SiAdobeaftereffects />
                            <SiAdobeaudition />
                            <SiAdobepremierepro />
                            <SiAdobeindesign />
                        </article>
                    </div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* <!-- row 2 --> */}
                                <tr className="active">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='lg:w-6/12 sticky top-24'>
                    <img className='rounded-2xl border-4 border-blue-400' src={image} alt="" />

                    <Link to={`/checkout/${id}`}>
                        <button className="btn btn-outline btn-primary mt-6 w-full text-xl">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;