import {shuffle} from "lodash";
import React, {useEffect, useState} from 'react';
import {FaPlay, FaShareAlt} from "react-icons/fa";
import {RiSettings3Fill} from "react-icons/ri";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {getMaxLevel, shuffleArray} from '../services/GameServices';
import {handleShare} from '../utils/utils';
import TopRow2 from './Game/TopRow2';
import SettingsPopUp from './Popups/SettingsPopUp';

const Home2 = () => {

  const colors = ["#0096fb", "#e92551", "#f8a336"]

  const [topRowColors, setTopRowColors] = useState(shuffleArray(colors));

  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsPopupOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsPopupOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setTopRowColors(shuffle(colors)), 3000);
  }, [colors]);

  return (
    <HomePageContainer>
      <SettingsPopUp isSettingsOpen={isSettingsPopupOpen} closeSettings={closeSettings} />
      <ShareIcon onClick={handleShare} />
      <SettingsIcon onClick={() => openSettings()} />
      <TopRow2 topRowColors={topRowColors} onSelect={() => console.log("nothing")} />
      <GameName>COLOR MATCH</GameName>
      {/* <ButtonContainer>
        <Button to="/play-offline" backgroundColor="#FF7F50">Single Player </Button>
        <Button  to="/play-with-friends" backgroundColor="#FF5C4D" >Multiplayer with Friends</Button>
      </ButtonContainer> */}

      <ButtonContainer>
        <Button to="/play-offline" >
          <CornerNumber>{getMaxLevel()}</CornerNumber>
          <PlayIcon />
        </Button>
      </ButtonContainer>
    </HomePageContainer>
  );
};

export default Home2;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  width: 100%;
  height: 100%; 
  background: linear-gradient(to bottom, #ff0000, #00ff00);
  background: radial-gradient(circle, #ff0000, #00ff00);
  background: repeating-linear-gradient(45deg, #ff0000, #ff0000 20px, #00ff00 20px, #00ff00 40px);
  background: linear-gradient(to bottom, #FF6B6B, #FFE066);
  background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
`;

const ShareIcon = styled(FaShareAlt)`
  position: absolute;
  top: 30px;
  left: 25px;
  font-size: 27px;
  color: white; 
  cursor: pointer;
`;

const SettingsIcon = styled(RiSettings3Fill)`
  position: absolute;
  top: 30px;
  right: 25px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const GameName = styled.h1`
  color: white;
  font-family: text2;
  font-size: 1.5rem;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   margin-top: 10px;
//   flex-direction: column;
// `;

// const Button = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   padding: 10px 20px;
//   margin: 10px 20px;
//   margin-bottom: 0px;
//   cursor: pointer;
//   width: 50vw;
//   padding: 15px;
//   border: none;
//   border-radius: 30px;
//   font-size: 1rem;
//   color: white;
//   background-color: ${(props) => props.backgroundColor || '#3498db'};
//   transition: background-color 0.3s ease;
//   font-family: text2;

//   &:hover {
//     background-color: ${(props) => (props.backgroundColor ? darkenColor(props.backgroundColor, 10) : '#2980b9')};
//   }
//   &:active {
//     background-color: #FF6347; /* Another shade of orange when the button is clicked */
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 15px;
  margin: 10px 18px;
  margin-bottom: 0px;
  cursor: pointer;
  width: 25vw;
  height: 25vw;
  padding: 10px;
  border-radius: 25px;
  font-size: 1.5rem;
  color: white;
  transition: background-color 0.3s ease;
  font-family: text9;
  position: relative;
  background-color: #FF6347;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);


  &:hover {
  }
  &:active {
    background-color: #FF6347; /* Another shade of orange when the button is clicked */
  }
`;

const CornerNumber = styled.span`
  position: absolute;
  top: 0.8px;
  right: 15px;
  font-size: 1.5rem; /* Adjust as needed */
`;

const PlayIcon = styled(FaPlay)`
 display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  cursor: pointer;
`;
