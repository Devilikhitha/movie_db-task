



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Upcoming.css';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&page=${currentPage}`;
                if (searchTerm.trim() !== '') {
                    url = `https://api.themoviedb.org/3/search/movie?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&query=${searchTerm}&page=${currentPage}`;
                }
                const response = await axios.get(url);
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [currentPage, searchTerm]);

    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset page number when search term changes
    };

    const handleSearch = () => {
        // Fetch movies based on the search term
        setCurrentPage(1); // Reset page number when performing a new search
    };

    const renderPagination = () => {
        const pagesToShow = 5; // Number of page numbers to show around the current page
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        if (totalPages > pagesToShow) {
            if (endPage === totalPages) {
                startPage = totalPages - pagesToShow + 1;
            } else if (startPage === 1) {
                endPage = pagesToShow;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
                    {i}
                </button>
            );
        }

        return (
            <>
                {startPage > 1 && (
                    <button onClick={() => handlePageChange(1)}>1</button>
                )}
                {startPage > 2 && (
                    <span>...</span>
                )}
                {pages}
                {endPage < totalPages - 1 && (
                    <span>...</span>
                )}
                {endPage < totalPages && (
                    <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                )}
            </>
        );
    };

    return (
        <div className="upcoming">
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search movies..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="movie-cards">
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} className="link">
                        <div className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>Rating: {movie.vote_average.toFixed(1)}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pagination">
                {renderPagination()}
            </div>
        </div>
    );
};

export default Upcoming;






























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Upcoming.css';
// import { Link } from 'react-router-dom';

// const Upcoming = () => {
//     const [movies, setMovies] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&page=${currentPage}`;
//                 if (searchTerm.trim() !== '') {
//                     url = `https://api.themoviedb.org/3/search/movie?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&query=${searchTerm}&page=${currentPage}`;
//                 }
//                 const response = await axios.get(url);
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [currentPage, searchTerm]);

//     const handleSearchChange = event => {
//         setSearchTerm(event.target.value);
//         setCurrentPage(1); // Reset page number when search term changes
//     };

//     return (
//         <div className="upcoming">
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     placeholder="Search movies..."
//                 />
//                 <button onClick={() => setCurrentPage(1)}>Search</button>
//             </div>
//             <div className="movie-cards">
//                 {movies.map(movie => (
//                     <Link key={movie.id} to={`/movie/${movie.id}`} className='link'>
//                         <div className="movie-card">
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                             <h2>{movie.title}</h2>
//                             <p>Rating: {movie.vote_average}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Upcoming;




































// // Upcoming.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Upcoming.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Upcoming = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&page=1');
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="upcoming">
        
//         <div className="movie-cards">
//                 {movies.map(movie => (
//                     <Link key={movie.id} to={`/movie/${movie.id}`}>
//                         <div className="movie-card">
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                             <h2>{movie.title}</h2>
//                             <p>Rating: {movie.vote_average}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Upcoming;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Upcoming.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// const Upcoming = () => {
//     const [movies, setMovies] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&page=${currentPage}`);
//                 setMovies(response.data.results);
//                 setTotalPages(response.data.total_pages);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [currentPage]);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPagination = () => {
//         const pagesToShow = 5; // Number of page numbers to show around the current page
//         const pages = [];
//         let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
//         let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

//         if (totalPages > pagesToShow) {
//             if (endPage === totalPages) {
//                 startPage = totalPages - pagesToShow + 1;
//             } else if (startPage === 1) {
//                 endPage = pagesToShow;
//             }
//         }

//         for (let i = startPage; i <= endPage; i++) {
//             pages.push(
//                 <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
//                     {i}
//                 </button>
//             );
//         }

//         return (
//             <>
//                 {startPage > 1 && (
//                     <button onClick={() => handlePageChange(1)}>1</button>
//                 )}
//                 {startPage > 2 && (
//                     <span>...</span>
//                 )}
//                 {pages}
//                 {endPage < totalPages - 1 && (
//                     <span>...</span>
//                 )}
//                 {endPage < totalPages && (
//                     <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
//                 )}
//             </>
//         );
//     };

//     return (
//         <div className="upcoming">
//             <div className="movie-cards">
//                 {movies.map(movie => (
//                     <Link key={movie.id} to={`/movie/${movie.id}`}>
//                         <div className="movie-card">
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                             <h2>{movie.title}</h2>
//                             <p>Rating: {movie.vote_average}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>

//             <div className="pagination">
//                 {renderPagination()}
//             </div>
//         </div>
//     );
// };

// export default Upcoming;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Upcoming.css';
// import { Link } from 'react-router-dom';

// const Upcoming = () => {
//     const [movies, setMovies] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&page=${currentPage}`;
//                 if (searchTerm.trim() !== '') {
//                     url = `https://api.themoviedb.org/3/search/movie?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&query=${searchTerm}&page=${currentPage}`;
//                 }
//                 const response = await axios.get(url);
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [currentPage, searchTerm]);

//     const handleSearchChange = event => {
//         setSearchTerm(event.target.value);
//         setCurrentPage(1); // Reset page number when search term changes
//     };

//     return (
//         <div className="upcoming">
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     placeholder="Search movies..."
//                 />
//                 <button onClick={() => setCurrentPage(1)}>Search</button>
//             </div>
//             <div className="movie-cards">
//                 {movies.map(movie => (
//                     <Link key={movie.id} to={`/movie/${movie.id}`} className='link'>
//                         <div className="movie-card">
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                             <h2>{movie.title}</h2>
//                             <p>Rating: {movie.vote_average}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Upcoming;
