import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectCurrencyUSD = createSelector(
  rootSelector,
  ({ currencyRate }) => {
    if (!currencyRate) {
      return null;
    }

    return currencyRate.find(item => item.ccy === 'USD').sale.slice(0, -3);
  }
);

export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;
