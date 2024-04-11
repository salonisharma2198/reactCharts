import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = ({ labels, data }) => {
  const chartData = labels.map((label, index) => ({
    month: label,
    value: data[index] || 0,
  }));

  return (
    <div className="w-full h-80 flex justify-center items-center">
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Graph;
