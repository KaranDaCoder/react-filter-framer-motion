import React, { useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
  margin: 0.5rem;
  cursor: pointer;

  &.active {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    background-color: black;
    color: whitesmoke;
  }
`;
const CategoriesFilter = ({
  setActiveGenre,
  activeGenre,
  setFilteredMoviesArray,
  moviesArray,
}) => {
  useEffect(() => {
    if (activeGenre === 'All') {
      setFilteredMoviesArray(moviesArray);
      return;
    }
    const filtered = moviesArray.filter((movie) =>
      movie.genres.includes(activeGenre)
    );

    setFilteredMoviesArray(filtered);
  }, [activeGenre, moviesArray, setFilteredMoviesArray]);
  return (
    <div>
      <Button
        type='button'
        onClick={() => setActiveGenre('All')}
        className={activeGenre === 'All' ? 'active' : ''}
      >
        All
      </Button>
      <Button
        type='button'
        onClick={() => setActiveGenre('Action')}
        className={activeGenre === 'Action' ? 'active' : ''}
      >
        Action
      </Button>
      <Button
        type='button'
        onClick={() => setActiveGenre('Comedy')}
        className={activeGenre === 'Comedy' ? 'active' : ''}
      >
        Comedy
      </Button>
      <Button
        type='button'
        onClick={() => setActiveGenre('Drama')}
        className={activeGenre === 'Drama' ? 'active' : ''}
      >
        Drama
      </Button>
    </div>
  );
};

export default CategoriesFilter;
