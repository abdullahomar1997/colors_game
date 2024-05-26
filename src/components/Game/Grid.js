import React from 'react'
import styled from 'styled-components';
import TopRow from './TopRow';

const Grid = ({top,handleCircleClick,bottom,status}) => {
  return (
    <Container>
      <TopRow topRowColors={top} onSelect={(index) => handleCircleClick(index)} />
      {status !== null && <TopRow topRowColors={bottom} onSelect={(index) => console.log("niks")} />}
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