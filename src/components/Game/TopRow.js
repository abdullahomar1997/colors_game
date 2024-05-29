import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const TopRow = ({ topRowColors, onSelect,bottomRowColors }) => {

  const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
        if (containerRef.current) {
            const width = containerRef.current.getBoundingClientRect().width;
            setContainerWidth(width);
            const boardContainerWidth = width; // Adjust the percentage as needed
            setBoardSize({ width: boardContainerWidth });
        }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <Container id="board-container" ref={containerRef}  >
      {topRowColors.slice(0, 2).map((color, index) => (
        <Circle
          key={color}
          // layout
          // transition={spring}
          // style={{ backgroundColor: color }}
          // style={{ backgroundColor:"#E5E4E2" }}
          style={{ backgroundColor:"#FFFFFF " }}
          onClick={() => onSelect(index)}
          side={Math.floor(boardSize.width /5)}
        >
          <CircleText textColor={bottomRowColors[index].hex} >{color.name}</CircleText>
        </Circle>
      ))}
    </Container>
  );
};

export default TopRow;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 40%;
  /* background-color: white; */


  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Circle = styled(motion.li)`
  /* width: 65px;
  height: 65px; */
  width: ${props => props.side}px;
  height: ${props => props.side}px;
  border-radius: 30%;
  margin: 5px;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CircleText = styled.p`
  font-size: 1.2rem;
  /* font-weight: bold; */
  font-family: text9;
  color: ${props => props.textColor};
`;
