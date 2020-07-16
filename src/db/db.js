const firebase = require('firebase');
const config = {
    apiKey: "AIzaSyB5pbVcpaCuRcPDGgIYpoogFxZsO49xQXk",
    authDomain: "ramin-test-db.firebaseapp.com",
    databaseURL: "https://ramin-test-db.firebaseio.com",
    projectId: "ramin-test-db",
    storageBucket: "ramin-test-db.appspot.com",
    messagingSenderId: "654336298142",
    appId: "1:654336298142:web:52cb7420dd4e785a2e3f8f",
    measurementId: "G-04N587JVJF"
};
const FBApp = firebase.initializeApp(config);
module.exports = FBApp;
