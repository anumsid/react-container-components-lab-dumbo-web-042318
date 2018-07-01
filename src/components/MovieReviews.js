// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return(
    <ul className="review-list">
      {props.reviews.map(review=>{
        return(
          <li className="review" key={review.display_title}>
            <h1>{review.display_title}</h1>
            <a href = {review.link.url}>Link</a>
          </li>
        )

      })
    }
    <ul/>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
