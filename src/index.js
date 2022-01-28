import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Home} from './Components/Home/Home'
import {Days} from './Components/ToDoList/Container-Days'
import {Header} from './Components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<Days/>}/>
          <Route path='*' element={<Navigate replace to="/"/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
