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
ref.on('value', function (snapshot) {
    console.log("updated value: ", snapshot.val());
});

// read once
ref.once('value').then(function (snapshot) {
    console.log("read value once: ", snapshot.val());
});


// -----------------------------
// WRITE to realtime db
ref.set({ name: "calendar" }, function (error) {
    if (error) {
        console.log("write failed!");
    } else {
        console.log("write successful!");
    }
});


// -----------------------------
// AUTHENTICATION
let ui = new firebaseui.auth.AuthUI(firebase.auth());

// Auth UI configuration
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log(authResult);
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);