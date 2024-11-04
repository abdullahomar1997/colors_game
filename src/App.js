import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Auth from './components/Auth';
import Game from './components/Game/Game';
import Home2 from './components/Home2';

let level2 = null;

const App = () => {
  return (
    <Router>
      <HomeContainer>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/play-offline" element={<Game />} />
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
