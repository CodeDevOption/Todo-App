
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBOSGqp--KMrFVYBfDg6S8lBf5-42IW7Q",
  authDomain: "todo-app-1d59a.firebaseapp.com",
  projectId: "todo-app-1d59a",
  storageBucket: "todo-app-1d59a.appspot.com",
  messagingSenderId: "290302849946",
  appId: "1:290302849946:web:841b9adbcdcc2cbca58023",
  measurementId: "G-RBXSSQ3TG5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db