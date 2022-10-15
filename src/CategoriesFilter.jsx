import React from 'react';
import LanguageFilter from './dataSet/LanguageFilter';
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

const CategoriesContainer = styled.div`
  display: flex;
`;
const CategoriesFilter = ({
  setActiveGenre,
  activeGenre,
  setFilteredMoviesArray,
  activeLanguage,
  setActiveLanguage,
  moviesArray,
}) => {
  return (
    <>
      <CategoriesContainer>
        <LanguageFilter
          setActiveLanguage={setActiveLanguage}
          activeLanguage={activeLanguage}
          moviesArray={moviesArray}
          activeGenre={activeGenre}
          setFilteredMoviesArray={setFilteredMoviesArray}
          setActiveGenre={setActiveGenre}
        />

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
      </CategoriesContainer>
    </>
  );
};

export default CategoriesFilter;
