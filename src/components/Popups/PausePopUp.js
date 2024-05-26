import React from 'react'
import styled from 'styled-components';
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PausePopUp = ({isPausePopupOpen,closePausePopup}) => {
  
  return (
    <>
      {isPausePopupOpen && (
        <ModalOverlay onClick={closePausePopup} >
          <SettingsPopupContainer>
            <PopupTitle>Paused</PopupTitle>
            <SoundContainer onClick={closePausePopup}>Resume</SoundContainer>
            <Link to="/" >
              <SoundContainer>Quit</SoundContainer>
            </Link>
            <CloseButton onClick={closePausePopup} size={30} color='white' />
          </SettingsPopupContainer>
        </ModalOverlay>
      )} 
    </>
)}

export default PausePopUp;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SoundContainer = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: bolder;
  width: 100%;
  border: 0.5px solid white;
  font-weight: bolder;
`
const CloseButton = styled(FaRegTimesCircle )`
  position: absolute;
  right:-2%;
  top:-3%;
`
const SettingsPopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  background-color: black;
  background: #001f3f;
  border-radius: 20px;
  width: 50vh;
  opacity: 1;
  position: relative;
  
  @media (max-width: 767px) {
    width: 70vw;
  }
`;

const PopupTitle = styled.h2`
  font-size: 5vmin;
  font-family: Shrikhand;
  position: relative;
  text-align:center;
  color: white;
`;