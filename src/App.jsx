import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Map from './pages/Map';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App
