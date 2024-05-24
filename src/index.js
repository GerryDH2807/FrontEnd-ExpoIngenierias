import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {BrowserRouter}  from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

console.log(
  //process.env.REACT_APP_AUTH0_DOMAIN.App,
  //process.env.REACT_APP_AUTH0_CLIENT_ID
)

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));

/*root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/Callback"
  }}
    >
      <HashRouter>
        <App />
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>

  
);*/


root.render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();