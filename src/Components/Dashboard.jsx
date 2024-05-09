import React, { Component } from 'react'

export class Dashboard extends Component {
    render () {
        return (
            <div className="p-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome User!</h2>
                <div className="flex justify-around mt-4">
                    <div className="flex-1 p-4 border border-gray-300 rounded-lg bg-white text-center">
                        <h3 className="text-xl font-semibold mb-2">Users</h3>
                        <p className="text-blue-500 text-2xl">1000</p>
                    </div>
                    <div className="flex-1 p-4 border border-gray-300 rounded-lg bg-white text-center ml-4">
                        <h3 className="text-xl font-semibold mb-2">Orders</h3>
                        <p className="text-blue-500 text-2xl">500</p>
                    </div>
                    <div className="flex-1 p-4 border border-gray-300 rounded-lg bg-white text-center ml-4">
                        <h3 className="text-xl font-semibold mb-2">Revenue</h3>
                        <p className="text-blue-500 text-2xl">$10,000</p>
                    </div>
                </div>
            </div>
         );
    }
}
export default Dashboard