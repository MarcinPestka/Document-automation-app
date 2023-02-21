import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Settings from './Routes/Settings';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/settings' element={<Settings/>} />
  </Routes>
);
}
export default Main;