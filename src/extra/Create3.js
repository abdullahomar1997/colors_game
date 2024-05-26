
// async function getFirstDocument() {
//     try {
//       const q = query(collection(db, 'games'), limit(1));
  
//       const querySnapshot = await getDocs(q);
  
//       if (!querySnapshot.empty) {
//         const firstDocument = querySnapshot.docs[0].data();
  
//         console.log('First document data:', firstDocument);
//       } else {
//         console.log('No documents found in the collection.');
//       }
//     } catch (error) {
//       console.error('Error getting first document:', error);
//     }
//   }
  
//   async function createGame1(player1, player2) {
//       const gameData = {
//         player1: { id: player1.id, name: player1.name },
//         player2: { id: player2.id, name: player2.name },
//         gameState: 'pending', // You can define various game states
//       };
    
//       const gameRef = doc(db, 'games', player1.id + '-' + player2.id);
    
//       try {
//         await setDoc(gameRef, gameData);
//         console.log('Game created:', gameRef.id);
//       } catch (error) {
//         console.error('Error creating game:', error);
//       }
//     }
  
    
//   async function findMatch(player) {
//       const playersCollection = collection(db, 'players');
//       const q = query(playersCollection, where('status', '==', 'waiting'), where('id', '!=', player.id));
    
//       try {
//         const querySnapshot = await getDoc(q);
    
//         if (!querySnapshot.empty) {
//           const opponent = querySnapshot.docs[0].data();
    
//           // Mark both players as 'matched' in the 'players' collection
//           await Promise.all([
//             setDoc(doc(db, 'players', player.id), { status: 'matched' }),
//             setDoc(doc(db, 'players', opponent.id), { status: 'matched' }),
//           ]);
    
//           // Create a new game document for the matched players
//           await createGame1(player, opponent);
    
//           console.log('Players matched:', player.id, opponent.id);
//         } else {
//           console.log('No available players to match with.');
//         }
//       } catch (error) {
//         console.error('Error finding match:', error);
//       }
//     }
    
//     // Listen for changes in the 'players' collection to find matches
//     onSnapshot(collection(db, 'players'), (snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         const player = change.doc.data();
    
//         if (change.type === 'added' && player.status === 'waiting') {
//           // Player added and waiting for a match
//           findMatch(player);
//         }
//       });
//     });
  