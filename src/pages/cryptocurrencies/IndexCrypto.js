import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem';
import IndexCoin from '../cryptocoin/IndexCoin';
import './IndexCrypto.css';
import NavBar from '../../layout/NavBar';
import SearchInput from '../../components/searchinput/SearchInput';
import ContainerCurrencies from './ContainerCurrencies';
import { currenciesClient as createCurrenciesClient } from '../../services/currencies-client';
import { favoritesRepository as createFavoritesRepository } from '../../helpers/favoriteRepository';

const IndexCrypto = () => {
  const [searchWord, setSearchWord] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const currenciesClient = createCurrenciesClient();
  const favoritesRepository = createFavoritesRepository();

  const handleInputChange = (event) => {
    // event.preventDefault();
    const searchWord = event.target.value;
    setSearchWord(searchWord.toLowerCase());
    console.log(favorites);
  };

  const handleStarChange = (e, coin, favorites) => {
    e.preventDefault();
    if (!favoritesRepository.containFavorite(coin, favorites)) {
      const newList = favoritesRepository.addFavorite(coin, favorites);
      setFavorites(newList);
      favoritesRepository.saveToLocalStorage(newList);
      // console.log('adicinou', favorites);
      return;
    }
    const newList = favoritesRepository.removeFavorite(coin, favorites);
    setFavorites(newList);
    favoritesRepository.saveToLocalStorage(newList);
    // console.log('removeu', favorites);
  };

  useEffect(() => {
    async function fetchData() {
      const currencies = await currenciesClient.getCurrencies();
      setCurrencies(currencies);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const coinsFavorites = JSON.parse(favoritesRepository.getLocalStorage());
    setFavorites(coinsFavorites);
  }, []);

  return (
    <>
      <NavBar />
      <SearchInput onChange={handleInputChange} />
      <ContainerCurrencies>
        {currencies
          .filter((coin) => {
            return coin.id.includes(searchWord);
          })
          .map((coin) => {
            return (
              <Link to={`/coin/${coin.id}`} element={<IndexCoin />} key={coin.id}>
                <CoinItem
                  coin={coin}
                  onClick={(e) => handleStarChange(e, coin, favorites)}
                  isFav={favoritesRepository.alreadyFavorite(coin, favorites)}
                />
              </Link>
            );
          })}
      </ContainerCurrencies>
    </>
  );
};

export default IndexCrypto;
