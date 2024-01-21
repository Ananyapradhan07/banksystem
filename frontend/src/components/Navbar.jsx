import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='bg-gray-900 text-white border-b border-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <span className='text-xl font-semibold ml-2'>
              <NavLink
                to='/'
                className='text-white'
                activeClassName='font-bold'
              >
                Flux Bank
              </NavLink>
            </span>
          </div>
          {/* Desktop navigation */}
          <div className='hidden md:flex md:items-center md:ml-10'>
            <ul className='flex space-x-4'>
              <li>
                <NavLink
                  to='/'
                  className='hover:bg-gray-800 px-3 py-2 rounded-md'
                  activeClassName='font-bold'
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/transactions'
                  className='hover:bg-gray-800 px-3 py-2 rounded-md'
                  activeClassName='font-bold'
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/customers'
                  className='hover:bg-gray-800 px-3 py-2 rounded-md'
                  activeClassName='font-bold'
                >
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/send-money'
                  className='hover:bg-gray-800 px-3 py-2 rounded-md'
                  activeClassName='font-bold'
                >
                  Send Money
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile navigation */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleNav} className='focus:outline-none'>
              {isNavOpen ? (
                <svg
                  className='h-6 w-6 fill-current text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    id='close'
                    d='M6 18L18 6M6 6l12 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6 fill-current text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    id='hamburger'
                    d='M4 6h16M4 12h16m-7 6h7'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isNavOpen ? '' : 'hidden'} bg-gray-900`}>
        <NavLink
          to='/'
          className='block px-4 py-2 rounded-md text-white hover:bg-gray-800'
          activeClassName='font-bold'
          exact
        >
          Home
        </NavLink>
        <NavLink
          to='/transactions'
          className='block px-4 py-2 rounded-md text-white hover:bg-gray-800'
          activeClassName='font-bold'
        >
          Transactions
        </NavLink>
        <NavLink
          to='/customers'
          className='block px-4 py-2 rounded-md text-white hover:bg-gray-800'
          activeClassName='font-bold'
        >
          Customers
        </NavLink>
        <NavLink
          to='/send-money'
          className='block px-4 py-2 rounded-md text-white hover:bg-gray-800'
          activeClassName='font-bold'
        >
          Send Money
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
