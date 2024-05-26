// import { useEffect, useState } from 'react';
// import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
// import { db } from './firebase'; // Adjust the path based on your project structure

// const useFirestoreSubscription = (gameDocRef, anonymousUser) => {
//     const [topRowColors, setTopRowColors] = useState([]);
//     const [bottomRowColors, setBottomRowColors] = useState([]);
//     // Add other state variables as needed
//     const [temp, setTemp] = useState(false); // Assuming temp is a state variable

//     useEffect(() => {
//         const unsubscribe = onSnapshot(gameDocRef, (doc) => {
//             if (doc.exists()) {
//                 const gameData = doc.data();
//                 if (!temp) {
//                     setTemp(true);
//                     setTopRowColors(gameData.gameState.colorarray1);
//                     setBottomRowColors(gameData.gameState.colorarray2);

//                     if (gameData.player1.uid === anonymousUser.uid) {
//                         setPnum(1);
//                     } else {
//                         setPnum(2);
//                     }
//                 }

//                 if (gameData.player1.uid === anonymousUser.uid) {
//                     setNumber1(gameData.gameState.scoreplayer1);
//                     setNumber2(gameData.gameState.scoreplayer2);
//                 } else {
//                     setNumber1(gameData.gameState.scoreplayer2);
//                     setNumber2(gameData.gameState.scoreplayer1);
//                 }
//             } else {
//                 // Handle case when the game document no longer exists
//             }
//         });

//         // Cleanup function to update the database when the component is about to unmount
//         return () => {
//             // Update the database with the latest state values
//             const gameDoc = doc(db, 'yourCollection', 'yourDocument'); // Update with your actual collection and document names
//             updateDoc(gameDoc, {
//                 gameState: {
//                     colorarray1: topRowColors,
//                     colorarray2: bottomRowColors,
//                     // Update other fields as needed
//                 },
//             });
//         };

//         // Include dependencies as needed
//     }, [gameDocRef, anonymousUser, topRowColors, bottomRowColors, temp]);

//     return {
//         topRowColors,
//         bottomRowColors,
//         // Add other state variables as needed
//     };
// };

// export default useFirestoreSubscription;
