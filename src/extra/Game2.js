import React, { useEffect, useState } from 'react';
import { AppContainer } from '../components/Styles';
import { countMatchingColors, shuffleArray } from '../services/GameServices';
import CircleWithNumber from '../components/Game/CircleWithNumber';
import GameHeader from '../components/Game/GameHeader';
import Grid from '../components/Game/Grid';
import RandomizeButton from '../components/Game/RandomizeButton';
import GameOverPopUp from '../components/Popups/GameOverPopUp';

const Game = ({level}) => {

  const colors = level.colors;

  const [topRowColors, setTopRowColors] = useState(() => {
    const storedArray = JSON.parse(localStorage.getItem('colorArray11'));
    return storedArray || shuffleArray(colors);
  });
  
  const [bottomRowColors,setBottomRowColors] = useState(() => {
    const storedArray = JSON.parse(localStorage.getItem('colorArray22'));
    return storedArray || shuffleArray(colors);
  });
  
  const [selectedIndices, setSelectedIndices] = useState([-1, -1]);
  const [number, setNumber] = useState(0);
  const [evaluation, setEvaluation] = useState(level.evaluationLimit);
  const [status, setStatus] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [seconds, setSeconds] = useState(level.timeLimit);

  const existingArrayString = localStorage.getItem('levelwon');
  const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];
  
  const handleAddString = (newString) => {
    const updatedArray = [...existingArray, newString];
    localStorage.setItem('levelwon', JSON.stringify(updatedArray));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (status === null) {
        if (seconds === 0) {
          setStatus("TimeUp")
          setIsSettingsOpen(true);
        }
        else if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(timer);
        }
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);

  }, [seconds, status]);

  const updateEvaluation = () => {
    setEvaluation((prev) => prev-1)
  };

  const playAgain = () => {
    console.log("playyyyyyyyyyyyy agiannnnnnnnnnnnnn");
    setIsSettingsOpen(false);
    setTopRowColors(shuffleArray(colors)); 
    setBottomRowColors(shuffleArray(colors)); 
    setSelectedIndices([-1, -1]); 
    setNumber(0);
    setEvaluation(level.evaluationLimit);
    setStatus(null);
    setSeconds(level.timeLimit);
  };

  const handleRandomizeClick = () => {
    const matchingCount = countMatchingColors(topRowColors, bottomRowColors);
    setNumber(matchingCount);
    updateEvaluation();
    if (matchingCount === topRowColors.length) {

      handleAddString(level.id);

      setStatus("YouWon")
      
      setIsSettingsOpen(true);
    }
    if (evaluation === 0) {
      setStatus("EvalLimit")
      setIsSettingsOpen(true);
    }
  };

  useEffect(() => {
    
  }, [topRowColors, bottomRowColors, number,seconds]);

  useEffect(() => {
    setNumber(countMatchingColors(topRowColors, bottomRowColors));
  }, []);

  const handleCircleClick = (index) => {
    if (selectedIndices[0] === -1) {
      setSelectedIndices([index, -1]);
    } else if (selectedIndices[1] === -1) {
      const newColors = [...topRowColors];
      [newColors[selectedIndices[0]], newColors[index]] = [
        newColors[index],
        newColors[selectedIndices[0]],
      ];

      setTopRowColors(newColors);
      setSelectedIndices([-1, -1]);
    }
  };

  return (
    <AppContainer>
      <GameOverPopUp status={status} setIsSettingsOpen={setIsSettingsOpen} isSettingsOpen={isSettingsOpen} playAgain={playAgain} time={"123"} evaluations={evaluation}/>
      <GameHeader seconds={seconds}/>
      <CircleWithNumber number={number} />
      <Grid top={topRowColors} handleCircleClick={handleCircleClick} bottom={bottomRowColors} status={status} />
      <RandomizeButton text={"Evaluate " + evaluation } onClick={handleRandomizeClick}/>
    </AppContainer>
  );
};

export default Game;