import React from 'react';
import { RiStarFill } from 'react-icons/ri';

const CoinItem = ({ coin, onClick, isFav }) => {
  return (
    <div className='coin-row'>
      <p className='coin-row-left-icon-p'>
        {coin.market_cap_rank}
        {isFav ? (
          <RiStarFill className='icon-fav favorite' onClick={onClick} />
        ) : (
          <RiStarFill className='icon-fav' onClick={onClick} />
        )}
      </p>

      <div className='img-symbol'>
        <img src={coin.image} alt='' />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
