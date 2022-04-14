/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies,
        CryptoDetails, News } from './Components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar"><Navbar /></div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="exchanges" element={<Exchanges />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="crypto/:coinId" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">Some</div>
    </div>

  );
}

export default App;
