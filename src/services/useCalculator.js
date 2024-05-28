import { useCallback, useEffect, useState } from 'react';
import { countMatchingColors, handleAddString, updateScore } from './GameServices';

const useCalculator = (topRowColors, bottomRowColors, setEvaluation, setStatus, setIsSettingsOpen, evaluation, level,gameId,pnum) => {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [recalculationTrigger, setRecalculationTrigger] = useState(false);

  const triggerRecalculation = () => {
    setRecalculationTrigger(!recalculationTrigger);
  }
  const resetCorrect = () => {
    triggerRecalculation(0);
  }

  useEffect(() => {
    const calculate = () => {
      const matchingCount = countMatchingColors(topRowColors, bottomRowColors);
      setNumber(matchingCount);
      setEvaluation((prev) => prev - 1);

      // if (matchingCount === topRowColors.length) {
      //   level  && handleAddString(level.id);
      //   setStatus("YouWon");
      //   setIsSettingsOpen(true);
      // }

      // if (evaluation === 0) {
      //   setStatus("EvalLimit");
      //   setIsSettingsOpen(true);
      // }
    };
    const onlineCalculate = () => {
      const matchingCount = countMatchingColors(topRowColors, bottomRowColors);
      updateScore(matchingCount, gameId, pnum);
      setEvaluation((prev) => prev - 1);
    };
    
    // calculate();
    gameId ? onlineCalculate() : calculate();
    
  }, [recalculationTrigger]);

  return {number,number1,number2,setNumber1,setNumber2,triggerRecalculation,resetCorrect};
  
};

export default useCalculator;
