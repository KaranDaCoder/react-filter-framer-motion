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

const LanguageFilter = ({
  activeGenre,
  activeLanguage,
  setFilteredMoviesArray,
  moviesArray,
  setActiveLanguage,
}) => {
  useEffect(() => {
    if (activeGenre === 'All' && activeLanguage === 'Telugu') {
      setFilteredMoviesArray(moviesArray);
      return;
    }
    const filtered = moviesArray.filter((movie) => {
      if (
        movie.language.includes(activeLanguage) &&
        movie.genres.includes(activeGenre)
      ) {
        return movie;
      } else {
        return false;
      }
    });

    setFilteredMoviesArray(filtered);
  }, [activeGenre, activeLanguage, moviesArray, setFilteredMoviesArray]);
  return (
    <>
      <Button
        type='button'
        onClick={() => setActiveLanguage('Telugu')}
        className={activeLanguage === 'Telugu' ? 'active' : ''}
      >
        tollywood
      </Button>
      <Button
        type='button'
        onClick={() => setActiveLanguage('Hindi')}
        className={activeLanguage === 'Hindi' ? 'active' : ''}
      >
        bollywood
      </Button>

      <Button
        type='button'
        onClick={() => setActiveLanguage('Tamil')}
        className={activeLanguage === 'Tamil' ? 'active' : ''}
      >
        mollywood
      </Button>
      <Button
        type='button'
        onClick={() => setActiveLanguage('Kannada')}
        className={activeLanguage === 'Kannada' ? 'active' : ''}
      >
        sandalwood
      </Button>
    </>
  );
};

export default LanguageFilter;
