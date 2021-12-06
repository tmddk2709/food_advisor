import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GenerateMealPlan from './components/GenerateMealPlan';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ImageVerification from './components/ImageVerification';

import './App.css'
import StickyFooter from './components/StickyFooter';
import { useMyContext } from './context';

const App = () => {

  const { state, dispatch } = useMyContext();

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/imagesearch' element={<ImageVerification />} />
            <Route exact path='/mealplan' element={<GenerateMealPlan />} />
            {/* <Route exact path='/image' element={<ImageVerification />} /> */}
          </Routes>
        </div>
      </div>
      <StickyFooter />
    </div >
  );
}

export default App;
