import { useEffect, useState } from 'react';
import TopTeluguMovies from './dataSet/TopTeluguMovies.json';
import Movie from './Movie';
import CategoriesFilter from './CategoriesFilter';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

function App() {
  const [moviesArray, setMoviesArray] = useState(TopTeluguMovies);
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeLanguage, setActiveLanguage] = useState('Telugu');
  useEffect(() => {
    setMoviesArray(moviesArray);
    setFilteredMoviesArray(moviesArray);
  }, [moviesArray]);

  return (
    <>
      <CategoriesFilter
        moviesArray={moviesArray}
        setFilteredMoviesArray={setFilteredMoviesArray}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <motion.div layout>
        <MovieContainer>
          <AnimatePresence>
            {filteredMoviesArray.map((movie) => {
              return <Movie key={movie.imdbID} movie={movie} />;
            })}
          </AnimatePresence>
        </MovieContainer>
      </motion.div>
    </>
  );
}

export default App;
