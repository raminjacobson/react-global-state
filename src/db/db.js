const firebase = require('firebase');
const config = {
    apiKey: "AIzaSyD7HrBXXbtJNer_2b5oJdql_ueITGqX3Vs",
    authDomain: "ramin-tests.firebaseapp.com",
    databaseURL: "https://ramin-tests.firebaseio.com",
    projectId: "ramin-tests",
    storageBucket: "ramin-tests.appspot.com",
    messagingSenderId: "209407661020",
    appId: "1:209407661020:web:cfaeb912fea4c637f9b519",
    measurementId: "G-W4R9DTC68V"
};
const FBApp = firebase.initializeApp(config);

FBApp.firestore().enablePersistence();

module.exports = FBApp;
