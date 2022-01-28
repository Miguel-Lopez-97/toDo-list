import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Home} from './Components/Home/Home'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
