import React from 'react'
import './Filters.css'

const Filters = (props) => {

    function renderRatings() {
        let ratings = [];

        for(let i = 0; i <= 10; i+=.5){
            ratings.push(
                <React.Fragment key={i}>
                    <input type="radio" name="rating" id={i} value={i} checked={i === props.rating} onChange={() => props.setRating(i)} />
                    <label htmlFor={i} className="badge badge-secondary">{i}</label>
                </React.Fragment>
            )
        }
        
        return ratings;
    }

    function renderGenres(genres) {
        if (!genres.length) return;

        return genres.map(genre => (
                <div key={genre.id} className="custom-control custom-checkbox">
                    <input type="checkbox" id={genre.id} value={genre.selected} onChange={() => props.setGenres(genre)} />
                    <label htmlFor={genre.id}>{genre.name}</label>
                </div>
            )
        )
    }

    return ( 
        <section className={ (props.isOpen ? 'open ' : '') + 'Filters' }>
            <h2>Filters</h2>
            <div className="body">
                <fieldset>
                    <legend>Genres</legend>
                    { renderGenres(props.genres) }
                </fieldset>
                <fieldset>
                    <legend>Rating</legend>
                    { renderRatings() }
                </fieldset>
            </div>
        </section>
     );
}
 
export default Filters;