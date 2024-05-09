import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
        <main className="flex-1 bg-white p-8">
            <h2 className="text-2xl text-black text-center font-semibold mb-4">Welcome, Students!</h2>
            <p className='text-center text-black'>This is the main content area of the Students.</p>
        </main>
    )
  }
}

export default Students