import {Outlet} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStaff } from './components/Staff/staffSlice';


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStaff())
  }, [])
  return (
    <div>
      <NavBar/>        
      <Outlet/>
      <Footer/>
    </div>
  )
}