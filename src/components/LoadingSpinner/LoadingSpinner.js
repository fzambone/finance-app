import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className='backdrop'>
            <div className='spinner'></div>
        </div>
    )
}

export default LoadingSpinner;