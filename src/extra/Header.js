import React from 'react';
import { FaQuestionCircle, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333; // Adjust background color as needed
  color: white; // Adjust text color as needed
`;

const HelpIcon = styled(FaQuestionCircle)`
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

const SettingsIcon = styled(FaCog)`
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
`;

const Header = () => {
  const handleHelpClick = () => {
    // Implement your help functionality here
    console.log('Help clicked!');
  };

  const handleSettingsClick = () => {
    // Implement your settings functionality here
    console.log('Settings clicked!');
  };

  return (
    <HeaderContainer>
      <HelpIcon onClick={handleHelpClick} />
      {/* Your component content goes here */}
      <SettingsIcon onClick={handleSettingsClick} />
    </HeaderContainer>
  );
};

export default Header;
