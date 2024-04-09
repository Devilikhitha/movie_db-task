import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './searchresults.css'

const SearchResults = ({ searchTerm, searchResults }) => {
    return (
        <div className="search-results">
            <h2>Search Results for "{searchTerm}"</h2>
            <div className="movie-cards">
                {searchResults.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>Rating: {movie.vote_average}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
