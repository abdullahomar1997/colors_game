// // Assume you have Firebase initialized (config and app).

// import { collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

// const db = firebase.firestore();
// const gamesCollection = collection(db, 'games');

// // Function to create or join a game
// async function joinGame(playerInfo) {
//   try {
//     // Check if there are open games (status: 'waiting') where player2 is not set
//     const querySnapshot = await getDocs(gamesCollection.where('status', '==', 'waiting').where('player2', '==', null));

//     if (!querySnapshot.empty) {
//       // Join an existing game
//       const gameDoc = querySnapshot.docs[0].ref;
//       await setDoc(gameDoc, { player2: playerInfo, status: 'ready' }, { merge: true });
//       console.log('Joined existing game:', gameDoc.id);
//     } else {
//       // Create a new game
//       const newGameRef = doc(gamesCollection);
//       await setDoc(newGameRef, { player1: playerInfo, status: 'waiting' });
//       console.log('Created new game:', newGameRef.id);

//       // Listen for changes to the game document
//       onSnapshot(newGameRef, (docSnapshot) => {
//         const gameData = docSnapshot.data();
//         console.log('Game status:', gameData.status);

//         // Additional logic based on game status
//         if (gameData.status === 'ready') {
//           // Start the game
//           startGameLogic(gameData);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error joining game:', error);
//   }
// }

// // Function to start the game logic
// function startGameLogic(gameData) {
//   // Implement your game logic here based on the data in gameData
//   console.log('Game is ready. Start the game:', gameData);
// }

// // Example usage:
// const player1Info = { name: 'Player1', uid: 'player1uid' };
// const player2Info = { name: 'Player2', uid: 'player2uid' };

// // Player 1 joins or creates a game
// joinGame(player1Info);

// // Player 2 joins or creates the same game
// joinGame(player2Info);
