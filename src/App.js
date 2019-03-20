import React, { Component } from 'react';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies';
import Filters from './components/Filters/Filters';

class App extends Component {
    API_KEY = 'a435d2e03c42840a765048a965b74a53';
    MOVIES_URL = `//api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US`;
    GENRES_URL = `//api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`;

    constructor() {
        super();
        
        this.state = {
          openFilters: false,
          movies: [],
          genres: [],
          filteredMovies: [],
          selectedGenres: [],
          rating: 8
        };
      }


    async componentWillMount() {
        const moviesResponse = await fetch(this.MOVIES_URL).then(res => res.json()).then(res => res.results);
        const genresResponse = await fetch(this.GENRES_URL).then(res => res.json()).then(res => res.genres);
        let genres = [];
        
        // Add genres to movie objects and sort
        const movies = moviesResponse.map(movie => {
            movie.genres = movie.genre_ids.map(genreId => genresResponse.find(g => g.id === genreId).name);
            genres = [...genres, ...movie.genre_ids];
            
            return movie;
        }).sort((a, b) => b.vote_average - a.vote_average);
        
        
        // Get only the genres of the movies displayed
        genres = Array.from(new Set(genres));
        genres = genres.map(genreId => genresResponse.find(genre => genre.id === genreId))
            .sort((a, b) => a.name < b.name ?  -1 : a.name > b.name ?  1 : 0);

        this.setState({ movies, genres });
        this.filterMovies(this.state.rating, this.state.selectedGenres);
    }    

    getMoviesByGenre = (genre) => {
        genre.selected = !genre.selected;
        const selectedGenres = this.state.genres.filter(genre => genre.selected).map(genre => genre.id);
        this.filterMovies(this.state.rating, selectedGenres);
        this.setState({ selectedGenres });
    }
    
    getMoviesByRating = (rating) => {
        this.filterMovies(rating, this.state.selectedGenres);
        this.setState({ rating })
    }

    filterMovies = (rating, genres) => {
        let movies = this.state.movies.filter(movie => {
            return movie.genre_ids.filter(genre => 
                genres.indexOf(genre) !== -1
            ).length
        });

        movies = genres.length ? movies : this.state.movies;
        movies = movies.filter(movie => movie.vote_average >= rating);
        
        this.setState({ filteredMovies: movies });
    }

    onFilterToggle = () => {
        this.setState({ openFilters: !this.state.openFilters })
    }

    render() {
        return (
            <div className="App">
                <Header toggleFilters={this.onFilterToggle} isOpen={this.state.openFilters} />
                <Movies movies={this.state.filteredMovies} />
                <Filters 
                    genres={this.state.genres} 
                    rating={this.state.rating}
                    isOpen={this.state.openFilters} 
                    setGenres={this.getMoviesByGenre} 
                    setRating={this.getMoviesByRating} />
            </div>
        );
    }
}

export default App;
