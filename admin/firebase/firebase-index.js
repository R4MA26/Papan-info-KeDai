//count jumlah user yg terdaftar
firebase.database().ref().child("user").on("value", function(snapshot){
    views_user = snapshot.numChildren();
    document.getElementById("countuser").innerHTML = + views_user;
});

//count jumlah mobil yg terdaftar
firebase.database().ref().child("mobil").on("value", function(snapshot){
    views_mobil = snapshot.numChildren();
    document.getElementById("countmobil").innerHTML = + views_mobil;
});

//count jumlah pesanan yg terdaftar
firebase.database().ref().child("pesanan").on("value", function(snapshot){
    views_pesanan = snapshot.numChildren();
    document.getElementById("countpesanan").innerHTML = + views_pesanan;
});

//count jumlah admin yg terdaftar
firebase.database().ref().child("admin").on("value", function(snapshot){
    views_admin = snapshot.numChildren();
    document.getElementById("countadmin").innerHTML = + views_admin;
});


// //count jumlah admin yg terdaftar
// firebase.database().ref().child('/pesanan/' + id).on("value", function(snapshot){
//     views_keuntungan = snapshot.numChildren();
//     document.getElementById("countkeuntungan").innerHTML = + views_pesanan;
// });