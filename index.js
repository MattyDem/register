import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9vgmnlBzpPZp1_DI9xifg-E3oIEQR87o",
  authDomain: "btnregister.firebaseapp.com",
  databaseURL: "https://btnregister-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "btnregister",
  storageBucket: "btnregister.firebasestorage.app",
  messagingSenderId: "841258234764",
  appId: "1:841258234764:web:7c666f86834888f1945ca9",
  measurementId: "G-9NH1NHTGJS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const btn = document.getElementById("btnReg");

btn.addEventListener("click", () => {
  const newEntry = push(ref(db, "presses"));
  set(newEntry, {
    time: Date.now()
  });

  alert("Registered!");
});
