import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quotes from './pages/Quotes';
import NavBar from './pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RouteSwitch = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/Quotes' element={<Quotes />} />
        </Routes>
      </div>
    </>
  )
}

export default RouteSwitch;