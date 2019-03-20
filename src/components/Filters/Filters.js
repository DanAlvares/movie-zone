import React from 'react'
import './Filters.css'

const Filters = (props) => {

    function renderRatings() {
        let ratings = [];

        for(let i = 0; i <= 10; i+=.5){
            ratings.push(
                <React.Fragment key={i}>
                    <input type="radio" name="rating" id={i} />
                    <label htmlFor={i} className="badge badge-secondary">{i}</label>
                </React.Fragment>
            )
        }
        
        return ratings;
    }

    return ( 
        <section className={ (props.isOpen ? 'open ' : '') + 'Filters' }>
            <h2>Filters</h2>
            <div className="body">
                <fieldset>
                    <legend>Genres</legend>
                    {
                        props.genres.map(genre => 
                            <div key={genre.id} className="custom-control custom-checkbox">
                                <input type="checkbox" id={genre.id} />
                                <label htmlFor={genre.id}>{genre.name}</label>
                            </div>
                        )
                    }
                </fieldset>
                <fieldset>
                    <legend>Rating</legend>
                    {
                        renderRatings()
                    }
                </fieldset>
            </div>
        </section>
     );
}
 
export default Filters;