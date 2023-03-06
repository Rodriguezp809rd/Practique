import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import User from './pages/User.jsx';
import AddUser from './components/Add-User.jsx';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      
      <Routes>
    

        <Route path='/' exact element={<Home/>} />
        <Route path='/login'   element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/add-user' element={<AddUser />} />
        
      </Routes>
    </div>
  );
}

export default App;
