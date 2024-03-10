import React from 'react';
import './Error.css'
const Error = ({city}) => {

    return (
        <div className={"error-container"}>
            This {city} is not found
        </div>
    );
};

export default Error;



