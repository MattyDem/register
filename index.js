import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
    import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

    const firebaseConfig = {
      apiKey: "AIzaSyB9vgmnlBzpPZp1_DI9xifg-E3oIEQR87o",
      authDomain: "btnregister.firebaseapp.com",
      projectId: "btnregister",
      storageBucket: "btnregister.firebasestorage.app",
      messagingSenderId: "841258234764",
      appId: "1:841258234764:web:74427391f0529e57945ca9",
      measurementId: "G-6G63FD8C3H"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

	 const btn = document.getElementById("btnReg");
	
	 btn.addEventListener("click", () => {
      const newEntry = push(ref(db, "presses"));
      set(newEntry, {
        time: Date.now()
      });

      alert("Button pressed!");
	});