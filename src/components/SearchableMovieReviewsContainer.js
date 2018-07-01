// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
 `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state={
      reviews: [],
      searchTerm: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(BASE_URL + this.state.searchTerm)
    .then(res => res.json())
    .then(res => this.setState({
      reviews: res.results
    }))
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input onChange={this.handleChange}
            id="input"
            type="text"
            value={this.state.searchTerm}
          />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
