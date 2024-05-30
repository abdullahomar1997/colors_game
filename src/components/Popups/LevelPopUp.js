import React from 'react';
import styled from 'styled-components';
import TopRow2 from '../Game/TopRow2';

const LevelPopUp = ({unlocked,selectedLevel, closePopup,setIsPlay }) => (
  <ModalOverlay onClick={closePopup}>
    <Container>
      <Heading>Level {selectedLevel.id}</Heading>
      {/* <TopRow2 topRowColors={selectedLevel.colors} onSelect={() => console.log("nothing")} /> */}
      <DetailsContainer>
        <DetailsTitle>Time Allocated:</DetailsTitle>
        <DetailsValue>{selectedLevel.seconds} seconds</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
        <DetailsTitle>Target:</DetailsTitle>
        <DetailsValue>{selectedLevel.target}</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
        <DetailsTitle>Lives:</DetailsTitle>
        <DetailsValue>{selectedLevel.lives}</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
        <DetailsTitle>Options:</DetailsTitle>
        <DetailsValue>{selectedLevel.options}</DetailsValue>
      </DetailsContainer>
      <ButtonsContainer>
        <PlayButtonContainer>
          {
            !unlocked.includes(selectedLevel.id) ?
            (
              <PlayButton onClick={()=> setIsPlay(true)}>PLAY</PlayButton>
            )
            :
            (
              <LockedButton  onClick={()=> console.log("12345")} >LOCKED</LockedButton>
            )
          }
        </PlayButtonContainer>
      </ButtonsContainer>
    </Container>
  </ModalOverlay>
);

export default LevelPopUp;

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

const Container = styled.div`
  background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
  width: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  border-radius: 20px;
  
  @media (max-width: 767px) {
    width: 80vw;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: white;
  font-family: text3;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  margin: 10px 0px;
  width: 80%;
  font-family: text4;
`;

const DetailsTitle = styled.span`
  font-weight: bold;
  color: white;
`;

const DetailsValue = styled.span`
  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  width: 100%;
  height: 13vmin;
  font-family: text4;
`;

const PlayButtonContainer = styled.div`
  flex:2.5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.button`
  background-color: #f96160;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  height: 80%;
  width: 80%;
  font-family: text4;
`;

const LockedButton = styled.button`
  background-color: #A9A9A9;
  color: black;
  border-radius: 15px;
  cursor: not-allowed; ;
  font-size: 1rem;
  height: 80%;
  width: 80%;
  font-family: text4;
`;