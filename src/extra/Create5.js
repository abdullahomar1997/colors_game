// let gameId = await createOrJoinGame (anonymousUser.uid, "random");
// setGameID(gameId);
// // listenForGameUpdates(gameId);
// const gameDocRef = doc(db, 'games', gameId);

// const unsubscribe = onSnapshot(gameDocRef, (doc) => {
//     if (doc.exists()) {
//         const gameData = doc.data();
//         if(gameData.gameState.status === "done"){
//           navigate('/');
//         }
//         if(!temp){
//           temp = true;
//           setTopRowColors(gameData.gameState.colorarray1);
//           setBottomRowColors(gameData.gameState.colorarray2)
//           if(gameData.player1.uid === anonymousUser.uid){
//             setPnum(1);
//           }
//           else{
//             setPnum(2);
//           }
//         }
        
//         if(gameData.player1.uid === anonymousUser.uid){
//           setNumber1(gameData.gameState.scoreplayer1);
//           setNumber2(gameData.gameState.scoreplayer2);
//         }
//         else{
//           setNumber1(gameData.gameState.scoreplayer2);
//           setNumber2(gameData.gameState.scoreplayer1);
//         }
//         if (matchingCount === topRowColors.length) {
//           setStatus(true)
//           openSettings();
//         }
//         if (10 - evaluation === 1) {
//           setStatus(false)
//           openSettings();
//         }
      
//       } else {
//         // Handle case when the game document no longer exists
//     }
// }); 
// // Return the unsubscribe function to stop listening when needed
// return unsubscribe;

// return () => {
//     // Update the database with the latest state values
//     if(gameID){
//     const gameDoc = doc(db, 'games', gameID);
//     updateDoc(gameDoc, {
//         gameState: {
//             status:"done"
//             // Update other fields as needed
//         },
//     });
//   }
// };

// if (gameData.player1.uid === id) {
//     setNumber1(score1);
//     setNumber2(score2);

//     if(score1 === topRowColors.length){
//       setStatus(true);
//       openSettings();
//     }
//     if(score2 === topRowColors.length){
//       setStatus(false);
//       openSettings();
//     }
    
//   } else {
//     setNumber1(score2);
//     setNumber2(score1);

//     if(score2 === topRowColors.length){
//       setStatus(true);
//       openSettings();
//     }
//     if(score1 === topRowColors.length){
//       setStatus(false);
//       openSettings();
//     }

//   }