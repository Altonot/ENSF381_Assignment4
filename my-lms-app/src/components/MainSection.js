import './MainSection.css';
import courses from './../data/courses.js';
import testimonials from './../data/testimonials.js';
import { useState, useEffect } from 'react';

function featuredCourses(){
    let course1 = courses[0];
    let course2 = courses[1];
    let course3 = courses[2];
    let path1 = './../' + course1.image;
    let path2 = './../' + course2.image;
    let path3 = './../' + course3.image;

    return (
        <div className='courses'>
            <div>
                <img src={path1} />
                <p>{course1.name}</p>
                <p>{course1.description}</p>
                <p>Duration: {course1.duration}</p>
                <p>Taught by: {course1.instructor}</p>
            </div>
            <div>
                <img src={path2} />
                <p>{course2.name}</p>
                <p>{course2.description}</p>
                <p>Duration: {course2.duration}</p>
                <p>Taught by: {course2.instructor}</p>
            </div>
            <div>
                <img src={path3} />
                <p>{course3.name}</p>
                <p>{course3.description}</p>
                <p>Duration: {course3.duration}</p>
                <p>Taught by: {course3.instructor}</p>
            </div>
        </div>
    );
}

function randomTestimonials(review1, review2) {

    if (!review1 || !review2) {
        return null;
    }

    return (
        <div className='testimonials'>
            <div>
                <p>{review1.courseName}</p>
                <p>{review1.studentName}</p>
                <p>{review1.review}</p>
                <p>{review1.rating}</p>
            </div>
            <div>
                <p>{review2.courseName}</p>
                <p>{review2.studentName}</p>
                <p>{review2.review}</p>
                <p>{review2.rating}</p>
            </div>
        </div>
    );
}

function MainSection() {
    const [review1, setReview1] = useState(null);
    const [review2, setReview2] = useState(null);

    useEffect(() => { 
        let templist = [...testimonials];

        let random = Math.floor(Math.random() * 4);
        let first = templist[random];
        setReview1(first);

        templist.splice(random, 1);

        random = Math.floor(Math.random() * 3);
        let second = templist[random];
        setReview2(second);
        
    }, []);

    return (
        <div className='main'>
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            {featuredCourses()}
            {randomTestimonials(review1, review2)}
        </div>
    );
}

export default MainSection;