import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDp-1Un14Kn1PEZb_MiqMl6ggvWF62SZxU",
  authDomain: "hw-saver-internshala.firebaseapp.com",
  databaseURL: "https://hw-saver-internshala.firebaseio.com",
  projectId: "hw-saver-internshala",
  storageBucket: "hw-saver-internshala.appspot.com",
  messagingSenderId: "738812244422",
  appId: "1:738812244422:web:cc0f7d2e2b63e0b814c2c7",
};

export const createUserProfileDocument = async (userAuth, ...aditionalData) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`/users/${userAuth.id}`);
  const snapshot = await userReference.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        aditionalData,
      });
    } catch (error) {
      console.log("Error creating User:", error);
    }
  }
  return userReference;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// This gives access to Google Authentication

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
