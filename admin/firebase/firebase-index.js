
// referensi ke database
var db = firebase.database();

//referensi untuk tampilkan data
var adminRef = db.ref("admin");

//count jumlah user yg terdaftar
    firebase.database().ref().child("admin").on("value", function(snapshot){
    views_admin = snapshot.numChildren();
    document.getElementById("admin").innerHTML = + views_admin;
});

//count jumlah mobil yg terdaftar
    firebase.database().ref().child("program").on("value", function(snapshot){
    views_program = snapshot.numChildren();
    document.getElementById("program").innerHTML = + views_program;
});

//count jumlah pesanan yg terdaftar
    firebase.database().ref().child("multimedia").on("value", function(snapshot){
    views_multimedia = snapshot.numChildren();
    document.getElementById("multimedia").innerHTML = + views_multimedia;
});

//count jumlah admin yg terdaftar
    firebase.database().ref().child("jaringan").on("value", function(snapshot){
    views_jaringan = snapshot.numChildren();
    document.getElementById("jaringan").innerHTML = + views_jaringan;
});

//count jumlah admin yg terdaftar
    firebase.database().ref().child("hardware").on("value", function(snapshot){
    views_hardware = snapshot.numChildren();
    document.getElementById("hardware").innerHTML = + views_hardware;
});


// //count jumlah admin yg terdaftar
// firebase.database().ref().child('/pesanan/' + id).on("value", function(snapshot){
//     views_keuntungan = snapshot.numChildren();
//     document.getElementById("countkeuntungan").innerHTML = + views_pesanan;
// });