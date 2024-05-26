import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CircleContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px; 
`;

export const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
`;

export  const Header = styled.div`
    display: flex;
    height: 8vh;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    /* background-color: red; */
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    height: 100vh;
    width: 100vw;
   margin: 0;
    background-color: #121926;
    background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
    position: absolute;

`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    /* background-color: green; */
`;
export const Container11 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    /* background-color: green; */
`;
export const Container111 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    height: 40vh;
    background-color: green;
`;

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 50vh;
    /* margin: 0; */
`;

export const RandomizeButton = styled.button`
    margin-top: 100px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #003366; /* Green background color */
    color: white; /* White text color */
    border: none; /* No border */
    border-radius: 6px; /* Rounded corners */
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease; /* Smooth color transition */ 
    &:hover {
      /* background-color: #45a049; Darker green color on hover */
    }
`;

export const MatchingCountLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    /* margin-bottom: 10px; */
    color: white;
    margin-top: 50px;
`;

export const MatchingCountLabel1 = styled.h1`
    font-size: 2.5rem;
    color: white;
    border: 4px solid #003366;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 50px;
    border-radius: 50px;
    font-family: Pixel;

`;


export const BottomLeftText = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0.5rem;
  color: #F5F5F5;  // Set your desired text color: ;
  font-size: 1rem;  // Set your desired font size
`;
