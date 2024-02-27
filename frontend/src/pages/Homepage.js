import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Homepage() {
    const {loading, error, data} = useFetch('http://localhost:1337/review');

    if(loading) return <p>loading</p>
    if(error) return <p>error</p>

  return (
    <div>
        {data.map(review=>(
            <div key={review.id} className='review-card'>
                <div className='rating'>{review.rating}</div>
                <h2>{review.title}</h2>

                <small>cosnole List</small>

                <p>{review.body}</p>
                <Link to={'/details/${review.id}'}>Read More</Link>
            </div>
        ))}
    </div>
  )
}
