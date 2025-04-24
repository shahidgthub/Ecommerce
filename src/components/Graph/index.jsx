import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = () => {
  // Data for Taps History
  const data = [
    { week: 'Week 1', target: 100, yourTaps: 90 },
    { week: 'Week 2', target: 120, yourTaps: 110 },
    { week: 'Week 3', target: 130, yourTaps: 125 },
    { week: 'Week 4', target: 140, yourTaps: 130 },
    { week: 'Week 5', target: 150, yourTaps: 145 },
    { week: 'Week 6', target: 160, yourTaps: 155 },
    { week: 'Week 7', target: 170, yourTaps: 160 },
  ];

  return (
    <div className='w-full bg-white rounded-lg shadow p-6'>
      <h1 className='text-2xl font-bold mb-6'>Taps History</h1>

      {/* Taps Target vs Your Taps Graph */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="target" fill="#10b981" />
          <Bar dataKey="yourTaps" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>

      {/* Taps History Data Below */}
      <div className='mt-6'>
        <h2 className='text-lg font-semibold text-gray-800'>Your Taps vs Target Taps</h2>
        <div className='space-y-3'>
          {data.map((entry, index) => (
            <div key={index} className='flex justify-between items-center'>
              <p className='text-gray-800 font-semibold'>{entry.week}</p>
              <div className='flex gap-4'>
                <p className='text-sm text-gray-500'>Target: {entry.target}</p>
                <p className='text-sm text-gray-500'>Your Taps: {entry.yourTaps}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;
