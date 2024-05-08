import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        {/* Main content of your application */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

