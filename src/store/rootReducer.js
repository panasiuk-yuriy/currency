import { ACTION_TYPES } from './actions';

const initialState = {
  currencyRate: null,
  isLoading: false,
  error: null,
};

export const getRestourantsList = state => state.restourantsList;

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.REQUESTED_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.REQUESTED_DATA_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        currencyRate: payload,
        isLoading: false,
      };
    }

    case ACTION_TYPES.REQUESTED_DATA_FAIL:
      const { payload } = action;

      return {
        currencyRate: null,
        isLoading: false,
        error: payload,

      };

    default:
      return state;
  }
}
