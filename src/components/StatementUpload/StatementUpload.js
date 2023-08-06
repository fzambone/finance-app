import React, { useState } from 'react';
import './StatementeUpload.css';

const StatementeUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        //Mocked data for now
        if(file) {
            const mockData = {
                transactions: [];
            };
            onUpload(mockData);
        }
    };

    return (
        <div className='statement-upload'>
            <input type='file' onChange={handleFileChange} />
            <button className='cta' onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default StatementeUpload;