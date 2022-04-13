/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';

import { Navbar } from './Components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar"><Navbar /></div>
      <div className="main">Some</div>
      <div className="footer">Some</div>
    </div>

  );
}

export default App;
