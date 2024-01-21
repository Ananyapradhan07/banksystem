import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const TransactionForm = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  // toast
  const notify = () =>
    toast.success('Transaction Completed', {
      autoClose: 3000,
      closeOnClick: true,
      theme: 'colored',
    });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUserDetails(senderId, setSelectedSender);
  }, [senderId]);

  useEffect(() => {
    fetchUserDetails(receiverId, setSelectedReceiver);
  }, [receiverId]);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3000/api/users/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const fetchUserDetails = (userId, setDetails) => {
    if (userId) {
      axios
        .get(`http://localhost:3000/api/users/users/${userId}`)
        .then((response) => {
          setDetails(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching user details for ${userId}:`, error);
        });
    } else {
      setDetails(null);
    }
  };

  const handleTransaction = async (e) => {
    e.preventDefault();

    // Additional validation
    if (senderId === receiverId) {
      toast.error('Cannot send to the same person.');
      return;
    }

    if (Number(amount) <= 0) {
      toast.error('Amount must be greater than 0.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/transactions/transaction',
        {
          sender: senderId,
          receiver: receiverId,
          amount: Number(amount),
        }
      );

      console.log(response.data);

      notify();
      // navigate("/customers");
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='bg-gray-900 min-h-screen text-white'>
        <div className='container mx-auto p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-3xl text-primary-700 font-bold'>Send Money</h2>
          </div>

          <form onSubmit={handleTransaction} className='space-y-4'>
            {/* Sender Section */}
            <div className='flex items-center'>
              <AccountBalanceIcon fontSize='small' className='mt-2 mr-2' />
              <label className='block mb-2'>
                Sender ID:
                <select
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  className='border p-2 rounded w-full bg-gray-800 text-white'
                >
                  <option value=''>Select Sender</option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {selectedSender && (
              <div className='mt-4 p-4 bg-gray-800 rounded'>
                <p className='text-lg text-white'>
                  Sender Balance: {selectedSender.balance}
                </p>
              </div>
            )}

            {/* Receiver Section */}
            <div className='flex items-center'>
              <SwapHorizIcon fontSize='small' className='mt-2 mr-2' />
              <label className='block mb-2'>
                Receiver ID:
                <select
                  value={receiverId}
                  onChange={(e) => setReceiverId(e.target.value)}
                  className='border p-2 rounded w-full bg-gray-800 text-white'
                >
                  <option value=''>Select Receiver</option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {selectedReceiver && (
              <div className='mt-4 p-4 bg-gray-800 rounded'>
                <p className='text-lg text-white'>
                  Receiver Balance: {selectedReceiver.balance}
                </p>
              </div>
            )}

            {/* Amount Section */}
            <div className='flex items-center'>
              <TextField
                label='Amount'
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant='outlined'
                className='w-full text-white'
                InputProps={{ className: 'text-white' }}
                InputLabelProps={{ className: 'text-white' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Send Money
              </Button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
