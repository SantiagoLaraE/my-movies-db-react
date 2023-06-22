import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { MovieTrailerProvider } from "@context/movieTrailer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieTrailerProvider>
        <App />
      </MovieTrailerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
