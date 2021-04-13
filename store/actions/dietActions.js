import { GET_DIET, SET_DIET_ERROR } from '../types';
import {diet_api_key, die_app_id} from '../../config.json';

export const getDiet = (food, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      //const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);
      const res1 = await fetch(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${food}&app_id=${die_app_id}&app_key=${diet_api_key}`);

      if (!res1.ok) {
        console.log(res1);
        const resData1 = await res1.json();
        throw new Error(resData1.message);
      }

      const resData1 = await res1.json();
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
    type: SET_DIET_ERROR,
    payload: err,
  };
};