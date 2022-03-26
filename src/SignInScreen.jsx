import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Logo from "./images/Logo.png";
// Configure Firebase.
const config = {
  apiKey: "AIzaSyA_jP0AbWnlp_Dl8TazKw8brqEn73lvn5E",
  authDomain: "engi5100-nearme.firebaseapp.com",
  projectId: "engi5100-nearme",
  storageBucket: "engi5100-nearme.appspot.com",
  messagingSenderId: "841671114552",
  appId: "1:841671114552:web:e10ed3b92893481976cbcd",
  measurementId: "G-M4GJ7011MD",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/menu",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <body style={{ background: "white" }}>
      <div>
        <img src={Logo} />
        <br></br>
        <h1 style={{ color: "#E1373D" }}>Please sign-in with Google:</h1>
        <br></br>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </body>
  );
}

export default SignInScreen;
