import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import OfficesCleaning from './pages/services/OfficesCleaning';
import FitnessCleaning from './pages/services/FitnessCleaning';
import HealthCleaning from './pages/services/HealthCleaning';
import EducationCleaning from './pages/services/EducationCleaning';
import HospitalityCleaning from './pages/services/HospitalityCleaning';
import RetailCleaning from './pages/services/RetailCleaning';
import Process from './pages/Process';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import useScrollMotion from './hooks/useScrollMotion';
import './App.css';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  useScrollMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('page-transition');
    const timer = window.setTimeout(() => {
      root.classList.remove('page-transition');
    }, 180);

    return () => {
      window.clearTimeout(timer);
      root.classList.remove('page-transition');
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <div key={location.pathname} className="page-shell">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/offices" element={<OfficesCleaning />} />
            <Route path="/services/fitness" element={<FitnessCleaning />} />
            <Route path="/services/health" element={<HealthCleaning />} />
            <Route path="/services/education" element={<EducationCleaning />} />
            <Route path="/services/hospitality" element={<HospitalityCleaning />} />
            <Route path="/services/retail" element={<RetailCleaning />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
