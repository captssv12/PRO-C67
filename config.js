import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArZJhHLli9zB-K3TBs6k4oY8h7MBseyfg",
  authDomain: "wireless-buzzer-973b5.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-973b5-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-973b5",
  storageBucket: "wireless-buzzer-973b5.appspot.com",
  messagingSenderId: "134587986126",
  appId: "1:134587986126:web:c000153dfa0b3e7ddf609f"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
