import React from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = (props) => {
    return ( 
        <section className="Movies">
            <h2>Now Showing ({props.movies.length})</h2>
            <div>
                {
                    props.movies.map(movie => <Movie movie={movie} key={movie.id} />)
                }
            </div>
        </section> 
    );
}
 

export default Movies;