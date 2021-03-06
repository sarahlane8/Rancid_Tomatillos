import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './Movies.css'


const Movies = ({ movieData, clearMovies }) => {
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
        clearMovies={clearMovies}
      />
    )
  })

  return (
    <section className='cardContainer'>
      {movieCards}
    </section>
  )
}


export default Movies
