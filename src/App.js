
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './component/Navbar';
import Currency from './component/Currency';
import Area from './component/Area';
import Component from './component/Component';
import Temperature from './component/Temperature';
import Exchange from './component/Exchange';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
          <Route index element={<Home/>} />
          <Route path="/currency" element={<Exchange />} />
          <Route path="/component" element={<Component />} />
          <Route path="/component/area" element={<Area />}/>
          <Route path="/component/temperature" element={<Temperature />}/>
            {/* </Route> */}
         
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
