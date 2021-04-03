import firebase from "firebase/app";

export const assignClick = (elementId, func) => {
    const clickElement = document.getElementById(elementId);
    if (clickElement) clickElement.onclick = func;
}

export const initializeHeaderButtons = () => {
    const buttonsForNotLoggedUsers = [document.getElementById('sign-in-button')];
    const buttonsForLoggedUser = [document.getElementById('sign-out-button')];
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            buttonsForNotLoggedUsers.forEach(button => {
                button.style.display = 'none';
            });
            buttonsForLoggedUser.forEach(button => {
                button.style.display = 'inline-block';
            });
        }
        else{
            buttonsForNotLoggedUsers.forEach(button => {
                button.style.display = 'inline-block';
            });
            buttonsForLoggedUser.forEach(button => {
                button.style.display = 'none';
            });
        }
    })
}