import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"





const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "nflix-b081b",
  storageBucket: "nflix-b081b.appspot.com",
  messagingSenderId: "643280976232",
  appId: "1:643280976232:web:94e8ef67be396a05e1bedd"
};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

export {app,auth,db};
