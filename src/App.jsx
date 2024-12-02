import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import References from './pages/References';
import GardenCats from './pages/GardenCats';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Services />} />
          <Route path="/inspiration" element={<Gallery />} />
          <Route path="/referenser" element={<References />} />
          <Route path="/tradgardskatter" element={<GardenCats />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;