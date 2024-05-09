import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import Students from './Components/Students';

function App() {
  const [count, setCount] = useState(0)
  return (

    <Router>
      <div className="flex flex-col h-screen w-screen">
            <Header />
              <div className="flex flex-1">
                <Sidebar />
                  <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/admin" element={<Admin />} />
                    <Route exact path="/students" element={<Students />} />
                  </Routes>
              </div>
      </div>
    </Router>
  )
}
  
export default App;

