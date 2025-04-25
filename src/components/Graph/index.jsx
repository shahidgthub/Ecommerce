import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { week: 'Week 1', target: 100, yourTaps: 90 },
  { week: 'Week 2', target: 120, yourTaps: 110 },
  { week: 'Week 3', target: 130, yourTaps: 125 },
  { week: 'Week 4', target: 140, yourTaps: 130 },
  { week: 'Week 5', target: 150, yourTaps: 145 },
  { week: 'Week 6', target: 160, yourTaps: 155 },
  { week: 'Week 7', target: 170, yourTaps: 160 },
];

const Graph = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">Taps History</h1>

      <div className="w-full h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#10b981" name="Target" />
            <Bar dataKey="yourTaps" fill="#3b82f6" name="Your Taps" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
