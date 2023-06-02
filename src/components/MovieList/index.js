import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieList = () => {

const [movie, setMovie] = useState();

const {id}=useParams()
useEffect (()=>{
  getData();
},[])
const getData=() =>{
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ebab107d0e771faee711646843039664&language=en-US%60`)
  .then((res)=>res.json())
  .then((data)=>setMovie(data))
}

console.log(movie);
  return (
    <div className='movie-list'>
        <div className='movie-intro'>
          <img src={`https://image.tmdb.org/t/p/original${
            movie ? movie.backdrop_path : ""
          }`} alt="" />
        </div>
        <div className='movie-detail'>
            <img src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`} alt="" />
        </div>
        <div className='movie-name'>
            {movie ? movie.original_title : ""}
        </div>
        <div className='vote'>
        {movie ? movie.vote_average : ""}
        </div>
        <div className='tag'>
        {movie ? movie.tagline: ""}
        </div>
        <div className='releaseDate'>
        {movie ? 'Release Date :'+ movie.release_date : ""}
        </div>
    </div>
  )
}
export default MovieList;