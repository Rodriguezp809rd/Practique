import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MaybeShowNavbar from './components/MaybeShowNavbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <MaybeShowNavbar>
<Navbar/>
</MaybeShowNavbar>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
