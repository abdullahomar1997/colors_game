import React from 'react';
import styled from 'styled-components';
import TopRow2 from '../Game/TopRow2';
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";
import { ImTarget } from "react-icons/im";

const LevelPopUp = ({unlocked,selectedLevel, closePopup,setIsPlay }) => (
  <ModalOverlay onClick={closePopup}>
    <Container>
      <Heading>Level {selectedLevel.id}</Heading>
      <Container5>
        <Container6>
        <ImTarget size={25} color={"#0BC507"} />
        <DetailsValue>{selectedLevel.target}</DetailsValue>
        </Container6>
        <Container6>
          <BsFillStopwatchFill size={25} color={"#ffffff"} />
          <DetailsValue>{selectedLevel.seconds}s</DetailsValue>
        </Container6>
        <Container6>
        <FaHeart size={23} color={"#de5b49"}/>
        <DetailsValue>{selectedLevel.lives}</DetailsValue>
        </Container6>
        <Container6>
          <FaHandPointer size={23} color={"#ffffff"} />
          <DetailsValue>{selectedLevel.options}</DetailsValue>
        </Container6>

      </Container5>
      {/* <TopRow2 topRowColors={selectedLevel.colors} onSelect={() => console.log("nothing")} /> */}
      {/* <DetailsContainer>
        <BsFillStopwatchFill color={"#ffffff"} />
        <DetailsValue>{selectedLevel.seconds}s</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
      <ImTarget size={20} color={"#de5b49"} />
        <DetailsValue>{selectedLevel.target}</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
      <FaHeart size={20} color={"#de5b49"}/>
        <DetailsValue>{selectedLevel.lives}</DetailsValue>
      </DetailsContainer>
      <DetailsContainer>
      <FaHandPointer color={"#de5b49"} />
        <DetailsValue>{selectedLevel.options}</DetailsValue>
      </DetailsContainer> */}
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
  background-color: green;

`;
const Container5 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  margin: 10px 0px;
  width: 90%;
  font-family: text4;
  /* background-color: green; */

`;
const Container6 = styled.div`
  display: flex;
  /* flex:1; */
  height: 40px;
  width: 20%;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 5px; */
  margin: 10px 0px;
  /* width: 80%; */
  font-family: text4;
  border-radius: 10px;
  /* background-color: green; */

`;

const DetailsTitle = styled.span`
  font-weight: bold;
  color: white;
`;

const DetailsValue = styled.span`
  color: white;
  padding-top: 3px;
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