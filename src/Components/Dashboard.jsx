import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto bg-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Music Dashboard</h1>
      <h2 className="text-sm font-semibold mb-10 text-center text-black">Welcome to my dashboard!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Total Songs</h2>
          <p className="text-lg">500</p>
        </div>
        <div className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Total Artists</h2>
          <p className="text-lg">200</p>
        </div>
        <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Total Plays</h2>
          <p className="text-lg">10000</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

