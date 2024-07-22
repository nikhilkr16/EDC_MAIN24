import React from "react";
import "./speakercards.css";

function Speakers() {
    return (
      <>
          <div className="glass-morphic lg:m-20 p-4 lg:p-12 shadow-2xl rounded-2xl">
            <div className="p-4">
              <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Speakers</h1>
              </div>
              <div className="mt-6 mb-12">
                <h1 className="text-[35px] font-bold">Some Past Speakers</h1>
              </div>
            </div>
            <div className="flex relative overflow-hidden min-h-[400px] sm:h-auto">
              <div className="scrolling-cards flex space-x-6 animate-scroll1 mr-6">
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                  <p>Some content for card 1.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                  <p>Some content for card 2.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                  <p>Some content for card 3.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 4</h3>
                  <p>Some content for card 4.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 5</h3>
                  <p>Some content for card 5.</p>
                </div>
              </div>

              <div className="scrolling-cards flex space-x-6 animate-scroll2">
              <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
              <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                  <p>Some content for card 1.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                  <p>Some content for card 2.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                  <p>Some content for card 3.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 4</h3>
                  <p>Some content for card 4.</p>
                </div>
                <div className="card w-[275px] sm:w-[300px] h-[275px] sm:h-[275px] p-2 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-end">
                  <img src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mb-2">Card 5</h3>
                  <p>Some content for card 5.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="p-4 rounded-xl bg-[#FED853] font-bold mt-[-50px]">Know More</button>
            </div>
          </div>
      </>
    );
}

export default Speakers
