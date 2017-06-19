import moment from 'moment'
import movies from './movies'


export function getPopularMovies () {
  let moviesOne = movies[0];
  let moviesTwo = movies[1];
  const allMovies = moviesOne.concat(moviesTwo);
  console.log('AllMovies Dem', allMovies);
  // state = allMovies;
  console.log('nfl films', movies);
  // console.log('supposed to be new state', state);
  console.log('from action.js (in getPopularMovies)', movies);
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //

  const combinedResults = []

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
