import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // we don't want to minuplate our state, so
      // just concat the action.payload.data to the 
      // beginning of the state array with ES6 syntax
      return [action.payload.data, ...state]
  }
  console.log('aciton recieved: ', action);
  return state
}