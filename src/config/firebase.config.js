import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRgzM_hsLJatTUuiAUJQaTN5_nsaJE3Mg",
  authDomain: "ema-jhon-client.firebaseapp.com",
  projectId: "ema-jhon-client",
  storageBucket: "ema-jhon-client.appspot.com",
  messagingSenderId: "797433058524",
  appId: "1:797433058524:web:c2871f514b5e1519575019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);