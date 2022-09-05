import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HeadNav from './components/header';
import Home from './routes/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
        <header>
          <div>SHOP</div>
          <HeadNav></HeadNav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
