import React from "react";
// import "../components/speakercards.css";

function Speakers() {
    return (
      <>
        <div className="flex flex-wrap justify-center items-center mb-16">
          <div className="glass-morphic pb-6 rounded-lg w-full max-w-7xl mt-6">
            <div className="m-0 border-y-0 p-12">
              <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Speakers</h1>
              </div>
              <div className="mt-12">
                <h1 className="text-xl font-bold">Some Past Speakers</h1>
              </div>
            </div>
            <div className="flex relative overflow-hidden min-h-[400px] bg-slate-300 sm:h-auto">
              <div className=" flex justify-center gap-12 items-center  flex-wrap p-10">
                <div className="card h-72 w-72 speakers_hero1 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64 speakers_hero1-img' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div>
                <div className="card h-72 w-72  sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div>
                <div className="card h-72 w-72  sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div>
                <div className="card h-72 w-72 mt-9 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div>
                 <div className="card h-72 w-72 mt-9 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div> 
                 
                <div className="card h-72 w-72   mt-9 sm:p-4 bg-white bg-opacity-50 rounded-lg shadow-xl flex flex-col justify-center">
                  <img  className='rounded-2xl h-56 w-64' src="https://picsum.photos/200" alt="placeholder image" />
                  <h3 className="text-xl font-semibold mt-3 text-center">Card 1</h3>
                </div>

              </div>

           
            </div>
           
          </div>
        </div>
      </>
    );
}

export default Speakers
