import { useEffect, useState } from 'react';
import { shuffleArray } from './GameServices';

const useRows = (colors,setStatus,setIsSettingsOpen) => {

    const [topRowColors, setTopRowColors] = useState(shuffleArray(colors));
    const [bottomRowColors,setBottomRowColors] = useState(shuffleArray(colors));
    const [selectedIndices, setSelectedIndices] = useState([-1, -1]);
    const [number3, setNumber3] = useState(0);
    
    // const randomIndex = Math.floor(Math.random() * topRowColors.length);
    const randomColorHex = topRowColors[getRandomNumber(2)];
    
    const [color2, setColor1] = useState(randomColorHex);

    const resetRows = () => {
      let rrr = shuffleArray(colors); 
      let rrr1 = shuffleArray(colors); 
      const randomColorHex = rrr[getRandomNumber(2)];
      setColor1(randomColorHex);
      setTopRowColors(rrr);
      setBottomRowColors(rrr1)
    };

    const SwapRows = (index) => {
      if(topRowColors[index].name === color2.name){
        // alert("CORRRREEEEEEEEEEEEEECCCCCTTTT")
        setNumber3((prev) => prev +=1)
      }
      else{
        // console.log("ghi",topRowColors)
        // console.log("abc",topRowColors[index].name)
        // console.log("lmn",color2)
        // console.log("def",color2.name)
        // alert("WROOOOOOONNNNNNNGGGGG")
        // setNumber3((prev) => prev -=1)
        setStatus("YouLost");
        setIsSettingsOpen(true);
      }
      resetRows();

    };
    return {topRowColors, bottomRowColors,SwapRows,resetRows,setTopRowColors,setBottomRowColors,color1:color2.hex,number3};
};

export default useRows;

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}