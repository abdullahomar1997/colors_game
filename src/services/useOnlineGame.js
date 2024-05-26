import { useEffect, useState } from 'react';
import { countMatchingColors, createOrJoinGame, updateGameStatus, updateScore } from './GameServices';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase'; 

const useOnlineGame = (id,temp,topRowColors,setTopRowColors,bottomRowColors,setBottomRowColors,setStatus,setIsSettingsOpen,evaluation,setEvaluation) => {

    const [pnum ,setPnum] = useState(null);
    const [gameId, setGameId] = useState(null);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [recalculationTrigger, setRecalculationTrigger] = useState(false);
    
    const triggerOnlineRecalculation = () => {
        setRecalculationTrigger(!recalculationTrigger);
    }
    const resetCorrect = () => {
        triggerOnlineRecalculation(0);
    }
    
    useEffect(() => {
        const initializeGameAndListen  = async () => {
            const newGameId = await createOrJoinGame(id, "random");
            setGameId(newGameId); 
            
            const gameDocRef = doc(db, 'games', newGameId);
            
            const unsubscribe = onSnapshot(gameDocRef, (doc) => {
                
                if (doc.exists()) {
                    const gameData = doc.data();
                    
                    if(gameData.player2){
                        if(gameData.player1.uid === gameData.player2.uid ){
                            initializeGameAndListen();
                            return; // Exit to avoid further execution in this iteration
                        }
                    }
                    // if (gameData.gameState.status === "done") navigate('/');

                    if (!temp) {
                        setTopRowColors(gameData.gameState.colorarray1);
                        setBottomRowColors(gameData.gameState.colorarray2);
                        setPnum(gameData.player1.uid === id ? 1 : 2);
                        temp = true;
                    }

                    const score1 = gameData.gameState.scoreplayer1;
                    const score2 = gameData.gameState.scoreplayer2;
                    const currentPlayerIsPlayer1 = gameData.player1.uid === id;
                    const currentPlayerScore = currentPlayerIsPlayer1 ? score1 : score2;
                    const otherPlayerScore = currentPlayerIsPlayer1 ? score2 : score1;
                    
                    setNumber1(currentPlayerScore);
                    setNumber2(otherPlayerScore);
                    
                    if (currentPlayerScore === 5 || otherPlayerScore === 5) {
                        setStatus(currentPlayerScore === 5);
                        setIsSettingsOpen(true);
                    } 
                    
                    const targetValue = 10; 
                    
                    if (evaluation === targetValue - 1) {
                        setStatus(false);
                        setIsSettingsOpen(true);
                    }
                } 
            }); 
            return () => {
                unsubscribe();
                updateGameStatus(newGameId);
            };    
        };
        
        if(!gameId){
           id && initializeGameAndListen();
        }
    
    }, [db,topRowColors]);

     useEffect(() => {
      const onlineCalculate = () => {
        const matchingCount = countMatchingColors(topRowColors, bottomRowColors);
        updateScore(matchingCount, gameId, pnum);
        setEvaluation((prev) => prev - 1);
      };
      
      gameId && onlineCalculate()
      
    }, [recalculationTrigger]);

    return {gameId, setGameId,number1, setNumber1,number2, setNumber2,triggerOnlineRecalculation};
};

export default useOnlineGame;