import Header from './components/Header.js'
import MainSection from './components/MainSection.js'
import Footer from './components/Footer.js'
import './Homepage.css';

function Homepage() {
    return (
        <div class='homepage'>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Homepage;