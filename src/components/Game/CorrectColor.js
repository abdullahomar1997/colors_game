import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';



const CorrectColor = ({color1}) => {

    const [boardSize, setBoardSize] = useState({width: 0, height: 0});
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.getBoundingClientRect().width;
                setContainerWidth(width);
                const boardContainerWidth = width; // Adjust the percentage as needed
                setBoardSize({width: boardContainerWidth});
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
                    style={{backgroundColor: color1}}
                    side={Math.floor(boardSize.width / 5)}
                    color3={color1}
                />
            </Container>
        </Container1>
    )
}

export default CorrectColor

// border: 1px solid ${
//     props => props.color3 && typeof props.color3 === 'string'
//         ? darken(0.1, props.color3)
//         : '#023d59'
// };
const Circle = styled.div`
    /* width: 65px;
    height: 65px; */
      width: ${props => props.side}px;
      height: ${props => props.side}px;
    border-radius: 30%;
    /* margin: 5px; */
    cursor: pointer;
    list-style: none;   
    border: 5px solid black;
        border: 1px solid ${props => props.color3};

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
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