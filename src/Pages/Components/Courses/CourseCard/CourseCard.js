import React from 'react';

const CourseCard = () => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body bg-gray-800">
                <div className="card-actions justify-center text-amber-300">
                    <div className="badge badge-outline">1850 Free Video</div>
                    <div className="badge badge-outline">250 hours</div>
                    <div className="badge badge-outline">MCQ and CQ</div>
                    <div className="badge badge-outline">Live Class</div>
                    <div className="badge badge-outline">24/7 Support</div>
                </div>
                <h2 className="card-title text-white text-2xl">Title</h2>
                <p className='text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsam cumque soluta id nisi esse minus totam modi blanditiis distinctio!</p>
                <div>
                    <button class="btn btn-warning w-full">Expand About This Course</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;