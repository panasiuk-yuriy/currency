const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const loadCurrencyRate = () => {
  return (
    fetch(API_URL)
      .then(responce => responce.json())
  )
}
