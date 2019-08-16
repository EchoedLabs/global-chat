// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJuDc5gGTYIkL4RRvf4qobNXilkHxT7tM",
  authDomain: "el-global-chat.firebaseapp.com",
  databaseURL: "https://el-global-chat.firebaseio.com",
  projectId: "el-global-chat",
  storageBucket: "",
  messagingSenderId: "443137110827",
  appId: "1:443137110827:web:d9e8c1b0a53e78f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();