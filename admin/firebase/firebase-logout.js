// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBozP-nzVAwq3UNF4yu0AM2V1T9pweXNPo",
  authDomain: "fir-papaninformasi.firebaseapp.com",
  projectId: "fir-papaninformasi",
  storageBucket: "fir-papaninformasi.appspot.com",
  messagingSenderId: "920683588565",
  appId: "1:920683588565:web:0d12936bf5cb11f0c56b5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    firebase.auth().signOut().then(function() {
      window.location = "login.php";
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
}


      
