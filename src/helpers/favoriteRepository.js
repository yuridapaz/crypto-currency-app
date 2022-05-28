function favoritesRepository() {
  function containFavorite(coin, favoriteList) {
    return favoriteList.find((currentCoin) => currentCoin.id == coin.id);
  }

  function addFavorite(coin, favoriteList) {
    const newCoinList = [...favoriteList, coin];
    return newCoinList;
  }

  function removeFavorite(coin, favoriteList) {
    const newCoinList = favoriteList.filter((coins) => coins.id != coin.id);
    return newCoinList;
  }

  function saveToLocalStorage(items) {
    localStorage.setItem('react-crypto-favorites', JSON.stringify(items));
  }

  function getLocalStorage() {
    return localStorage.getItem('react-crypto-favorites');
  }

  function alreadyFavorite(coin, favoriteList) {
    if (favoriteList.find((currentCoin) => currentCoin.id == coin.id)) return true;

    return false;
  }

  return {
    addFavorite,
    removeFavorite,
    containFavorite,
    saveToLocalStorage,
    getLocalStorage,
    alreadyFavorite,
  };
}

export { favoritesRepository };
