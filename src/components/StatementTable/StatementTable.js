import React, { useState } from 'react';
import { mockData} from '../../data/mockData';
import './StatementTable.css';
import ActionsMenu from '../Menus/ActionsMenu';
import Modal from '../Modal/Modal';
import StatementDetails from '../StatementDetails/StatementDetails';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const tableHeaders = ['Bank Name', 'Upload Date', 'Statement Start Date', 'Statement End Date', 'Total Transactions', 
'Total Income', 'Total Expenses', 'Actions'];


const StatementTable = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentStatementId, setCurrentStatementId] = useState(null);
    const [ loading, setLoading ] = useState(false);
    
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
                        callback: () => {
                            setLoading(true);

                            //Simulating a data fetch with timeout, need to replace this later
                            setTimeout(() => {                                
                                setCurrentStatementId(statement.id);
                                setModalOpen(true);
                                setLoading(false);
                            }, 1000);
                        }
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
            {loading && <LoadingSpinner />}
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
            {
                isModalOpen &&
                <Modal isVisible={isModalOpen} onClose={() => setModalOpen(false)}>
                    <StatementDetails statementId={currentStatementId} />
                </Modal>
            }
        </div>
    );
};

export default StatementTable;