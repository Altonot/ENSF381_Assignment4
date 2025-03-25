import React, { useContext } from 'react';
import { loginContext } from './LoginForm.js';
import DisplayStatus from './DisplayStatus.js'

function AuthMessage() {

    const {output, message} = useContext(loginContext);

    return (
        <div>
            <DisplayStatus type={output} message={message} />
        </div>
    );
}

export default AuthMessage;