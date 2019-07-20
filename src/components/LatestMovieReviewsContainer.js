import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({ reviews: response.results }));
        }
    
    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} type={'all'} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
