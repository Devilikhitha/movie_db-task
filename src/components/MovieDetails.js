// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const MovieDetail = () => {
//     const { movieId } = useParams();
//     const [movieDetails, setMovieDetails] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0c9e187736228b6d898949d183c48c50&language=en-US`);
//                 setMovieDetails(response.data);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };
//         fetchMovieDetails();
//     }, [movieId]);

//     if (!movieDetails) {
//         return <div>Loading...</div>;
//     }

//     const { title, overview, poster_path, release_date, vote_average } = movieDetails;

//     return (
//         <div className="movie-detail">
//             <div className="poster">
//                 <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
//             </div>
//             <div className="details">
//                 <h1>{title}</h1>
//                 <p>{overview}</p>
//                 <p>Release Date: {release_date}</p>
//                 <p>Rating: {vote_average}</p>
//             </div>
//         </div>
//     );
// };

// export default MovieDetail;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './MovieDetails.css';

// const MovieDetail = () => {
//     const { movieId } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0c9e187736228b6d898949d183c48c50&language=en-US`);
//                 setMovie(response.data);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [movieId]);

//     if (!movie) {
//         return <div>Loading...</div>;
//     }

//     return (
//         // <div className="movie-detail">
//         //     <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
//         //         <div className="details">
//         //             <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//         //             <div className="info">
//         //                 <h1>{movie.title}</h1>
//         //                 <p>Rating: {movie.vote_average}</p>
                
//         //                 <p>Duration: {movie.runtime} minutes</p>
//         //             <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
//         //                 <p>Release Date: {movie.release_date}</p>
                       
                       
//         //             </div>
//         //         </div>
//         //         <p>{movie.overview}</p>
//         //     </div>
//         // </div>

// <div className="movie-detail">

//     <div className="details">
//         <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//         <div className="info">
//             <h1>{movie.title}</h1>
//             <p>Rating: {movie.vote_average}</p>
    
//             <p>Duration: {movie.runtime} minutes</p>
//         <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
//             <p>Release Date: {movie.release_date}</p>
           
//             <p>{movie.overview}</p>
//         </div>
        
//     </div> 

//     <div className="backdrop">
//             <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Backdrop" className='img' />
//         </div>
// </div>
//     );
// };

// export default MovieDetail;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './MovieDetails.css';

// const MovieDetail = () => {
//     const { movieId } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0c9e187736228b6d898949d183c48c50&language=en-US`);
//                 setMovie(response.data);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [movieId]);

//     if (!movie) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="movie-detail">
//             <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
//                 <div className="details">
//                     <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                     <div className="info">
//                         <h1>{movie.title}</h1>
//                         <p>Release Date: {movie.release_date}</p>
//                         <p>Rating: {movie.vote_average}</p>
//                         <p>Duration: {movie.runtime} minutes</p>
//         <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
//         <p>{movie.overview}</p>
//                     </div>
                    
//                 </div>
               
//             </div>
//         </div>
//     );
// };

// export default MovieDetail;





//cast 








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0c9e187736228b6d898949d183c48c50&language=en-US`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        const fetchCast = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0c9e187736228b6d898949d183c48c50&language=en-US`);
                setCast(response.data.cast);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };

        fetchMovieDetails();
        fetchCast();
    }, [movieId]);

    if (!movie || cast.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail">
            <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                <div className="details">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="info">
                        <h1>{movie.title}</h1>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                        <p>Duration: {movie.runtime} minutes</p>
                        <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
            <div className="cast">
                <h2>Cast</h2>
                <div className="cast-list">
                    {cast.map(actor => (
                        <div key={actor.id} className="actor">
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;





