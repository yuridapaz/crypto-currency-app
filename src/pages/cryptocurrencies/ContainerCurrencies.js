import React from 'react';

const ContainerCurrencies = ({ children }) => {
  return (
    <>
      <div className='container'>
        <div>
          <div className='heading'>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Market Cap</p>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ContainerCurrencies;
