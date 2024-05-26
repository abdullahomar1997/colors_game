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

let temp = false;

const Game = ({level=levels[2],id=null}) => {
  const {topRowColors, bottomRowColors,SwapRows,setTopRowColors,setBottomRowColors,resetRows}  = useRows(level.colors);
  const [evaluation, setEvaluation] = useState(level.evaluationLimit);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [seconds,setSeconds] = useTimer(level.timeLimit, status, () => {
    setStatus('TimeUp');
    setIsSettingsOpen(true);
  });

  const {gameId, number1,number2,triggerOnlineRecalculation} = useOnlineGame(id,temp,topRowColors,setTopRowColors,bottomRowColors,setBottomRowColors,setStatus,setIsSettingsOpen,evaluation,setEvaluation);
  const {number,triggerRecalculation,resetCorrect} = useCalculator(topRowColors,bottomRowColors,setEvaluation,setStatus,setIsSettingsOpen,evaluation,level);
  const playAgain = () => {
    resetRows();
    resetCorrect();
    setStatus(null);
    setIsSettingsOpen(false);
    setEvaluation(level.evaluationLimit);
    setSeconds(level.timeLimit);
  };

  return (
    <AppContainer>
      <GameOverPopUp status={status} setIsSettingsOpen={setIsSettingsOpen} isSettingsOpen={isSettingsOpen} playAgain={playAgain} time={"123"} evaluations={evaluation}/>
      {id && <BottomLeftText>
        Game ID is : {gameId}
      </BottomLeftText>}
      <GameHeader seconds={seconds}/>
      {!id ? <CircleWithNumber number={number} /> : <CircleWithNumber number={number1} number2={number2} />}
      <Grid top={topRowColors} handleCircleClick={SwapRows} bottom={bottomRowColors} status={status} />
      <RandomizeButton text={"Evaluate " + evaluation } onClick={() => id ? triggerOnlineRecalculation() : triggerRecalculation()}/>
    </AppContainer>


  );
};

export default Game;