// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvIbPNBaUGc5LK0wujhIFSG_WTcT7ElLc",
  authDomain: "sessionid-74814.firebaseapp.com",
  projectId: "sessionid-74814",
  storageBucket: "sessionid-74814.appspot.com",
  messagingSenderId: "299780937054",
  appId: "1:299780937054:web:d59aeaedccd1439c6febcf",
  measurementId: "G-JSQEE28YSP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase initialized");

export { db };
