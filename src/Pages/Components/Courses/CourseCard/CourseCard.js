import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { id, name, image, description, video, quiz, live_class, support, duration } = course

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="" /></figure>
            <div className="card-body bg-gray-800">
                <div className="card-actions  text-amber-300">
                    <div className="badge badge-outline">{video} videos</div>
                    <div className="badge badge-outline">{duration} month</div>
                    <div className="badge badge-outline">{support} support</div>
                    <div className="badge badge-outline">{live_class} live class</div>
                    <div className="badge badge-outline">{quiz} quiz</div>
                    <div className="badge badge-outline">life time access</div>
                </div>
                <h2 className="card-title text-white text-xl mt-4">{name}</h2>
                <p className='text-gray-200 mb-4'>{description.slice(0, 100)}...</p>
                <Link to={`/${id}`} className='p-4'>
                    <button class="btn btn-warning w-full text-xl">Expand This Course</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;