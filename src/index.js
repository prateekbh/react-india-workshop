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
import Outerwear from './routes/outerwear';
import Product from './routes/product';

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
          <Route path="/men" element={<Outerwear/>} />
          <Route path="/women" element={<Outerwear isWomen={true}/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
