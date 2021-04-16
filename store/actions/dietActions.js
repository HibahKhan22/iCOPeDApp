import { GET_DIET, SET_ERROR_DIET,GET_WEATHER, SET_ERROR } from '../types';
import {diet_api_key2,diet_api_key, diet_app_id,openweathermap_api_key} from '../../config.json';

export const getDiet = (food, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      //const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);
      const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${diet_app_id}&app_key=${diet_api_key2}`);
      if (!res.ok) {
        const resData1 = await res.json();
        throw new Error(resData1.message);
      }
      
      const resData1 = await res.json();
      console.log("DietMax",resData1);
      dispatch({
        type: GET_DIET,
        payload: resData1,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR_DIET,
    payload: err,
  };
};