import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem';
import IndexCoin from '../cryptocoin/IndexCoin';
import './IndexCrypto.css';
import NavBar from '../../layout/NavBar';
import SearchInput from '../../components/searchinput/SearchInput';
import ContainerCurrencies from './ContainerCurrencies';
import { currenciesClient as createCurrenciesClient } from '../../services/currencies-client';

const IndexCrypto = () => {
  const [searchWord, setSearchWord] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const currenciesClient = createCurrenciesClient();

  const handleChange = (event) => {
    // event.preventDefault();

    const searchWord = event.target.value;
    setSearchWord(searchWord.toLowerCase());
  };

  useEffect(() => {
    async function fetchData() {
      const currencies = await currenciesClient.getCurrencies();
      setCurrencies(currencies);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <SearchInput onChange={handleChange} />
      <ContainerCurrencies>
        {currencies
          .filter((coin) => {
            return coin.id.includes(searchWord);
          })
          .map((coin) => {
            return (
              <Link to={`/coin/${coin.id}`} element={<IndexCoin />} key={coin.id}>
                <CoinItem coin={coin} />
              </Link>
            );
          })}
      </ContainerCurrencies>
    </>
  );
};

export default IndexCrypto;
