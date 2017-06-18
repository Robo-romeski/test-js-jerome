import React from 'react'
import { connect } from 'react-redux'

export function MoviesContainer(props) {
  console.log('props dem', props);
  return (
      <div className="renderBlock">
      {props.movies.map((m, i) =>
      <div className="Media" key={i}>
      <div className="imgDiv" style={{backgroundImage: 'url(' + m.image + ')', minHeight: '200px'}}>
      </div>
      <div className="Media-body">

        <h1>{m.title}</h1>
        <strong>Price: ${m.price}</strong>
      </div>
        </div>
      )}
      </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
