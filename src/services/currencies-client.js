import axios from 'axios';

function currenciesClient() {
  return {
    getCurrencies: async () => {
      try {
        const result = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        return result.data;
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}

export { currenciesClient };
