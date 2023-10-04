import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav/>} />
      <Route path="log" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
