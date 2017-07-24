import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  //any key that we provide to combine reducers ends up as a key on our global state
  WeatherReducer: WeatherReducer
});

export default rootReducer;
