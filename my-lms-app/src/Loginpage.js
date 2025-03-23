import Header from './components/Header.js'
import LoginForm from './components/LoginForm.js'
import Footer from './components/Footer.js'
import './Loginpage.css';

function Loginpage() {
    return (
        <div class='loginpage'>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Loginpage;