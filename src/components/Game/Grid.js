import React from 'react'
import styled from 'styled-components';
import TopRow from './TopRow';

const Grid = ({top,handleCircleClick,bottom,status,bottomRowColors}) => {
  return (
    <Container>
      <TopRow bottomRowColors={bottomRowColors} topRowColors={top} onSelect={(index) => handleCircleClick(index)} />
    </Container>
  )
}

export default Grid;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;