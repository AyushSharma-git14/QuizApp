// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import QuizApp from './compo/QuizApp';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizApp/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
