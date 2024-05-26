import { useEffect, useState } from 'react';
import { shuffleArray } from './GameServices';

const useRows = (colors) => {

    const [topRowColors, setTopRowColors] = useState(shuffleArray(colors));
    const [bottomRowColors,setBottomRowColors] = useState(shuffleArray(colors));
    const [selectedIndices, setSelectedIndices] = useState([-1, -1]);

    const resetRows = () => {
        setTopRowColors(shuffleArray(colors)); 
        setBottomRowColors(shuffleArray(colors)); 
        setSelectedIndices([-1, -1]);        
    };

    const SwapRows = (index) => {
        if (selectedIndices[0] === -1) {
          setSelectedIndices([index, -1]);
        } else if (selectedIndices[1] === -1) {
          const newColors = [...topRowColors];
          [newColors[selectedIndices[0]], newColors[index]] = [newColors[index],newColors[selectedIndices[0]]];
          setTopRowColors(newColors);
          setSelectedIndices([-1, -1]);
        }
      };
    return {topRowColors, bottomRowColors,SwapRows,resetRows,setTopRowColors,setBottomRowColors};
};

export default useRows;