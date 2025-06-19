import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import Mac from './pages/Mac';
import iPad from './pages/iPad';
import iPhone from './pages/iPhone';
import Watch from './pages/Watch';
import AirPods from './pages/AirPods';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<iPad />} />
            <Route path="/iphone" element={<iPhone />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/airpods" element={<AirPods />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;