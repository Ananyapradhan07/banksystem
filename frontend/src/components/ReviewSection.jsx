import React from 'react';

const ReviewSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {/* Individual review items */}
      <div className='bg-gray-800 p-6 rounded shadow-md text-text-300'>
        <h3 className='text-lg font-semibold mb-2'>Customer Review 1</h3>
        <p className='text-gray-600'>Positive feedback about our services.</p>
      </div>
      <div className='bg-gray-800 p-6 rounded shadow-md text-text-300'>
        <h3 className='text-lg font-semibold mb-2'>Customer Review 2</h3>
        <p className='text-gray-600'>
          Another satisfied customer sharing their experience.
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;
