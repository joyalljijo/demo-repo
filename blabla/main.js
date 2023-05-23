// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWQp2Ys_9S4LKaa8J_YBY4l8fjgp1xOyQ",
  authDomain: "blabla-cbb1e.firebaseapp.com",
  databaseURL: "https://blabla-cbb1e-default-rtdb.firebaseio.com",
  projectId: "blabla-cbb1e",
  storageBucket: "blabla-cbb1e.appspot.com",
  messagingSenderId: "252422876974",
  appId: "1:252422876974:web:5989b16851b57ddbbf14bf",
  measurementId: "G-SN5FNF5YDZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();

// Create a text input element
const textInput = document.getElementById("textInput");

// Create an event listener for the text input element
textInput.addEventListener("input", () => {
  // Get the text value from the text input element
  const text = textInput.value;

  // Push the text value to the Firebase database
  database.ref("messages").push(text);
});
