import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMkePtnpTZuUD67RmBKPTz7rFMYSXmrIs",
  authDomain: "teamreporterapp-f0bbd.firebaseapp.com",
  projectId: "teamreporterapp-f0bbd",
  storageBucket: "teamreporterapp-f0bbd.appspot.com",
  messagingSenderId: "108307404798",
  appId: "1:108307404798:web:ff4f699a988f43c62dd2af",
  measurementId: "G-FJ36Q4QQ4G"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;