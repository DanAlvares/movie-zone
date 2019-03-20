import React, { useState } from 'react'

const Movie = (props) => {
    const [movie, setViewing] = useState(props.movie)

    return ( 
        <section className="Movie" onClick={ () => setViewing({...movie, viewing: movie.viewing = !movie.viewing }) }>
                
            <h2>{ movie.title }<span className="badge badge-info">7.4</span></h2>
            <img className={ movie.viewing ? 'viewing' : ''} src={ '//image.tmdb.org/t/p/w300/' + movie.poster_path } alt="{ props.movie.title }" />
            <div className="body-text">
                <img  src={ '//image.tmdb.org/t/p/w154/' + movie.poster_path } width="70" alt="{ props.movie.title }" />
                <p>{ movie.overview }</p>
                <div className="genres"> 
                    {
                        movie.genres.map(genre => <span className="badge">{genre}</span>)
                    }
                </div>
            </div>
        </section> 
    );
}
 
export default Movie;