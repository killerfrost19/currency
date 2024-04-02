import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import {About, Contact, Prices, Home} from './components/pages';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/prices' element={<Prices/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
