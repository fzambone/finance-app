import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './StatementDetails.css';

const StatementDetails = ({ statementId }) => {
    const [statementData, setStatementData] = useState(null);
    const [editedTransactions, setEditedTransactions] = useState({});
    
    useEffect(() => {
        const statement = mockData.find(st => st.id === statementId);
        setStatementData(statement);
    }, [statementId]);

    const handleCategoryChange = (index, newCategory) => {
        const updatedTransactions = [...statementData.transactions];
        updatedTransactions[index].category = newCategory;
        setStatementData({ ...statementData, transaction: updatedTransactions });

        setEditedTransactions({ ...editedTransactions, [index]: updatedTransactions[index] });
    };

    const handleSaveAllChanges = () => {
        // Iterate over editedTransactions and save them backend/API
        for(let index in editedTransactions) {
            const transaction = editedTransactions[index];
            console.log(`Saving transaction ${transaction.description} with updated category: ${transaction.category}.`);
        }
        //Onde saved, clear all transactions
        setEditedTransactions({});
    };

    if(!statementData) return <p>Statement not found!</p>;

    return (
        <div className='statement-details'>
            <h2>Statement Details for {statementData.bankName}</h2>
            <p>Upload Date: {statementData.uploadDate}</p>
            <p>Statement Start Date: {statementData.statementStartDate}</p>
            <p>Statement End Date: {statementData.statementEndDate}</p>
            <p>Total Transactions: {statementData.totalTransactions}</p>
            <p>Total Income: {statementData.totalIncome}</p>
            <p>Total Expenses: {statementData.totalExpenses}</p>

            <h3>Transactions</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {statementData.transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                            <td>
                                <select
                                    value={transaction.category}
                                    onChange={(e) => handleCategoryChange(index, e.target.value)}
                                >
                                    <option value='Food'>Food</option>
                                    <option value='Rent'>Rent</option>
                                    <option value='Utilities'>Utilities</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='cta' onClick={handleSaveAllChanges}>Save</button>
        </div>
    );
};

export default StatementDetails;