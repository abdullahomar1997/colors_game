import React, { useState } from 'react';
import { AppContainer, BottomLeftText } from '../Styles';
import CircleWithNumber from './CircleWithNumber';
import GameHeader from './GameHeader';
import Grid from './Grid';
import RandomizeButton from './RandomizeButton';
import GameOverPopUp from '../Popups/GameOverPopUp';
import useTimer from '../../services/useTimer';
import useCalculator from '../../services/useCalculator';
import useRows from '../../services/useRows';
import levels from '../../data/Levels';
import useOnlineGame from '../../services/useOnlineGame';
import styled from 'styled-components';
import CorrectColor from './CorrectColor';

let temp = false;

const Game = ({level=levels[2],id=null}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [seconds,setSeconds] = useTimer(level.seconds, status, 
    () => {
    setStatus('TimeUp');
    setIsSettingsOpen(true);
  },

);
  const {topRowColors, bottomRowColors,SwapRows,setTopRowColors,setBottomRowColors,resetRows,color1,number3,pLives}  = useRows(level.colors,setStatus,setIsSettingsOpen,level.seconds,level.target,level.lives,level.id);
  const [evaluation, setEvaluation] = useState(level.evaluationLimit);
  const {gameId, number1,number2,triggerOnlineRecalculation} = useOnlineGame(id,temp,topRowColors,setTopRowColors,bottomRowColors,setBottomRowColors,setStatus,setIsSettingsOpen,evaluation,setEvaluation);
  const {number,triggerRecalculation,resetCorrect} = useCalculator(topRowColors,bottomRowColors,setEvaluation,setStatus,setIsSettingsOpen,evaluation,level);
  const playAgain = () => {
    resetRows();
    resetCorrect();
    setStatus(null);
    setIsSettingsOpen(false);
    setEvaluation(level.evaluationLimit);
    setSeconds(level.seconds);
  };


  return (
    <AppContainer>
      <GameOverPopUp status={status} setIsSettingsOpen={setIsSettingsOpen} isSettingsOpen={isSettingsOpen} playAgain={playAgain} time={"123"} evaluations={evaluation}/>
      {id && <BottomLeftText>
        Game ID is : {gameId}
      </BottomLeftText>}
      <GameHeader seconds={seconds} lives={pLives} />
      {!id ? <CircleWithNumber number={number3} target={level.target} /> : <CircleWithNumber number={number3} number2={number3} />}
      <CorrectColor color1={color1} />
     
      <Grid top={topRowColors} bottomRowColors={bottomRowColors} handleCircleClick={SwapRows} bottom={bottomRowColors} status={status} />
      {/* <RandomizeButton text={"Evaluate " + evaluation } onClick={() => id ? triggerOnlineRecalculation() : triggerRecalculation()}/> */}
    </AppContainer>


  );
};

export default Game;
