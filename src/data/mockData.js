export const mockData = [
    {
      id: 1,
      bankName: 'XYZ Bank',
      uploadDate: '2023-02-20',
      statementStartDate: '2023-01-01',
      statementEndDate: '2023-01-31',
      totalTransactions: 50,
      totalIncome: 3000,
      totalExpenses: 1500,
      transactions: [
        {
          id: 1,
          date: '2023-01-02',
          description: 'Grocery Shopping',
          category: 'Food',
          amount: -100,
        },
        {
          id: 2,
          date: '2023-01-05',
          description: 'Salary',
          category: 'Income',
          amount: 2000,
        }
      ]
    },
    {
      id: 2,
      bankName: 'ABC Bank',
      uploadDate: '2023-03-15',
      statementStartDate: '2023-02-01',
      statementEndDate: '2023-02-28',
      totalTransactions: 45,
      totalIncome: 3200,
      totalExpenses: 1700,
      transactions: [
        {
          id: 1,
          date: '2023-02-03',
          description: 'Restaurant Bill',
          category: 'Food',
          amount: -200,
        },
        {
          id: 2,
          date: '2023-02-05',
          description: 'Salary',
          category: 'Income',
          amount: 2200,
        }
      ]
    },
]