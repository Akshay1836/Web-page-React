import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Services from './Routes/Services';
import Contacts from './Routes/Contacts';
import About from './Routes/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
