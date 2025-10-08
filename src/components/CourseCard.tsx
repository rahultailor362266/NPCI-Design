// import React from 'react'
import Author from '../assets/author.png'
import TrainingCourse from '../assets/training-course.png'
// import Progressbar from './Progressbar'
const CourseCard = () => {
    return (
        <>
        {/* add has-label this class when we want to add status/label in card  */}
            <div className='training-slider-card card-global-16 card-gray'>
                <div className="course-card-main">
                    <div className="course-img">
                        <img src={TrainingCourse} alt="Training course image" />
                    </div>
                    <div className="course-content">
                        <div className="course-name">
                            <p>Advanced Leadership Strategies</p>
                        </div>
                        <div className="author-name">
                            <img src={Author} alt="Author image" />
                            <span className='text-small'>Organizer by Sarah Johnson</span>
                        </div>
                        <div className="course-time">
                            {/* <div className="rating-wrapper">
                                <p className='text-small'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.76251 1.14745C5.78443 1.10318 5.81827 1.06591 5.86024 1.03986C5.90221 1.01381 5.95062 1 6.00001 1C6.04941 1 6.09782 1.01381 6.13979 1.03986C6.18175 1.06591 6.2156 1.10318 6.23751 1.14745L7.39251 3.48695C7.4686 3.64093 7.58092 3.77415 7.71983 3.87517C7.85873 3.9762 8.02008 4.042 8.19001 4.06695L10.773 4.44495C10.822 4.45204 10.8679 4.47268 10.9058 4.50455C10.9436 4.53641 10.9717 4.57822 10.987 4.62525C11.0023 4.67228 11.0041 4.72265 10.9923 4.77066C10.9805 4.81868 10.9554 4.86242 10.92 4.89695L9.05202 6.71595C8.92882 6.836 8.83665 6.98419 8.78343 7.14776C8.73021 7.31134 8.71755 7.48539 8.74651 7.65495L9.18752 10.2249C9.19615 10.2739 9.19087 10.3242 9.17226 10.3703C9.15366 10.4163 9.12248 10.4563 9.08229 10.4854C9.04209 10.5146 8.9945 10.5319 8.94495 10.5354C8.89539 10.5388 8.84586 10.5283 8.80201 10.5049L6.49301 9.29095C6.34087 9.21106 6.1716 9.16932 5.99976 9.16932C5.82793 9.16932 5.65866 9.21106 5.50651 9.29095L3.19801 10.5049C3.15418 10.5282 3.10471 10.5386 3.05524 10.5351C3.00577 10.5316 2.95827 10.5142 2.91816 10.4851C2.87805 10.4559 2.84693 10.416 2.82834 10.3701C2.80975 10.3241 2.80444 10.2738 2.81301 10.2249L3.25351 7.65545C3.28261 7.48581 3.27001 7.31165 3.21678 7.14797C3.16356 6.98429 3.07132 6.83602 2.94801 6.71595L1.08001 4.89745C1.04431 4.86296 1.01901 4.81914 1.007 4.77098C0.994981 4.72282 0.996733 4.67226 1.01205 4.62504C1.02738 4.57783 1.05565 4.53587 1.09365 4.50394C1.13166 4.47201 1.17787 4.4514 1.22701 4.44445L3.80951 4.06695C3.97964 4.0422 4.14121 3.97648 4.28031 3.87544C4.4194 3.77441 4.53187 3.64108 4.60801 3.48695L5.76251 1.14745Z" fill="#EFB100" stroke="#EFB100" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    4.7
                                </p>
                            </div> */}
                            <div className="date-wrapper">
                                <p className='text-small'>
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1V3M3 1V3M0.5 5H9.5M1.5 2H8.5C9.05229 2 9.5 2.44772 9.5 3V10C9.5 10.5523 9.05229 11 8.5 11H1.5C0.947715 11 0.5 10.5523 0.5 10V3C0.5 2.44772 0.947715 2 1.5 2Z" stroke="var(--Gray-700)" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Date:
                                </p>
                                <span className='text-small'>
                                    25/09/2025
                                </span>
                            </div>
                            <div className="date-wrapper">
                                <p className='text-small'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3V6L8 7M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="var(--Gray-700)" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Time:
                                </p>
                                <span className='text-small'>
                                    01:30 PM
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="course-status">
                       {/* <span className='status status-green text-small status-h24'>On Track</span> */}
                       {/* <span className='close-course'>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L1 9M1 1L9 9" stroke="var(--Gray-600)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                       </span> */}
                    </div>
                </div>
                {/* <Progressbar now={75} label="Progress" /> */}
                <div className="course-btn">
                    <button className='btn btn-primary btn-h44 btn-global'>Join</button>
                </div>
            </div>

        </>
    )
}

export default CourseCard