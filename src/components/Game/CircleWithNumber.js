import React from 'react';
import styled from 'styled-components';

const CircleWithNumber = ({ number=0,number2=1000 ,target=100 }) => {
  return (
    <>
    {
      number2 === 1000 ? (
        <Container>
        <CircleContainer>
          <Number> {number}</Number>
          <Title>Target: {target} </Title>
        </CircleContainer>
      </Container>
      ):(
        <Container2>
          <CircleContainer2>
            <Title>Correct</Title>
            <LineContainer>
              <Score style={{ left: '0' }}>{number}</Score>
              <Score style={{ right: '0' }}>{number2}</Score> 
              <CenterText>_ LINE ONE _</CenterText>
            </LineContainer>
          </CircleContainer2>
        </Container2>
      )
    }
    </>
  )
};

export default CircleWithNumber;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 18vh;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18vh;
  /* background-color: red; */
`;

const CircleContainer = styled.div`
  width: 150px;
  height: 100px;
  font-size: 2.5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: text7;
  flex-direction: column;
  padding-top: 30px;
`;

const CircleContainer2 = styled.div`
  width: 80%;
  height: 100px;
  font-size: 2.5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: text7;
  flex-direction: column;
  /* padding-top: 5px; */

`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: #87bfb4;
  margin: 0;
`;


const Number = styled.h1`
  font-size: 3rem;
  color: white;
  margin: 0;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 2px;
  /* background-color: black; */
  position: relative;
  font-size: 1rem;
  border: none;
  padding-top:20px;
`;

const Score = styled.div`
  position: absolute;
  font-size: 1.7rem;
  color: white;
  /* margin: 0; */
  /* top: -10px; Adjust this value to position the scores relative to the line */
`;

const CenterText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
  font-family: text3;
`;