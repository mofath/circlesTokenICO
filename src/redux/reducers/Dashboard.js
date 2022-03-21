import {GET_CRYPTO_DATA} from 'shared/constants/ActionTypes';

const initialState = {
  cryptoData: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO_DATA:
      return {
        ...state,
        cryptoData: action.payload,
      };

    default:
      return state;
  }
};
export default dashboardReducer;
