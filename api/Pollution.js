import { openweathermap_api_key } from '../config.json';
import store from '../store';

export async function getPollution(){

const state = store.getState();
console.log("stato: ",state);
const lat = state.weather.data.coord.lat;
const lon = state.weather.data.coord.lon;
console.log("latitudine: ", lat);
  
try {
    let pollutionData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${openweathermap_api_key}`);
    let result = await pollutionData.json();
    //pollutionData = null;
    return result;
    
} catch (error) {
    throw error;
    
}

};

