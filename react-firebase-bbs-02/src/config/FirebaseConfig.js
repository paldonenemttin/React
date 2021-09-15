import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwh6nUTtXODqLCEgcdhYuQQaTMv-FGvpQ",
  authDomain: "attch-2d724.firebaseapp.com",
  databaseURL: "https://attch-2d724-default-rtdb.firebaseio.com",
  projectId: "attch-2d724",
  storageBucket: "attch-2d724.appspot.com",
  messagingSenderId: "832175601298",
  appId: "1:832175601298:web:449dc220d7d7626fcb984b",
  measurementId: "G-DDW701J6CR"
};

// firebase 관련 연결 connection이 불필요하게 연결생성을 방지
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

const realDB = firebase.database();
const firestore = firebase.firestore();

export { realDB, firestore };