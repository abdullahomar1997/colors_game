import React from 'react'
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const GameOverPopUp = ({isSettingsOpen,setIsSettingsOpen,status,playAgain}) => {
  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };
  return (
    <>
      {isSettingsOpen && (
        <ModalOverlay onClick={closeSettings}>
          <Container>
            <GameOver>Game Over</GameOver>
            <GameOverMessage>
              {status === "YouWon" && 'Congratulations! You\'ve Won!'}
              {status === "EvalLimit"  && 'Ouch, no more valid moves.'}
              {status === "TimeUp" && 'You ran out of time'}
            </GameOverMessage>
            <Three>
              <Play onClick={() => playAgain()} >
                <FaPlay size={15} color="white" />
              </Play>
              <Pause to="/" >
                <FaHome size={18} color="white" />
              </Pause>
            </Three>
          </Container>
        </ModalOverlay>
      )} 
    </>
)}

export default GameOverPopUp;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); //semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
  background-color: white;
  width: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  border-radius: 10px;
  
  @media (max-width: 767px) {
    width: 80vw;
  }
`;

const Three = styled.div`
  height: 30%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const GameOver = styled.p`
  margin: 0;
  font-size: 2rem;
  color: black;
  width: 100%;
  text-align: center;
  font-family: text9;
`;

const GameOverMessage = styled.p`
  margin: 0;
  font-size: 1rem;
  color: black;
  width: 100%;
  text-align: center;
  font-family: text8;
  padding: 1px;
`;

const Pause = styled(Link)`
  flex: 1;
  background-color:#01b3e1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  border: none;
  margin: 5px;
  margin-top: 15px;

`;

const Play = styled(Link)`
  flex: 3;
  background-color:#01e671;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  border: none;
  margin: 5px;
  margin-top: 15px;
`;
