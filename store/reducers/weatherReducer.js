import { GET_DIET, GET_NEWS, GET_POL, GET_WEATHER, SET_ERROR, SET_ERROR_DIET, SET_ERROR_NEWS, SET_ERROR_POL } from '../types';

const initialState = {
  data: null,
  error: '',
  data1: null,
  error1: '',
  dataPol: null,
  errorPol: '',
  dataNews: null,
  erroNews: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        error: '',
      };
      case GET_DIET:
        return {
          data1: action.payload,
          error1: '',
        };

      case GET_POL:
          return {
            dataPol: action.payload,
            errorPol: '',
          };

      case GET_NEWS:
            return {
              dataNews: action.payload,
              errorNews: '',
            };
     case SET_ERROR:
       return {
        ...state,
        error: action.payload,
      };

      case SET_ERROR_DIET:
        return {
          ...state,
          error1: action.payload,
        };

      case SET_ERROR_POL:
          return {
            ...state,
            errorPol: action.payload,
        };

        case SET_ERROR_NEWS:
          return {
            ...state,
            errorNews: action.payload,
        };
    
    
    default:
      return state;
  }
};