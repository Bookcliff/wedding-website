import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeddingInfo from './pages/weddingInfo';
import Rsvp from './pages/rsvp';
import Donations from './pages/donations';
import Nft from './pages/nft';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/weddingInfo" element={<WeddingInfo />} >
          <Route path="rsvp" element={<Rsvp />} />
          <Route path="donations" element={<Donations />} />
          <Route path="nft" element={<Nft />} />
        </Route>
        <Route path="*" element={<>page does not exist</>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
