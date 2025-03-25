import './LoginForm.css';
import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import AuthMessage from './AuthMessage.js'

export const loginContext = createContext(null);

function LoginForm() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [output, setOutput] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error); 
                setIsLoading(false);
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        if (isLoading) {
            return;
        }

        let valid = 0;

        for(let i = 0; i < data.length; i++){
            let {username, email} = data[i];
            if(username == user){
                if(email == pass){
                    valid = 1;
                }
            }
        }
    
        if(valid == 1){
            setOutput('success');
            setMessage('Login Succeeded, Redirecting...');
        }
        else{
            setOutput('error');
            setMessage('Login Failed, Try Again.');
        }
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='loginform'>
                <input type='text' value={user} name='username' placeholder='Input Username...' onChange={(e) => setUser(e.target.value)} required />
                <input type='password' value={pass} name='password' placeholder='Input Password...' minLength='8' onChange={(e) => setPass(e.target.value)} required />
                <button type='submit'>Login</button>
            </form>
            <a href="">Forgot Password?</a>
            <loginContext.Provider value={{output, message}}>
                <AuthMessage />
            </loginContext.Provider>
        </div>
    );
}

export default LoginForm;