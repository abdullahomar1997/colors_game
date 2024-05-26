import { useEffect, useState } from "react";
import { getAuth, signInAnonymously, updateProfile, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../services/firebase'; // Adjust the path based on your project structure
import PlayWithFriends from "./PlayWithFriends";
import Game from "./Game/Game";

const Auth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                try {
                    const { user: anonymousUser } = await signInAnonymously(auth);
                    console.log('Signed in anonymously:', anonymousUser);
                } catch (error) {
                    console.error('Error signing in anonymously:', error);
                }
            } else {
                setUser(currentUser);

                if (!currentUser.uid || currentUser.isAnonymous) {
                    // User is either not authenticated or is anonymous
                    const newUID = currentUser.uid;

                    try {
                        await setDoc(doc(db, 'users', newUID), {
                            displayName: currentUser.displayName || 'Anonymous',
                            uid: newUID,
                        });

                        await updateProfile(currentUser, {
                            displayName: currentUser.displayName || 'Anonymous',
                        });

                        console.log('UID set:', newUID);
                    } catch (error) {
                        console.error('Error setting UID:', error);
                    }
                }
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return user ? <Game id={user.uid} /> :<p>Please sign in.</p>;
};

export default Auth;