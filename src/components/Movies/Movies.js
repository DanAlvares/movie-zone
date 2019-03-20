import React from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = (props) => {
    return ( 
        <section className="Movies">
            <h2>Now Showing ({props.movies.length})</h2>
            <div>
                {   
                    props.movies.length
                        ? props.movies.map(movie => <Movie movie={movie} key={movie.id} />)
                        : (<div className="alert alert-info">
                                <strong>Heads up!</strong> There are no movies that match your search.
                            </div>)
                }
            </div>
        </section> 
    );
}
 

export default Movies;