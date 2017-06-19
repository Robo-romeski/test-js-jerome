import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPopularMovies } from '../state/actions'

class GetMoviesBtn extends Component {
  constructor (props) {
    super(props)
  }

  _requestMovies () {
    const { dispatch } = this.props

    dispatch(getPopularMovies())
  }

  render () {
    return (
      <button className="button" onClick={() => {this._requestMovies()}}>
        Get Popular Movies
      </button>
    )
  }
}

export default connect()(GetMoviesBtn)
