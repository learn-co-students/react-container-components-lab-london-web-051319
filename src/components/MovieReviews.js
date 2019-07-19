import React from 'react'

const MovieReviews = ({reviews, type}) => {
  return (
    <div className='review-list'>
      {reviews.length === 0 ? 'No Reviews to show.' : reviews.map(review => <div key={`${type}-${review.display_title}`} className='review'>{review.display_title}</div>)}
    </div>
  )
}

export default MovieReviews;