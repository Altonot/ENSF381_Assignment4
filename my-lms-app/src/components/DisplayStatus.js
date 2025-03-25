import React, { useEffect } from 'react';

function DisplayStatus(props){

    useEffect(() => {
            if(props.type == 'success'){
                window.setTimeout(navigate, 2000);
            }
    }, [props.type]);

    function navigate(){
        window.location.href = '/courses';
    }

    return(
        <>
            {(props.type == "success") && (
                <div>
                    <p>{props.message}</p>
                </div>
            )}
            {(props.type == "error") && (
                <div>
                    <p>{props.message}</p>
                </div>
            )}
        </>
    );
}

export default DisplayStatus;