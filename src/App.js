import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexCrypto from './pages/cryptocurrencies/IndexCrypto';
import IndexCoin from './pages/cryptocoin/IndexCoin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexCrypto />} />
        <Route path='/coin' element={<IndexCoin />}>
          <Route path=':coinId' element={<IndexCoin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
