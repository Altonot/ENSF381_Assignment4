import Header from './components/Header.js'
import Footer from './components/Footer.js'
import CourseCatalog from './../components/CourseCatalog.js';
import EnrollmentList from './../components/EnrolledList.js'
import './CoursePage.css';

function coursepage() {
    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <CourseCatalog />
                <EnrollmentList />
            </div>
            <Footer />
        </div>
    );
}

export default coursepage;