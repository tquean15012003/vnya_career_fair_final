/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyDetail from './Pages/CompanyDetail/CompanyDetail';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import { useNavigate } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navigateAction } from './redux/actions/NavigateActions';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navigateAction(navigate))
  }, [])

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeTemplate Component={Home} />} />
        <Route path="/home" element={<HomeTemplate Component={Home} />} />
        <Route path="/companydetail/:id" element={<HomeTemplate Component={CompanyDetail} />} />
        <Route path="/contact" element={<HomeTemplate Component={ContactUs} />} />
        <Route path="*" element={<HomeTemplate Component={NotFound} />} />
      </Routes>
    </Fragment>
  );
}

export default App;