import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Department from './components/Department/Department';
import Salary from './components/Salary/Salary';
import Staff from './components/Staff/Staff';
import NotFound from './components/NotFound/NotFound';
import DetailStaff from './components/Staff/DetailStaff';
import {Provider} from 'react-redux';
import store from './redux/store';
import DetailDepartment from './components/Department/DetailDepartment';

// import DetaiStaff from './Staff/DetaiStaff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>   
    <Routes>
      <Route path="/" element = {<App />}>
        <Route path='staff' element = {<Staff />}/>  
        <Route path='staff/:id' element = {<DetailStaff/>}/>     
        <Route path='department' element = {<Department />}/>
        <Route path='department/:departmentId' element = {<DetailDepartment/>}/> 
        <Route path='salary' element = {<Salary />}/>  
        <Route path='*' element = {<NotFound />}/>         
      </Route>
    </Routes>
    </BrowserRouter> 
    </Provider>  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
