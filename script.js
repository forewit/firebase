// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsBkU7NKqKn9gAV07V_21AkQMw3ZJQ9hQ",
    authDomain: "canvas-2fdd2.firebaseapp.com",
    databaseURL: "https://canvas-2fdd2.firebaseio.com",
    projectId: "canvas-2fdd2",
    storageBucket: "canvas-2fdd2.appspot.com",
    messagingSenderId: "989212373436",
    appId: "1:989212373436:web:2491b895c5a13ec3007bb9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
let database = firebase.database();
let ref = database.ref("data/");


// -----------------------------
// READ from realtime db

// value event triggers on every change
ref.on('value', function(snapshot) { 
    console.log("updated value: ", snapshot.val());
});

// read once
ref.once('value').then(function(snapshot) {
    console.log("read value once: ", snapshot.val());
});

// -----------------------------
// WRITE to realtime db
ref.set({name:"calendar"}, function(error) {
    if (error) {
        console.log("write failed!");
    } else {
        console.log("write successful!");
    }
});
