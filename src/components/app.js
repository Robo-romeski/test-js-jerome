import React from 'react'
import GetMoviesBtn from './get-movies-btn'
import MoviesContainer from './movies-container'

export function App(props) {
  return (
    <main>
    <div className="title">
      <h1>Welcome to the Doorsteps Movies!</h1>
      <GetMoviesBtn />
    </div>
      <MoviesContainer props={props}/>
    </main>

  )
}

export default App
