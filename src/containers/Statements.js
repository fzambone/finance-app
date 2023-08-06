import React, { useState } from 'react';
import '../styles/Statements.css';
import StatementTable from '../components/StatementTable/StatementTable';
import Modal from '../components/Modal/Modal';
import FileUpload from '../components/FileUpload/FileUpload';

const Statements = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className='main-content'>
            <h2>Your Statements</h2>
            <p>Here you can see all your statements and their status.</p>
            <button className='cta' onClick={() => setIsModalVisible(true)}>Upload Statement</button>
            <StatementTable />
            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                <h2>Upload Statement</h2>
                <FileUpload />
            </Modal>
        </div>
    );
}

export default Statements;