import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeddingInfo from "./pages/weddingInfo";
import Rsvp from "./pages/rsvp";
import Party from "./pages/party";
import Registry from "./pages/registry";
import Comments from "./pages/comments";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Analytics } from "dappling-analytics/react";
import MainHeader from "./components/header";
import MainFooter from "./components/footer";
import Guests from "./pages/guests";
import Photos from "./pages/photos";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Analytics />
      <Layout style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/pages/weddingInfo"
            element={
              <>
                <MainHeader />
                <WeddingInfo />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/rsvp"
            element={
              <>
                <MainHeader />
                <Rsvp />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/party"
            element={
              <>
                <MainHeader />
                <Party />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/photos"
            element={
              <>
                <MainHeader />
                <Photos />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/guests"
            element={
              <>
                <MainHeader />
                <Guests />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/registry"
            element={
              <>
                <MainHeader />
                <Registry />
                <MainFooter />
              </>
            }
          />
          <Route
            path="/messages"
            element={
              <>
                <MainHeader />
                <Comments />
                <MainFooter />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <MainHeader />
                <>page does not exist</>
                <MainFooter />
              </>
            }
          />
        </Routes>
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
