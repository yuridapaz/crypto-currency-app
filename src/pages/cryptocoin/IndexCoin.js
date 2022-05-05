import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './IndexCoin.css';
import ReturnBtn from '../../layout/ReturnBtn';
import CryptoItem from './CryptoItem';
import { cryptoCoinClient as getCryptoCoinClient } from '../../services/coin-client';

const IndexCoin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const cryptoCoinClient = getCryptoCoinClient();

  useEffect(() => {
    async function fetchData() {
      const coinName = cryptoCoinClient.setCoinName(params.coinId);
      const coin = await cryptoCoinClient.getCryptoCoin(coinName);
      setCoin(coin);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='coin-container'>
        <ReturnBtn />
        <CryptoItem coin={coin} />
      </div>
    </>
  );
};

export default IndexCoin;
