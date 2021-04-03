import {assignClick, initializeHeaderButtons} from "./utilities";
import {googleSignIn, signOut} from "../firebase/firebaseAuthentication";
import {firebaseApp} from "../firebase/firebaseApp";

console.log("welcome");
initializeHeaderButtons();


assignClick('sign-in-google', () => {
    console.log('Sign in with Google');
    googleSignIn();
});

assignClick('sign-out-button', () => {
    console.log('Sign out');
    signOut();
})