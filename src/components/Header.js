// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Header.css'

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo">
//                 <h1>MovieDb</h1>
//             </div>
//             <div className="nav-links">
//                 <ul>
//                     <li><Link to="/">Popular</Link></li>
//                     <li><Link to="/top-rated">Top Rated</Link></li>
//                     <li><Link to="/upcoming">Upcoming</Link></li>
//                 </ul>
//             </div>
//             {/* <div className="search-bar">
//                 <input type="text" placeholder="Search..." />
//                 <button>Search</button>
//             </div> */}
//         </div>
//     );
// };

// export default Header;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import axios from 'axios'; // Import axios for API calls
// import './Header.css';

// const Header = () => {
//     const [searchTerm, setSearchTerm] = useState(''); // State for storing search term
//     const [searchResults, setSearchResults] = useState([]); // State for storing search results

//     // Function to handle search
//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(
//                 `https://api.themoviedb.org/3/search/movie?api_key=0c9e187736228b6d898949d183c48c50&language=en-US&query=${searchTerm}&page=1`
//             );
//             setSearchResults(response.data.results); // Update search results state with API response
//         } catch (error) {
//             console.error('Error searching movies:', error);
//         }
//     };

//     // Function to handle search term change
//     const handleSearchChange = event => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <div className="header">
//             <div className="logo">
//                 <h1>MovieDb</h1>
//             </div>
//             <div className="nav-links">
//                 <ul>
//                     <li><Link to="/">Popular</Link></li>
//                     <li><Link to="/top-rated">Top Rated</Link></li>
//                     <li><Link to="/upcoming">Upcoming</Link></li>
//                 </ul>
//             </div>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>
//             <div className="search-results">
//                 {searchResults.map(movie => (
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

// export default Header;





import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>MovieDb</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Popular</Link></li>
                    <li><Link to="/top-rated">Top Rated</Link></li>
                    <li><Link to="/upcoming">Upcoming</Link></li>
                </ul>
            </div>
            {/* <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div> */}
        </div>
    );
};

export default Header;








