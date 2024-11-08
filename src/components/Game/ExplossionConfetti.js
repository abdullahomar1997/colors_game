// ConfettiExplosion.js
import React, {useState} from "react";
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";

const ConfettiExplosion = () => {
    const [isExploding, setIsExploding] = useState(false);
    const {width, height} = useWindowSize();

    const handleExplosion = () => {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 3000); // Confetti explosion lasts for 3 seconds
    };

    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            {isExploding && <Confetti width={width} height={height} />}
            <button onClick={handleExplosion} style={{padding: "10px 20px", fontSize: "16px"}}>
                Click for Explosion
            </button>
        </div>
    );
};

export default ConfettiExplosion;
