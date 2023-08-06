import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        if(!selectedFile) {
            alert('Please select a File.');
            return;
        }

        // Here the API call to the java service will be made
        alert(`Successfully uploaded ${selectedFile.name}`);
    };

    return (
        <div className='file-upload'>
            <label htmlFor='template-select'>Choose a template:</label>
            <select id='tempalte-select' value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
                <option value=''>-- Selecte a Template --</option>
                <option value='bankA'>Bank A</option>
                <option value='bankB'>Bank B</option>
                <option value='bankC'>Bank C</option>
            </select>
            
            <input type='file' onChange={handleFileChange} />
            {selectedFile && <p><strong>Selected File: </strong>{selectedFile.name}</p>}
            <button className='cta' onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default FileUpload;