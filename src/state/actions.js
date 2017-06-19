import moment from 'moment'
import movies from './movies'

// movies contains the results of two API requests
// 1. combine the results of these requests
let moviesOne = movies[0];
let moviesTwo = movies[1];
let allMovies = moviesOne.concat(moviesTwo);

// 2. each movie object in the results needs a releaseYear attribute added

allMovies.forEach((obj)=> {
  let year = moment(obj.releaseDate, "YYYY-MM-DD").year();
  obj.releaseYear = year;}
)

// 3. sort the results FIRST by year THEN by title
let allMoviesYearSorted = allMovies.sort(sort);
//
function sort(a, b) {
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }else if (a.releaseYear < b.releaseYear) {
    return -1;
  }

  if (a.title < b.title) {
    return -1;
  }else if (a.title > b.title) {
    return 1;
  }else {
    return 0;
  }
}

export function getPopularMovies () {

  const combinedResults = allMoviesYearSorted;

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
