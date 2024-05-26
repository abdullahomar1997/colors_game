import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import styled from "styled-components";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const ExampleContainer = styled.div`
  display: flex;

`;

const ExampleItem = styled(motion.li)`
  border-radius: 10px;
  margin-right: 10px;
  width: 140px;
  height: 140px;
`;

const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 140px; /* Adjust the height according to your needs */
`;

const RefreshButton = styled.div`
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

export const VerticalSwap = () => {
  const [colors, setColors] = useState(initialColors);
  const [selectedIndices, setSelectedIndices] = useState([-1, -1]);

 

  // useEffect(() => {
  //   setTimeout(() => {
     
  //   }, 3000);
  // }, [colors]);

  const handleColorClick = (index) => {
    // const itemsToShuffle = 2;
      
    // const shuffledArray = [
    //   ...shuffle(initialColors.slice(0, itemsToShuffle)),
    //   ...initialColors.slice(itemsToShuffle)
    // ];
    // setColors(shuffledArray);
    if (selectedIndices[0] === -1) {
      setSelectedIndices([index, -1]);
    } else if (selectedIndices[1] === -1) {
      const newColors = [...colors];
      [newColors[selectedIndices[0]], newColors[index]] = [
        newColors[index],
        newColors[selectedIndices[0]],
      ];// Set the indices to animate
      setColors(newColors);
      setSelectedIndices([-1, -1]);
    }
  };

  return (
    <BodyContainer>
      {/* <NavContainer></NavContainer> */}
      <ExampleContainer>
        {colors.map((background,index) => (
          <ExampleItem
            key={background}
            layout
            transition={spring}
            style={{ background }}
            onClick={() => handleColorClick(index)}
          />
        ))}
      </ExampleContainer>
      {/* <RefreshButton >Refresh</RefreshButton> */}
    </BodyContainer>
  );
};

export default VerticalSwap;
