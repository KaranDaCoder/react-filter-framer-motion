import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 30vh;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-align: center;
`;
const Movie = (props) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Image src={props.movie.image_url} alt={props.movie.title} />
      <Title>{props.movie.title}</Title>
    </motion.div>
  );
};

export default Movie;
