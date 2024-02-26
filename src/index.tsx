import React from 'react';
import ReactDOM from 'react-dom';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { tmdbApi } from "./services/tmdbApi";
import App from './App';
import reportWebVitals from './reportWebVitals';




  ReactDOM.render(
    <React.StrictMode>
      <ApiProvider api={tmdbApi}>
        <App />
      </ApiProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();
