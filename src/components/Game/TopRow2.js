import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const TopRow2 = ({ topRowColors, onSelect }) => {

  const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
        if (containerRef.current) {
            const width = containerRef.current.getBoundingClientRect().width;
            setContainerWidth(width);
            const boardContainerWidth = width;
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
      {topRowColors.map((color, index) => (
        <Circle
          key={color}
          layout
          transition={spring}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(index)}
          side={Math.floor(boardSize.width /12)}
        />
      ))}
    </Container>
  );
};

export default TopRow2;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 40%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Circle = styled(motion.li)`
  width: ${props => props.side}px;
  height: ${props => props.side}px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  list-style: none;
`;

