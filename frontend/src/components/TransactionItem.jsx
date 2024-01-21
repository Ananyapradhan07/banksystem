import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { sender, receiver, amount, timestamp } = transaction;

  return (
    <div className='bg-gray-800 rounded-md p-4 shadow-md text-white'>
      <div className='mb-2'>
        <strong className='text-primary-500'>Sender:</strong> {sender.firstName}{' '}
        {sender.lastName} (Account No: {sender.accountNumber})
      </div>
      <div className='mb-2'>
        <strong className='text-primary-500'>Receiver:</strong>{' '}
        {receiver.firstName} {receiver.lastName} (Account No:{' '}
        {receiver.accountNumber})
      </div>
      <div className='mb-2'>
        <strong className='text-primary-500'>Amount:</strong> {amount} INR
      </div>
      <div className='mb-2'>
        <strong className='text-primary-500'>Date:</strong>{' '}
        {new Date(timestamp).toLocaleString().split(',')[0]}
      </div>
    </div>
  );
};

export default TransactionItem;
