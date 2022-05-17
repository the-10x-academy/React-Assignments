import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const information = {
  Name:"Alan Ford",
  EmployeeID:"00005152",
  Time:"9:00",
  date:"24-05-2016",
  Email:"alan.ford@email.nl",
  Phone:"+31123456789",
  Status:"In Progress",
  Door:"mark",
  time2:"10:30",
  Img:"https://www.w3schoola.com/howto/ing_avatar.png",
};

ReactDOM.render(
  <React.StrictMode>
    <App information={information} />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
