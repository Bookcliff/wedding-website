import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeddingInfo from './pages/weddingInfo';
import Rsvp from './pages/rsvp';
import Party from './pages/party';
import Registry from './pages/registry';
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
      {/* <Layout style={{ minHeight: "100vh", padding: 24}}> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/weddingInfo" element={<WeddingInfo />} />
        <Route path="rsvp" element={<Rsvp />} />
        <Route path="party" element={<Party />} />
        <Route path="registry" element={<Registry />} />
        <Route path="nft" element={<Nft />} />
        <Route path="*" element={<>page does not exist</>} />
      </Routes>
      {/* </Layout> */}
    </React.StrictMode>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
