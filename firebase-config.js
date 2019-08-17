// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAXmiZgNZ0moGmLFnLDWnj-S-lrPGXekv4",
  authDomain: "global-chat-live.firebaseapp.com",
  databaseURL: "https://global-chat-live.firebaseio.com",
  projectId: "global-chat-live",
  storageBucket: "",
  messagingSenderId: "727752405013",
  appId: "1:727752405013:web:a3a69f5b14c91cea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();