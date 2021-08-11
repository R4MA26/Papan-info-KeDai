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

var d = new Date();
var t = d.getTime();
var counter = t;

/*================Mengambil Referensi Database =================*/
//Membuat ID untuk parameter data
console.log(counter);
counter += 1;
console.log(counter);
var id = counter;

// referensi ke database
var db = firebase.database();

//referensi untuk tampilkan data
var adminRef = db.ref("admin");

//referensi untuk tambah data 
var addadminRef = db.ref("admin/" + id);

/*================Mengambil data dari form=================*/
document.getElementById("form-admin").addEventListener("submit", e => {
    var nama = document.getElementById("nama-admin").value;
    //get your select image
    var image = document.getElementById("gambar-admin").files[0];
    e.preventDefault();
    createAdmin(id, nama, image);
});

function createAdmin(id, nama, image) {
    //============UPLOAD IMAGE ==================//
    //now get your image name
    var imageName = image.name;
    //firebase  storage reference
    //it is the path where yyour image will store
    var storageRef = firebase.storage().ref('admin/' + imageName);
    //upload image to selected storage reference

    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        //handle error here
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload image url here...
            var url_image = downlaodURL;

            //============ Input data ke database beserta url image ==================//
            addadminRef.set({
                id: id,
                nama_admin: nama,
                url: url_image
            });

            //reload setelah submit data
            window.location.reload();
        });
    });
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
adminRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_admin = document.getElementById("table-admin");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_admin = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_admin +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().nama_admin + "</td>" +
            '<td><img src="' + cetak.val().url + '" width="50" height="50">' +
            '<td><button class="btn btn-sm btn-danger" onclick="deleteAdmin(\'' + cetak.val().id + "')\">Hapus</button></td>" +
            "</tr>";
        nomor++;
    });
    //passing data dari variable tabel ke view_surat
    view_admin.innerHTML = tabel_admin;
}
function dataGagal(err) {
    console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat 
function editAdmin(id) {

    var query = db.ref('admin/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditAdmin);

    //function untuk passing data ke form edit data surat
    function isieditAdmin(dataAdmin) {
        var data = dataAdmin.val();
        document.getElementById('nama-admin-edit').value = data.nama_admin;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-admin-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var nama_edit = document.getElementById('nama-admin-edit').value;

        //get your select image
        var image_edit = document.getElementById("gambar-admin-edit").files[0];

        //============UPLOAD IMAGE ==================//
        //now get your image name
        var imagenameEdit = image_edit.name;
        //firebase  storage reference
        //it is the path where yyour image will store
        var storageRef = firebase.storage().ref('admin/' + imagenameEdit);
        //upload image to selected storage reference

        var uploadTask = storageRef.put(image_edit);

        uploadTask.on('state_changed', function (snapshot) {
            //observe state change events such as progress , pause ,resume
            //get task progress by including the number of bytes uploaded and total
            //number of bytes
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("upload is " + progress + " done");
        }, function (error) {
            //handle error here
            console.log(error.message);
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
                //get your upload image url here...
                var url_image_edit = downlaodURL;

                //membuat variable yg akan menampung field database dan data yg akan di input ke database
                var newdataEdit = {
                    nama_admin: nama_edit,
                    url: url_image_edit
                };

                //update data ke database
                adminRef.child(id).update(newdataEdit);

                //reload setelah submit data
                window.location.reload();
            });
        });
        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deleteAdmin(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        adminRef.child(id).remove();
    }
}
    
