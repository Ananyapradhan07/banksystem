import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/users');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className='bg-gray-900 text-white h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Customer List */}
      <div className='container mx-auto p-4 text-text-900'>
        <h1 className='text-primary-color-2xl font-bold mb-4'>Customers</h1>

        {/* List of Customers */}
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {customers.map((customer) => (
            <div
              key={customer._id}
              className='bg-gray-800 p-4 rounded shadow cursor-pointer text-text-300'
              onClick={() => handleCustomerClick(customer)}
            >
              <h2 className='text-lg font-semibold mb-2'>
                {customer.firstName}
              </h2>
              <p className='text-sm text-gray-500'>{customer.email}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCustomer && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg text-black'>
              <h2 className='text-lg font-semibold mb-2'>
                {selectedCustomer.name}
              </h2>
              <p className='text-sm text-gray-700'>
                Email: {selectedCustomer.email}
              </p>
              <p className='text-sm text-gray-700'>
                Account Balance: {selectedCustomer.balance}
              </p>
              <p className='text-sm text-gray-700'>
                Account Number: {selectedCustomer.accountNumber}
              </p>
              <button
                onClick={closeModal}
                className='mt-4 px-4 py-2 bg-primary-color-500 text-black rounded hover:bg-primary-color-600'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
