import React from 'react';
import { mockData} from '../../data/mockData';
import './StatementTable.css';
import ActionsMenu from '../Menus/ActionsMenu';

const tableHeaders = ['Bank Name', 'Upload Date', 'Statement Start Date', 'Statement End Date', 'Total Transactions', 
'Total Income', 'Total Expenses', 'Actions'];


const StatementTable = () => {
    
    const tableRows = mockData && mockData.length ? mockData.map(statement => (
        <tr key={statement.id}>
            <td>{statement.bankName}</td>
            <td>{statement.uploadDate}</td>
            <td>{statement.statementStartDate}</td>
            <td>{statement.statementEndDate}</td>
            <td>{statement.totalTransactions}</td>
            <td>{statement.totalIncome}</td>
            <td>{statement.totalExpenses}</td>
            <td>
                <ActionsMenu actions={[
                    {
                        label: 'View Details',
                        callback: () => console.log(`Viewing details of statement ${statement.id}`)
                    },
                    {
                        label: 'Delete',
                        callback: () => console.log(`Deleting statement ${statement.id}`)
                    }
                ]} />
            </td>
        </tr>
    )) : null;

    return (
        <div className='statements'>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
};

export default StatementTable;