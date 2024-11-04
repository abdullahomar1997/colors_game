import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {colorsList} from "../utils/Colors";
import {db} from './firebase';

export async function createOrJoinGame(playerUid, playerName) {

  let found = true;

  const gamesCollection = collection(db, 'games');

  const querySnapshot = await getDocs(query(gamesCollection, where('player2', '==', null)));

  if (!querySnapshot.empty) {
    const gameDoc = querySnapshot.docs[0];
    await updateDoc(gameDoc.ref, {player2: {uid: playerUid, username: playerName}});
    return gameDoc.id;
  } else {
    const colors = colorsList.slice(0, 5);

    const newGameRef = await addDoc(gamesCollection, {
      player1: {uid: playerUid, username: playerName},
      player2: null,
      gameState: {
        colorarray1: shuffleArray(colors),
        colorarray2: shuffleArray(colors),
        scoreplayer1: 0,
        scoreplayer2: 0,
        status: 'pending',
      },
    });
    return newGameRef.id;
  }
}

export function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const updateScore = (score, gameId, num) => {
  const gameDocRef = doc(db, 'games', gameId);
  if (num === 1) {
    updateDoc(gameDocRef, {"gameState.scoreplayer1": score});
  }
  else {
    updateDoc(gameDocRef, {"gameState.scoreplayer2": score});
  }
};

export function countMatchingColors(arr1, arr2) {
  const minLength = Math.min(arr1.length, arr2.length);
  let count = 0;

  for (let i = 0; i < minLength; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }

  return count;
}

export const updateGameStatus = (gameId) => {
  if (gameId) {
    const gameDoc = doc(db, 'games', gameId);
    updateDoc(gameDoc, {
      gameState: {
        status: "done"
      },
    });
  }
};

export const handleAddString = (levelId) => {
  const existingArrayString = localStorage.getItem('levelwon-colormatch');
  const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];

  const updatedArray = [...existingArray, levelId];
  localStorage.setItem('levelwon-colormatch', JSON.stringify(updatedArray));
};

// const existingArrayString = localStorage.getItem('levelwon');
// const existingArray = existingArrayString ? JSON.parse(existingArrayString) : [];

// const handleAddString = (newString) => {
//   const updatedArray = [...existingArray, newString];
//   localStorage.setItem('levelwon', JSON.stringify(updatedArray));
// };

export const handleMaxLevel = (level) => {
  const currentBestLevel = localStorage.getItem('maxlevel-colormatch');

  // Parse the current best score or set it to 0 if it doesn't exist
  const parsedBestLevel = currentBestLevel ? parseInt(currentBestLevel, 10) : 0;

  // Update if the new score is higher
  if (level > parsedBestLevel) {
    localStorage.setItem('maxlevel-colormatch', level);
  }
};

export const getMaxLevel = () => {
  const currentBestLevel = localStorage.getItem('maxlevel-colormatch');

  const parsedBestLevel = currentBestLevel ? parseInt(currentBestLevel, 10) : 0;

  return parsedBestLevel;
};



