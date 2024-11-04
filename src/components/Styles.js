import {motion} from 'framer-motion';
import styled from 'styled-components';

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

export const Header = styled.div`
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
    background: linear-gradient(to bottom, #151e23, #2d2d44, #4a4e69);
    position: absolute;
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='100' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(0 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(0 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000011' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000022' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000033' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000044' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000055' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000066' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000077' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000088' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%23000099' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%230000aa' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%230000bb' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%230000cc' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%230000dd' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%230000ee' href='%23a' transform='rotate(0 0 0)'/%3E%3Cuse stroke='%2300F' href='%23a' transform='rotate(0 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
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
