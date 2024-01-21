// components/CustomerCard.js
import React from 'react';

const CustomerCard = ({ name }) => {
  return (
    <div className='dark:bg-gray-800 bg-white p-6 rounded shadow-md'>
      <h3 className='text-lg font-semibold mb-2 dark:text-white'>{name}</h3>
      <p className='text-gray-600 dark:text-gray-300'>A satisfied customer</p>
    </div>
  );
};

export default CustomerCard;
