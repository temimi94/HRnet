import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

const Error = React.memo(() => {
    return (
        <div className="error-page">
            <h1>HRnet</h1>
            <p>404 Page d'erreur </p>
            <Link to="/" className='path'>Home Page</Link>
        </div>
    );
});

export default Error;