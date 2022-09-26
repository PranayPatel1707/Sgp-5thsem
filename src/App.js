import Login from './Login';
import Header from './header';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Edit from './Edit_labour';
import List from './List_labour';
import TakeAttendance from './take_attendance';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/About" element={<About/>} />
        <Route path="Edit-labour/:id" element={<Edit/>} />
        <Route path="/List_labour" element={<List/>} />
        <Route path="/take_attendance" element={<TakeAttendance/>} />
      </Routes>      
    </div>
    </Router>
  );
}

export default App;
