import React from 'react'
import styled from 'styled-components';

const RandomizeButton = ({text,onClick}) => {
  return (
    <Container>
      <RandomizeButton1 onClick={onClick}>{text}</RandomizeButton1>
    </Container>
  )
}

export default RandomizeButton;

export const RandomizeButton1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 50vw;
  font-weight: bold;
  background-color: #e92556; /* Green background color */
  color: white;
  border: none; /* No border */
  border-radius: 30px;
  cursor: pointer;
  margin: 10px 20px;
  padding: 15px;
  font-size: 1.2rem;
  font-family: text2;
  margin-bottom: 0px;
  transition: background-color 0.3s ease; /* Smooth color transition */ 
  
  &:hover {
    //background-color: #45a049; /* Darker green color on hover */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
`;