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
  // background: linear-gradient(to bottom, #ff0000, #00ff00);
  // background: radial-gradient(circle, #ff0000, #00ff00);
  // background: repeating-linear-gradient(45deg, #ff0000, #ff0000 20px, #00ff00 20px, #00ff00 40px);
  // background: linear-gradient(to bottom, #FF6B6B, #FFE066);
  // background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
  background-color: #404040;
  background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23121212' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231d1d1d' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23282828' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23343434' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23404040' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #180A0E;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23180A0E' width='11' height='11'/%3E%3Crect fill='%23190b0f' x='10' width='11' height='11'/%3E%3Crect fill='%23190d10' y='10' width='11' height='11'/%3E%3Crect fill='%231a0e11' x='20' width='11' height='11'/%3E%3Crect fill='%231a0f12' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%231b1013' y='20' width='11' height='11'/%3E%3Crect fill='%231b1114' x='30' width='11' height='11'/%3E%3Crect fill='%231c1215' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231d1316' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%231d1417' y='30' width='11' height='11'/%3E%3Crect fill='%231e1517' x='40' width='11' height='11'/%3E%3Crect fill='%231e1618' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231f1719' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2320181a' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2320181a' y='40' width='11' height='11'/%3E%3Crect fill='%2321191b' x='50' width='11' height='11'/%3E%3Crect fill='%23221a1c' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23231b1d' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23231c1e' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23241d1e' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23251d1f' y='50' width='11' height='11'/%3E%3Crect fill='%23251e20' x='60' width='11' height='11'/%3E%3Crect fill='%23261f21' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23272021' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23272122' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23282223' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23292224' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23292325' x='70' width='11' height='11'/%3E%3Crect fill='%232a2426' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%232b2526' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%232b2627' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%232c2728' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%232d2829' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%232e282a' x='80' width='11' height='11'/%3E%3Crect fill='%232e292a' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%232f2a2b' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23302b2c' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23302c2d' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23312d2e' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23322e2f' x='90' width='11' height='11'/%3E%3Crect fill='%23322f30' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23333030' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23343031' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23353132' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23353233' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23363334' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23373435' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23373536' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23383636' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23393737' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%233a3838' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%233a3939' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%233b3a3a' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%233c3a3b' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%233c3b3c' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%233d3c3c' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%233e3d3d' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%233f3e3e' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%233f3f3f' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23404040' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #404040;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23404040' width='11' height='11'/%3E%3Crect fill='%233f3f3f' x='10' width='11' height='11'/%3E%3Crect fill='%233e3e3e' y='10' width='11' height='11'/%3E%3Crect fill='%233d3d3d' x='20' width='11' height='11'/%3E%3Crect fill='%233c3c3c' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%233b3b3b' y='20' width='11' height='11'/%3E%3Crect fill='%233a3a3a' x='30' width='11' height='11'/%3E%3Crect fill='%23393939' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23383838' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23373737' y='30' width='11' height='11'/%3E%3Crect fill='%23363636' x='40' width='11' height='11'/%3E%3Crect fill='%23353535' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23343434' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23333333' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23323232' y='40' width='11' height='11'/%3E%3Crect fill='%23313131' x='50' width='11' height='11'/%3E%3Crect fill='%23303030' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%232f2f2f' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%232e2e2e' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%232d2d2d' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%232c2c2c' y='50' width='11' height='11'/%3E%3Crect fill='%232b2b2b' x='60' width='11' height='11'/%3E%3Crect fill='%232a2a2a' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%232a2a2a' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23292929' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23282828' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23272727' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23262626' x='70' width='11' height='11'/%3E%3Crect fill='%23252525' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23242424' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23232323' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23222222' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23212121' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23202020' x='80' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='90' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23191919' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23181818' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23171717' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23171717' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23161616' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23151515' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23141414' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23131313' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23121212' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23101010' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23090909' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23080808' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23060606' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23050505' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23030303' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #1F1F1F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%231F1F1F' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' y='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='20' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%231d1d1d' y='20' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='30' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%231b1b1b' y='30' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='40' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23191919' y='40' width='11' height='11'/%3E%3Crect fill='%23191919' x='50' width='11' height='11'/%3E%3Crect fill='%23191919' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23181818' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23181818' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23171717' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23171717' y='50' width='11' height='11'/%3E%3Crect fill='%23171717' x='60' width='11' height='11'/%3E%3Crect fill='%23161616' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23161616' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23151515' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23151515' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23151515' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23141414' x='70' width='11' height='11'/%3E%3Crect fill='%23141414' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23131313' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23131313' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23121212' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23121212' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23111111' x='80' width='11' height='11'/%3E%3Crect fill='%23111111' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23101010' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23101010' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='90' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230a0a0a' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23090909' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23090909' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23080808' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23070707' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23070707' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23060606' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23050505' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23040404' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23040404' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23030303' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23020202' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23010101' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23010101' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
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
