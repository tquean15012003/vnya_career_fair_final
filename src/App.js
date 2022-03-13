/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyDetail from './Pages/CompanyDetail/CompanyDetail';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navigateAction } from './redux/actions/NavigateActions';

function App() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navigateAction(navigate))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomeTemplate Component={Home} />} />
      <Route path="/home" element={<HomeTemplate Component={Home} />} />
      <Route path="/companydetail/:id" element={<HomeTemplate Component={CompanyDetail} />} />
      <Route path="*" element={<HomeTemplate Component={NotFound} />} />
    </Routes>
  );
}

export default App;