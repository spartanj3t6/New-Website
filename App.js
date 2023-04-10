// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CategoriesPage from './components/CategoriesPage';
import CategoryActivities from './components/CategoryActivities';
import './App.css';
import { ActivitiesProvider } from './ActivitiesContext';

function App() {
  return (
    <ActivitiesProvider>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activities" element={<CategoriesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/categories/:categoryName" element={<CategoryActivities />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ActivitiesProvider>
  );
}

export default App;
