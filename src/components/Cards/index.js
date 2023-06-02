import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
const Card = () => {
    // to={`movie/${movie.id}`}
    return (
    <div className='cards'>
        <Link  style={{textDecoration:'none', color:'white'}}>
            <div className='info-card'>
                <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" alt="moviePoster" />
                <div  className='movie-overlay'>
                <div className='info-card-title'>
                    movie title                    
                </div>
                <div className='info-card-realeaseDate'>
                    year 1995  
                    <span className='rating'>
                        <i className="fas fa-star" />
                    </span>                   
                </div>
                <div className='movie-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                </div>
                
            </div>
        </Link>
    </div>
  )
}

export default Card;