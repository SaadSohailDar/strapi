import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Homepage() {
    
    const {loading, error, data} = useFetch('http://localhost:1340/api/reviews');
   
    
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    if(!data) return ;
    console.log("data is not ",data);
  return (
    <div>
        {data.map((review,index)=>{
          <div key={index} className='review-card'>
                <h2>{review.title}</h2>
                {/* <div className='rating'>{review.rating}</div>
                <h2>{review.title}</h2>

                <small>console List</small>

                <p>{review.body}</p>
                <Link to={'/details/${review.id}'}>Read More</Link> */}
          </div>
        })
        }
    </div>
  )
}



{/* 
<div key={data.id} className='review-card'>
                
                <div className='rating'>{data.rating}</div>
                <h2>{data.id}</h2>

                <small>cosnole List</small>

                <p>{data.body}</p>
                <Link to={'/details/${review.id}'}>Read More</Link>
            </div>
        ) */}


        