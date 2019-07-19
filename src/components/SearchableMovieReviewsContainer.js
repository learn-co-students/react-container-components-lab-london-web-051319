import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import NYT_API_KEY from '../assets/ApiKey'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' 

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    // if (this.state.searchTerm === '') return null
    fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`).then(resp => resp.json())
      .then(data => this.setState({reviews: data.results}))
  }

  updateSearch = ({target: {value}}) => {
    this.setState({searchTerm: value})
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type='text' placeholder='Enter search' value={this.state.searchTerm} onChange={event => this.updateSearch(event)} />
          <button type='submit' >Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} type={'search'}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
