import axios from 'axios';

function cryptoCoinClient() {
  return {
    setCoinName: (params) => {
      return params;
    },
    getCryptoCoin: async (coinName) => {
      try {
        const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`);
        return result.data;
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}

export { cryptoCoinClient };
