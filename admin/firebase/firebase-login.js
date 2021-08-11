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


// /*================Mengambil data dari form=================*/
document.getElementById("form-login").addEventListener("submit", e => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    e.preventDefault();
    
    //============ Input data ke auth firebase ==================//
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        //ambil data satu kali di child admin berdasarkan uid email yg digunakan login
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/admin/' + userId).once('value').then(function(snapshot) {
            var role = snapshot.val().role;
            if (role == "admin"){
                alert("Berhasil Login Sebagai Admin !");
                //redirrect ke index.php jika role dari email yang digunakan login adalah "admin"
                window.location = "index.php";
            }else {
                alert("Anda Bukan Admin !");
                //redirrect ke login.php jika role dari email yang digunakan login bukan "admin"
                window.location = "login.php";
            }
        });

    }).catch(function(error) { 
        console.log(error);
        alert(error.message);
    });  

});


function checkLogin(){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          uid = user.uid;
          // ...
      } else {
          uid = null;
          window.location = "login.php";
      }
    });  
}