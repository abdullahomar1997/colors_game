import React from 'react';
import styled from 'styled-components';

const TimerText = styled.p`
  margin: 0;
`;

const Timer = ({seconds}) => {
  return (
      <TimerText>{seconds}</TimerText>
  );
};

export default Timer;
