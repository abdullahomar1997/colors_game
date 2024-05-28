import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const CorrectColor = ({color1}) => {
    
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
        <Container1>
    <Container id="board-container" ref={containerRef}  >
        <Circle
            style={{ backgroundColor: color1 }}
            side={Math.floor(boardSize.width /5)}
        />
        </Container>
        </Container1>
    )
}

export default CorrectColor


const Circle = styled.div`
    /* width: 65px;
    height: 65px; */
      width: ${props => props.side}px;
      height: ${props => props.side}px;
    border-radius: 30%;
    /* margin: 5px; */
    cursor: pointer;
    list-style: none;
    /* background-color: white; */
`;

const Container1 = styled.div`
    height: 100px;
    width: 100%;
    /* background-color: white; */
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;