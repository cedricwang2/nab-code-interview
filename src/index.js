import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DashBoardPage from './components/pages/DashBoardPage/DashBoardPage';
import reportWebVitals from './reportWebVitals';
import SimpleRouter from './components/router/SimpleRouter'

ReactDOM.render(
  <React.StrictMode>
    <SimpleRouter>
        <DashBoardPage />
    </SimpleRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
