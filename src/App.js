import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import MovieDetail from './components/MovieDetails';


const App = () => {
    return (
        <Router>
            <Header />
            
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />
              
              </Routes>
          
        </Router>
    );
};

export default App;



