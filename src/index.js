import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route, Navigate} from 'react-router';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={}/>
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
