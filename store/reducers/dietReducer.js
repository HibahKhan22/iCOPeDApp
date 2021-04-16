import { GET_DIET, SET_ERROR_DIET } from '../types';

const initialState = {
  data: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DIET:
      return {
        data: action.payload,
        error: '',
      };
    case SET_ERROR_DIET:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};