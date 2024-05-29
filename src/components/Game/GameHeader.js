import React, { useState } from 'react'
import styled from 'styled-components';
import Timer from './Timer';
import { FaRegCirclePause } from "react-icons/fa6";
import PausePopUp from '../Popups/PausePopUp';
import { FaHeart } from "react-icons/fa";


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ seconds,percentage }) => {
  return (
    <div style={{ width: '50px', height: '50px' }}>
      <CircularProgressbar
        value={percentage}
        // text={`${percentage}%`}
        text={`${seconds}`}
        styles={buildStyles({
          textSize: '30px',
          fontFamily:'text8',
          pathColor: `rgba(246, 202, 71, ${percentage / 100})`,
          textColor: '#ffffff',
          trailColor: '#3b454e',
          backgroundColor: '#f6ca47',
          alignItems:'center',
          justifyContent:'center'
        })}
      />
    </div>
  );
};


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
      <Block111>
        {/* <Title>LEVEL</Title> */}
        <FaHeart size={30} color={"#de5b49"}/>
        <TitleValue>1</TitleValue>
      </Block111>
      <Block>
        {/* <Title>SECONDS</Title> */}
        {/* <TimerContainer>
          <Timer seconds={seconds} />
        </TimerContainer> */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgressBar seconds={seconds} percentage={(seconds/60)*100} />
    </div>
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

export const Block111 = styled.div`
  border-bottom: 1px solid #3498db;
  border-bottom: 1px solid #55a6e7;
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  padding-bottom: 10px;
  /* margin: 0 auto; */

  /* background-color:pink; */

  @media only screen and (max-width: 480px) {
      padding-bottom: 0px;
  }
`;

export const Block = styled.div`
  border-bottom: 1px solid #3498db;
  border-bottom: 1px solid #55a6e7;
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
  font-size: 1.2rem;
  color:#de5b49;
  /* text-align: center; */
  /* padding-top: 5px; */
  /* width: 100%; */
  /* margin: 0;  */
  margin-left: 10px;
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