// // Assume you have Firebase initialized (config and app).

// import { collection, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

// const db = firebase.firestore();

// async function createGame() {
//   try {
//     // Set initial game data
//     const initialGameData = {
//       player1: {
//         // Player 1 details
//       },
//       player2: null, // Player 2 will be added later
//       status: 'waiting', // Initial status of the game
//     };

//     // Add a new game document to the 'games' collection
//     const docRef = await setDoc(doc(db, 'games', 'uniqueGameID'), initialGameData);

//     console.log('Game created with ID:', docRef.id);
//   } catch (error) {
//     console.error('Error creating game:', error);
//   }
// }

// async function joinGame(gameID) {
//   try {
//     // Retrieve the existing game document
//     const gameDocRef = doc(db, 'games', gameID);
//     const gameDocSnapshot = await getDoc(gameDocRef);

//     if (gameDocSnapshot.exists()) {
//       const gameData = gameDocSnapshot.data();

//       // Check if there is space for another player (status: 'waiting' or custom logic)
//       if (gameData.status === 'waiting') {
//         // Update the game document with Player 2
//         await updateDoc(gameDocRef, {
//           player2: {
//             // Player 2 details
//           },
//           status: 'inProgress', // Update status to indicate the game is now in progress
//         });

//         console.log('Player 2 joined the game.');
//       } else {
//         console.log('Game is not available for joining.');
//       }
//     } else {
//       console.log('Game does not exist.');
//     }
//   } catch (error) {
//     console.error('Error joining game:', error);
//   }
// }

// // Example usage:
// // Player 1 creates a game
// createGame();

// // Player 2 joins the game using the game ID provided to Player 1
// joinGame('uniqueGameID');
