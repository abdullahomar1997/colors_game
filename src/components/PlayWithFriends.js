import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countMatchingColors, createOrJoinGame, updateGameStatus, updateScore } from '../services/GameServices';
import {AppContainer, BottomLeftText } from './Styles';
import GameHeader from './Game/GameHeader';
import Grid from './Game/Grid';
import RandomizeButton from './Game/RandomizeButton';
import GameOverPopUp from './Popups/GameOverPopUp';
import CircleWithNumber from './Game/CircleWithNumber';
import useRows from '../services/useRows';
import useOnlineGame from '../services/useOnlineGame';

let temp = false;

const PlayWithFriends = ({id}) => {

  const {topRowColors, bottomRowColors,SwapRows,setTopRowColors,setBottomRowColors} = useRows([]);
  const [evaluation, setEvaluation] = useState(100);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const {gameId, number1,number2,triggerRecalculation} = useOnlineGame(id,temp,topRowColors,setTopRowColors,bottomRowColors,setBottomRowColors,setStatus,setIsSettingsOpen,evaluation,setEvaluation);

  const playAgain = () => {
    setIsSettingsOpen(false);
    window.location.reload();
  };

  return (
  <AppContainer>
      <GameOverPopUp status={status} setIsSettingsOpen={setIsSettingsOpen} isSettingsOpen={isSettingsOpen} playAgain={playAgain} evaluations={evaluation}/>
      <BottomLeftText>
        Game ID is : {gameId}
      </BottomLeftText>
      <GameHeader seconds={60}/>
      <CircleWithNumber number={number1} number2={number2} />
      <Grid top={topRowColors} handleCircleClick={SwapRows} bottom={bottomRowColors} status={status} />
      <RandomizeButton text={"Evaluate " + evaluation } onClick={() => triggerRecalculation()}/>
    </AppContainer>
  );
};

export default PlayWithFriends;