import React from 'react';

const Speakers = () => {
  return (
    <div className="flex justify-center items-center" style={{marginTop: '1500px'}}> {/* Adjust the margin as needed */}
      <div className="glass-morphic p-6 rounded-lg w-11/12 max-w-4xl">
        <div className="relative overflow-hidden h-[275px]">
          <div className="scrolling-cards flex space-x-6 animate-scroll">
            <div className="card w-[275px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 1</h3>
              <p>Some content for card 1.</p>
            </div>
            <div className="card w-[275px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 2</h3>
              <p>Some content for card 2.</p>
            </div>
            <div className="card w-[275px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>Some content for card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
