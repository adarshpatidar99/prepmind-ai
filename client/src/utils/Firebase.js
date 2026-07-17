import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "prepmind-ai-5afb2.firebaseapp.com",
  projectId: "prepmind-ai-5afb2",
  storageBucket: "prepmind-ai-5afb2.firebasestorage.app",
  messagingSenderId: "354697185485",
  appId: "1:354697185485:web:439e6ebd6babcbf33e8184",
  measurementId: "G-GHDFRSLTD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = GoogleAuthProvider();

export { auth, provider};