// ===== FIREBASE CONFIG TEMPLATE =====
// Copy this file to "firebase-config.js" and add your actual keys

// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const auth = firebase.auth();
const database = firebase.database();

console.log(
  "%c🔥 Firebase initialized successfully!",
  "color: #ff6b35; font-weight: bold;"
);
