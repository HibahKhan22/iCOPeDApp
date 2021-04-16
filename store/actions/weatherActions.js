import { GET_WEATHER, SET_ERROR } from '../types';
import { openweathermap_api_key } from '../../config.json';

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);
      //const res1 = await fetch(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${food}&app_id=${die_app_id}&app_key=${diet_api_key}`);
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      console.log(resData);
      dispatch({
        type: GET_WEATHER,
        payload: resData,
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
    type: SET_ERROR,
    payload: err,
  };
};

