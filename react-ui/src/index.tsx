import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import { EgeriaLogin } from './components/Login';
import { App } from './components/App';
import { RequireAuth } from './components/RequireAuth';
import { Home } from './components/Home';

const links = [
  {
    "link": "/",
    "label": "Home"
  },
  {
    "link": "/assets/catalog",
    "label": "Catalog"
  },
  {
    "link": "/about",
    "label": "About"
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router basename={process.env.REACT_APP_ROOT_PATH}>
    <Routes>
      <Route path="/" element={<Home links={links} />} />
      <Route path="/*" element={<RequireAuth><App /></RequireAuth>} />
      <Route path="/login" element={<EgeriaLogin />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
