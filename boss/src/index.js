import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import Userdata from './components/context/Userdata';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Userdata>
   <App />
   </Userdata>
  </React.StrictMode>
);

