import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSettings } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";

const HomeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5; /* Light background color */
  background-color: #121926;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PlayButton = styled(Link)`
  padding: 15px 30px;
  margin: 10px;
  font-size: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const TopLeftIcon = styled(RiSettings3Fill)`
  position: absolute;
  top: 30px;
  left: 20px;
  font-size: 30px;
  color: white; /* Adjust the color as needed */
  cursor: pointer;
`;
const TopRightIcon = styled(FaShareAlt)`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 24px;
  color: white; /* Adjust the color as needed */
  cursor: pointer;
`;


const Home = () => {
  return (
    <HomeContainer>
      <TopLeftIcon />
      <TopRightIcon />
      <ButtonContainer>
        <PlayButton to="/play-offline">Play Offline</PlayButton>
        <PlayButton to="/play-with-friends">Play with Friends</PlayButton>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
