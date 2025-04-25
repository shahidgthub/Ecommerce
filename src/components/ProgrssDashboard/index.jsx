import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaCheckCircle } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';

const ProgressDashboard = () => {
  const progressValue = 90;

  return (
    <div className='w-full max-w-6xl p-4 sm:p-6 bg-white rounded-lg'>
      {/* Main container with flexbox to position the sections horizontally */}
      <div className='flex justify-between'>

        {/* Progress Section */}
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold mb-4'>Progress</h1>
          {/* Progress Circle */}
          <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]">
            {/* Background Circle */}
            <div className="absolute top-0 left-0 w-full h-full">
              <CircularProgressbar
                value={100}
                styles={buildStyles({
                  pathColor: "#e5e7eb",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
            {/* Foreground Circle with progress value */}
            <div className="absolute top-[20px] left-[20px] w-[140px] h-[140px] sm:top-[30px] sm:left-[30px]">
              <CircularProgressbar
                value={progressValue}
                text={`${progressValue}%`}
                styles={buildStyles({
                  pathColor: "#10b981",
                  trailColor: "#d1fae5",
                  textColor: "#111827",
                  textSize: '18px',
                })}
              />
            </div>
          </div>
        </div>

        {/* Current Status Section */}
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold mb-4'>Current Status</h1>
          {/* Level Information */}
          <div className="space-y-4">
            {/* Level 1 */}
            <div className='flex justify-between items-center'>
              <p className='text-green-600 font-semibold'>Level: 1</p>
              <p className='text-sm text-gray-500'>3.00%</p>
            </div>
            {/* Level 2 */}
            <div className='flex justify-between items-center'>
              <p className='text-gray-800 font-semibold'>Level: 2</p>
              <p className='text-sm text-gray-500'>0%</p>
            </div>
            {/* Level 3 */}
            <div className='flex justify-between items-center'>
              <p className='text-gray-800 font-semibold'>Level: 3</p>
              <p className='text-sm text-gray-500'>0%</p>
            </div>
          </div>
        </div>

        {/* Level 1 Icon Section */}
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold mb-4 '>Level: 1</h1>
          {/* Icon for Level 1 */}
          <div className='space-y-6'>
          <FaCheckCircle className="text-green-500 text-lg" />
          <FaCheckCircle className="text-green-500 text-lg" />
          <FaCheckCircle className="text-green-500 text-lg" />
</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProgressDashboard;
