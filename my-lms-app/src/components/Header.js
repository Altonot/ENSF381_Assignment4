import logo from './../images/logo.jpg';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src={logo} />
            <a href='/'>Home</a>
            <a>Courses</a>
            <a href='/Login'>Login</a>
        </div>
    );
}

export default Header;