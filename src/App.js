import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from './components/Auth';
import GameLevelsScreen from './components/GameLevelsScreen';
import Home2 from './components/Home2';
import Game from './components/Game/Game';

let level2 =  null;

const App = () => {
  return (
    <Router>
      <HomeContainer>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/play-offline" element={<GameLevelsScreen />} />
          <Route path="/play-with-friends" element={<Auth />} />
        </Routes>
      </HomeContainer>
    </Router>
  );
};

export default App;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
