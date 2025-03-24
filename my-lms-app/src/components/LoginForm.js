import './LoginForm.css';

function LoginForm() {
    return (
        <div>
            <input type='text' id='user' name='username' placeholder='Input Username...' required />
            <input type='password' id='pass' name='password' placeholder='Input Password...' required />
            <button id='login'>Login</button>
            <a>Forgot Password?</a>
        </div>
    );
}

export default LoginForm;