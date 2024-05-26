import React, { useState } from 'react';
import styled from 'styled-components';
import levels from '../data/Levels';
import LevelPopUp from './Popups/LevelPopUp';
import Game from './Game/Game';

let level2 =  null;

const GameLevelsScreen = () => {
  const existingArrayString = localStorage.getItem('levelwon');
  const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [unlocked, setUnlocked] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  
  const openPopup = (level) => {
    level2 = level;
    setSelectedLevel(level);
  };

  const closePopup = () => {
    setSelectedLevel(null);
  };

  return (
    isPlay ? <Game level={level2}/> :
      <GameLevelsContainer>
        <Title>Select Level</Title>
        <GridContainer>
          {levels.map((level,index) => (
            <GridItem key={level.id} isUnlocked={existingArray.includes(level.id)} onClick={() => openPopup(level)}>
              {index+1}
            </GridItem>        
          ))}
        </GridContainer>
        {selectedLevel && (
          <LevelPopUp  unlocked={unlocked} isPlay={isPlay} setIsPlay={setIsPlay} selectedLevel={selectedLevel} closePopup={closePopup} />
        )}
      </GameLevelsContainer>
  );
};

export default GameLevelsScreen;

const GameLevelsContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  padding: 10px;
  font-family: text9;
  color: white;
  padding-top: 90px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px;
  max-width: 50%;
  margin: 0 auto; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 80vw;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #f96160; */
  /* background-color: #A9A9A9; */
  background-color: ${(props) => (props.isUnlocked ? '#f96160' : '#A9A9A9')};
  background-color: ${(props) => (props.isUnlocked ? '#0099FF' : '#f96160')};
  color: #ffffff;
  font-size: 1.3rem;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-family: text3;
`;

// "#B0C4DE",  
// "#36454F",  
// "#4682B4",  
// "#708090",  
// "#C0C0C0",  
// "#848484",  
// "#545454", 
// "#8B8589", 
// "#C0C0C0", 
// "#8C8C8C", 
// "#E5E4E2",  
// "#A9A9A9",  
// "#778899",  
// "#7D7D7D",  
// "#808069"   

