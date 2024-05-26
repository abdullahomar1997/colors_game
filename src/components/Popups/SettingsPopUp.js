import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darkenColor } from '../../utils/utils';

const SettingsPopUp = ({isSettingsOpen,closeSettings}) => {
    
    return (
        <>
        {isSettingsOpen && (
             <ModalOverlay onClick={closeSettings} >
                <Container>
                  <Title>
                    Settings
                  </Title>
                  <ButtonContainer>
                    <Button to="/" backgroundColor="#FF7F50">Privacy</Button>
                    <Button  to="/" backgroundColor="#92a166" >Support</Button>
                    <Button  to="/" backgroundColor="#c05cb2" >Contact Us</Button>
                    <Button  to="/" backgroundColor="#ffcc00" >Rate Us</Button>
                    <Button  to="/" backgroundColor="#4987d0" >More Games</Button>
                  </ButtonContainer>
                </Container>
            </ModalOverlay>
        )} 
    </>
)}

export default SettingsPopUp;

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

const Title = styled.p`
    margin: 0;
    font-size: 2rem;
    color: black;
    width: 100%;
    text-align: center;
    font-family: text9;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px 20px;
  margin-bottom: 0px;
  cursor: pointer;
  width: 50vmin;
  padding: 15px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  color: white;
  background-color: ${(props) => props.backgroundColor || '#3498db'};
  transition: background-color 0.3s ease;
  font-family: text2;
  
  &:hover {
    background-color: ${(props) => (props.backgroundColor ? darkenColor(props.backgroundColor, 10) : '#2980b9')};
  }
  &:active {
    background-color: #FF6347; /* Another shade of orange when the button is clicked */
  }
`;