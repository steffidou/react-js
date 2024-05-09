import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-white p-8 text-center">
        <h1 className="text-3xl text-black font-semibold mb-4">Welcome, Admin!</h1>
        <p className="text-gray-700">This is the main content area of the Admin.</p>
      </main>
    );
  }
}

export default Admin;
