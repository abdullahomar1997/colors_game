import React from 'react';
import styled, { keyframes } from 'styled-components';

const fillAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const LoadingCircle = styled.div`
  width: 50px; /* Set the desired size */
  height: 50px;
  border-radius: 50%;
  border: 2px solid #3498db; /* Set the border color */
  border-top: 2px solid transparent;
  animation: ${fillAnimation} 1s infinite; /* Set the animation duration */
`;

const LoadingAnimation = () => {
  return <LoadingCircle />;
};

export default LoadingAnimation;
