import firebase from "firebase/app";
import 'firebase/auth';

export const googleSignIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(authProvider)
        .then(res => {
            console.log('Successfully logged in', res.user.displayName);
            window.location = 'index.html';
        })
        .catch(err => console.log('Error occurred while signing in with Google', err));
}

export const signOut = () => {
    firebase.auth().signOut()
        .then(() => console.log('Successfully logged out'))
        .catch(err => console.log('Error occurred while signing out with Google', err))
}