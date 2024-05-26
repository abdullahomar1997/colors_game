import React from 'react';
import styled from 'styled-components';

const CircleGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

// Styled component for each circle
const Circle = styled.div`
  aspect-ratio: 1/1; /* Set the aspect ratio for a circle */
  border-radius: 50%;
  background-color: #3498db; /* Set the background color */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Set the text color */
  font-size: 1.5rem; /* Set the font size */
`;

const ResponsiveCircleGrid = () => {
  const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <CircleGridContainer>
      {numbers.map((number) => (
        <Circle key={number}>{number}</Circle>
      ))}
    </CircleGridContainer>
  );
};

export default ResponsiveCircleGrid;
