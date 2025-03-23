import './MainSection.css';
import courses from './../data/courses.js';

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

function MainSection() {
    return (
        <div className='main'>
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            {featuredCourses()}
        </div>
    );
}

export default MainSection;