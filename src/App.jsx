import { useState } from 'react'
import './App.css'
import Message from './components/Message'
import MessageClass from './components/Messageclass'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Sidebar from './components/sidebar'
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Admin from './components/Admin'
import TestComponents from './components/Testcomponents';

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
                      <Route exact path="/students" element={<Students/>} />
                    </Routes>
                </div>
              <Footer />
          </div>
       </Router>
  )
}

export default App