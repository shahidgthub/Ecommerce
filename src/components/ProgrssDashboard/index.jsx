import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaCheckCircle } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';

const ProgressDashboard = () => {
  const progressValue = 90;

  return (
    <div className='w-[680px]  p-6'>

      {/* Top Row */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Progress</h1>
        <p className='text-lg  font-bold'>Current Status</p>
        <p className='text-lg font-semibold text-gray-800'>Level: 1</p>
      </div>

      {/* Two Sections Side by Side */}
      <div className='flex justify-between mb-8'>

        {/* Progress Circle */}
        <div className='w-[340px] flex justify-center'>
          <div className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <CircularProgressbar
                value={100}
                styles={buildStyles({
                  pathColor: "#e5e7eb",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            <div className="absolute top-[30px] left-[30px] w-[140px] h-[140px]">
              <CircularProgressbar
                value={progressValue}
                text={`${progressValue}%`}
                styles={buildStyles({
                  pathColor: "#10b981",
                  trailColor: "#d1fae5",
                  textColor: "#111827",
                  textSize: '20px',
                })}
              />
            </div>
          </div>
        </div>

        {/* Level Info */}
        <div className='w-[340px]'>
          <div className='space-y-3'>
            {/* Level 1 */}
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-green-600 font-semibold'>Level: 1</p>
                <p className='text-sm text-gray-500'>3.00%</p>
              </div>
              <FaCheckCircle className="text-green-500 text-lg" />
            </div>

            {/* Level 2 */}
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-gray-800 font-semibold'>Level: 2</p>
                <p className='text-sm text-gray-500'>0%</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-gray-800 font-semibold'>Level: 3</p>
                <p className='text-sm text-gray-500'>0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgressDashboard;
