// BombExplosion.js
import React, {useState} from "react";
import styled, {keyframes} from "styled-components";

// Define keyframes for the explosion circle animation with larger scale
const explodeCircle = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(8); /* Increased scale */
    opacity: 0;
  }
`;

// Define keyframes for particle animation with adjusted scale and spread
const explodeParticle = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  to {
    transform: translate(
      calc(-50% + (100px - 200px * var(--x))), /* Increased spread */
      calc(-50% + (100px - 200px * var(--y)))  /* Increased spread */
    ) scale(1); /* Increased scale for larger particles */
    opacity: 0;
  }
`;

// Styled component for the explosion circle with increased size
const ExplosionCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px; /* Increased size */
  height: 40px; /* Increased size */
  background-color: orange;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${explodeCircle} 2s ease-out forwards; /* Slightly longer duration */
`;

// Styled component for each particle with increased size
const Particle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px; /* Increased particle size */
  height: 32px; /* Increased particle size */
  background-color: red;
  border-radius: 50%;
  animation: ${explodeParticle} 0.8s ease-out forwards; /* Slightly longer duration */
  opacity: 0.9;
`;

// Styled container for the explosion and button
const ExplosionContainer = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 20px;
`;

// Styled button for triggering the explosion
const ExplosionButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const BombExplosion = () => {
    const [isExploding, setIsExploding] = useState(true);

    const handleExplosion = () => {
        setIsExploding(true);
        // setTimeout(() => setIsExploding(false), 1000); // Reset after 1 second
    };

    return (
        <ExplosionContainer>
            {isExploding && <ExplosionCircle />}
            {isExploding &&
                Array.from({length: 15}).map((_, i) => (
                    <Particle
                        key={i}
                        style={{
                            "--x": Math.random(),
                            "--y": Math.random(),
                        }}
                    />
                ))}
        </ExplosionContainer>
    );
};

export default BombExplosion;
