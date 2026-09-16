import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/configureStore";
import "./index.css";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import IncidentPage from "./components/pages/IncidentsPage";

import TopNavBar from "./components/nav/TopNavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="incidents" element={<IncidentPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
