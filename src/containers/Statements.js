import React from 'react';
import '../styles/Statements.css';

const Statements = () => {
    return (
        <div className='main-content'>
            <h2>Your Statements</h2>
            <p>Here you can see all your statements and their status.</p>
            <table className='statements'>
                <thead>
                    <tr>
                        <th>Statement</th>
                        <th>Date Imported</th>
                        <th>Number of Transactions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan='4'>No statements imported yet.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Statements;