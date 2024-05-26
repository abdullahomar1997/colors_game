import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import styled from "styled-components";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const ExampleContainer = styled.ul`
  display: flex;
  position: relative;
  height: 140px;
  flex-direction: row;
  padding: 0;
  margin: 0;
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

// const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
const initialColors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357"];

export const VerticalSwap2 = () => {
  const [colors, setColors] = useState(initialColors);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  const handleColorClick = (index) => {
    if (selectedIndexes.length < 2) {
      setSelectedIndexes([...selectedIndexes, index]);
    }

    if (selectedIndexes.length === 1) {
      const updatedColors = [...colors];
      const tempColor = updatedColors[selectedIndexes[0]];
      updatedColors[selectedIndexes[0]] = updatedColors[index];
      updatedColors[index] = tempColor;

      setColors(updatedColors);
      setSelectedIndexes([]);
    }
  };

  const handleRefresh = () => {
    setColors(shuffle(colors));
  };

  return (
    <BodyContainer>
      <ExampleContainer>
        {colors.map((background, index) => (
          <ExampleItem
            key={background}
            layout
            transition={spring}
            style={{ background }}
            // onClick={() => handleColorClick(index)}
          />
        ))} 
      </ExampleContainer>
      <RefreshButton onClick={handleRefresh}>Refresh</RefreshButton>
    </BodyContainer>
  );
};

export default VerticalSwap2;
