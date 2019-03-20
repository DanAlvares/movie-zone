import React from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = (props) => {
    return ( 
        <div className="Movies">
            {
                props.movies.map(movie => <Movie movie={movie} key={movie.id} />)            
            }
        </div> 
    );
}
 

export default Movies;