import React, { useState } from 'react'
import styled from 'styled-components';
import Timer from './Timer';
import { FaRegCirclePause } from "react-icons/fa6";
import PausePopUp from '../Popups/PausePopUp';

const GameHeader = ({seconds}) => {
  
  const [isPausePopupOpen, setIsPausePopupOpen] = useState(false);

  const openPausePopup = () => {
    setIsPausePopupOpen(true);
  };

  const closePausePopup = () => {
    setIsPausePopupOpen(false);
  };

  return (
    <Header>
      <PausePopUp onClick={() => openPausePopup()} isPausePopupOpen={isPausePopupOpen} closePausePopup={closePausePopup} />
      <Block>
        <Title>LEVEL</Title>
        <TitleValue>1</TitleValue>
      </Block>
      <Block>
        <Title>SECONDS</Title>
        <TimerContainer>
          <Timer seconds={seconds} />
        </TimerContainer>
      </Block>
      <Block2>
        <PauseIcon onClick={() => openPausePopup()} />
      </Block2>
    </Header>
  )
}

export default GameHeader;

export  const Header = styled.div`
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    width:94vw;
    align-self: center;
`;

export const Block = styled.div`
  border-bottom: 1px solid #3498db;
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  padding-bottom: 10px;

  @media only screen and (max-width: 480px) {
      padding-bottom: 0px;
  }
`;

export  const Block2 = styled.div`
  border-bottom: 1px solid #3498db;
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding-bottom: 10px;
  @media only screen and (max-width: 480px) {
      padding-bottom: 0px;
  }
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color:white;
  margin: 0; 
  text-align: center;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  font-family: text3;
`;

export const TitleValue = styled.h1`
  font-size: 1.6rem;
  color:white;
  text-align: center;
  padding-top: 5px;
  width: 100%;
  margin: 0; 
  font-family: text4;
`;

export  const TimerContainer = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color:white;
  text-align: center;
  padding-top: 5px;
  width: 100%;
  margin: 0;
  font-family: text4;
`;

const PauseIcon = styled(FaRegCirclePause)`
  position: absolute;
  font-size: 35px;
  color: white;
  cursor: pointer;
`;