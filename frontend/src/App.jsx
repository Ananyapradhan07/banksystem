import React from 'react';
import Navbar from './components/Navbar';
import CustomerCard from './components/CustomerCard';
import ReviewSection from './components/ReviewSection';
import HowItWorksSection from './components/HowItWorksSection';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <section className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-text-900 dark:text-white mb-4'>
            Welcome to Flux Bank
          </h1>
          <p className='text-lg text-text-700 dark:text-gray-300'>
            Your esteemed financial partner for secure and innovative financial
            solutions.
          </p>
          {/* Add an illustrative image or icon if desired */}
        </section>

        {/* About the Bank Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-text-800 dark:text-white'>
            About Flux Bank
          </h2>
          <p className='text-lg text-text-700 dark:text-gray-300'>
            At Flux Bank, we are unwavering in our dedication to providing
            steadfast and dependable banking services, meticulously tailored to
            meet your intricate financial requirements. Our commitment is to
            deliver an unparalleled customer experience, coupled with
            cutting-edge financial solutions that reflect our dedication to your
            financial prosperity.
          </p>
        </section>

        {/* Customer Cards Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-text-800 dark:text-white'>
            Our Valued Customers
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((customer) => (
              <CustomerCard key={customer} name={`Customer ${customer}`} />
            ))}
          </div>
        </section>

        {/* Review Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-text-800 dark:text-white'>
            Customer Reviews
          </h2>

          <ReviewSection />
        </section>

        {/* How It Works Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-text-800 dark:text-white'>
            How Flux Bank Works
          </h2>

          <HowItWorksSection />
        </section>

        {/* Services Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-text-800 dark:text-white'>
            Explore Our Premium Services
          </h2>
          <p className='text-lg text-text-700 dark:text-gray-300 mb-8'>
            Embark on a journey of discovery through our meticulously curated
            suite of financial services and products, designed to cater to the
            nuances of your unique needs. Whether you are cultivating savings
            for the future, orchestrating strategic investments, or crafting
            plans for significant purchases, rest assured, Flux Bank has you
            enveloped in a realm of opulence and financial opulence.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
