import { combineReducers } from 'redux'
import films from './movies'
function movies (state = [], action) {
  let filmsOne = films[0];
  let filmsTwo = films[1];
  const allFilms = filmsOne.concat(filmsTwo);
  console.log('AllFilms Dem', allFilms);
  state = allFilms;
  console.log('nfl films', films);
  console.log('supposed to be new state', state);
  switch (action.type) {
    case 'GET_MOVIES_SUCCESS':
      return action.movies

    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies
})

export default rootReducer
