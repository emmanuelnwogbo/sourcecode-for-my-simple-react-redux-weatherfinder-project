import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([ action.payload.data ]); //we're putting this in an array because we're going to be having multiple cities being returned
      //or with es6 : return [ action.payload.data, ...state ];
  }
  return state;
}
