// import firebase from 'firebase';
// import "firebase/database";
// const firebaseConfig = {
//     apiKey: "AIzaSyAYuEK1vQAGZKsJrewElogYsfWp1MGFB1c",
//     authDomain: "twitter-clone-63ae2.firebaseapp.com",
//     projectId: "twitter-clone-63ae2",
//     storageBucket: "twitter-clone-63ae2.appspot.com",
//     messagingSenderId: "749731544644",
//     appId: "1:749731544644:web:b43284f88ff5af39780611",
//     measurementId: "G-PR27G3YQQ8"
//   };

//   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const db = firebase.firestore();

// export default db;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore/lite';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAYuEK1vQAGZKsJrewElogYsfWp1MGFB1c",
//   authDomain: "twitter-clone-63ae2.firebaseapp.com",
//   projectId: "twitter-clone-63ae2",
//   storageBucket: "twitter-clone-63ae2.appspot.com",
//   messagingSenderId: "749731544644",
//   appId: "1:749731544644:web:b43284f88ff5af39780611",
//   measurementId: "G-PR27G3YQQ8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// export default db;



// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYuEK1vQAGZKsJrewElogYsfWp1MGFB1c",
  authDomain: "twitter-clone-63ae2.firebaseapp.com",
  projectId: "twitter-clone-63ae2",
  storageBucket: "twitter-clone-63ae2.appspot.com",
  messagingSenderId: "749731544644",
  appId: "1:749731544644:web:b43284f88ff5af39780611",
  measurementId: "G-PR27G3YQQ8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db =firebase.firestore();

export default db;
