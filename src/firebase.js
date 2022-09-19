import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEetky776F5cT9M55xstITDlNJz8UMLpY",
  authDomain: "genspeaks2022.firebaseapp.com",
  projectId: "genspeaks2022",
  storageBucket: "genspeaks2022.appspot.com",
  messagingSenderId: "470000240500",
  appId: "1:470000240500:web:cfdb4b407134d322044e21",
  measurementId: "G-Y93E6W0WGX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;
