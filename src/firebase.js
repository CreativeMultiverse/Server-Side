import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDRZUJdWBvKM4zvz7hEH3bPRaz-7PkTwEM",
  authDomain: "gradee-app.firebaseapp.com",
  databaseURL: "https://gradee-app.firebaseio.com",
  projectId: "gradee-app",
  storageBucket: "",
  messagingSenderId: "586913820441"
});

export const db = app.database();
export const users = db.ref("users");
export const testRef = db.ref("tests");
export const questionsRef = db.ref("questions");
