// // Example function to create or join a game
// async function createOrJoinGame(playerUid, playerName) {
//     const gamesCollection = collection(db, 'games');
  
//     // Check if there's an open slot in an existing game
//     const querySnapshot = await getDocs(gamesCollection.where('player2', '==', null));
  
//     if (!querySnapshot.empty) {
//       // Join an existing game
//       const gameDoc = querySnapshot.docs[0];
//       await updateDoc(gameDoc.ref, { player2: { uid: playerUid, username: playerName } });
//       return gameDoc.id;
//     } else {
//       // Create a new game
//       const newGameRef = await addDoc(gamesCollection, {
//         player1: { uid: playerUid, username: playerName },
//         player2: null,
//         gameState: { /* initial game state */ },
//         // other game-related data
//       });
//       return newGameRef.id;
//     }
//   }

//   // Example function to listen for real-time updates
// function listenForGameUpdates(gameId) {
//     const gameDocRef = doc(db, 'games', gameId);
  
//     const unsubscribe = onSnapshot(gameDocRef, (doc) => {
//       if (doc.exists()) {
//         const gameData = doc.data();
//         // Update UI or game state based on real-time updates
//       } else {
//         // Handle case when the game document no longer exists
//       }
//     });
  
//     // Return the unsubscribe function to stop listening when needed
//     return unsubscribe;
//   }
  
  