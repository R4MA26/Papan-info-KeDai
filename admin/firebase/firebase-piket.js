// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyTyPt--P3iv2rie-OKTCDlolIDS4T1Es",
    authDomain: "papan-informasi-38af4.firebaseapp.com",
    databaseURL: "https://papan-informasi-38af4.firebaseio.com",
    projectId: "papan-informasi-38af4",
    storageBucket: "papan-informasi-38af4.appspot.com",
    messagingSenderId: "393773272937",
    appId: "1:393773272937:web:d615bd34e93a932b0237f8",
    measurementId: "G-TW4F0YC295"
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
var pemateriRef = db.ref("piket/pemateri");

//referensi untuk tambah data 
var addpemateriRef = db.ref("piket/pemateri/" + id);
//referensi untuk tampilkan data
var pesertaRef = db.ref("piket/peserta");

//referensi untuk tambah data 
var addpesertaRef = db.ref("piket/peserta/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-pemateri").addEventListener("submit", e => {
    var nama = document.getElementById("nama-piket").value;
    var hari = document.getElementById("hari-piket").value;
    //get your select image
    var image = document.getElementById("gambar-pemateri").files[0];
    e.preventDefault();
    createPemateri(id, nama, hari, image);
});

function createPemateri(id, nama, hari, image) {
    //============UPLOAD IMAGE ==================//
    //now get your image name
    var imageName = image.name;
    //firebase  storage reference
    //it is the path where yyour image will store
    var storageRef = firebase.storage().ref('piket/pemateri/' + imageName);
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
            addpemateriRef.set({
                id: id,
                nama_pemateri: nama,
                hari: hari,
                url: url_image
            });

            //reload setelah submit data
            window.location.reload();
        });
    });
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
pemateriRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_pemateri = document.getElementById("table-pemateri");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_pemateri = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_pemateri +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().nama_pemateri + "</td>" +
            "<td>" + cetak.val().hari + "</td>" +
            '<td><img src="' + cetak.val().url + '" width="50" height="50">' +
            '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-2" onclick="editPemateri(\'' + cetak.val().id + '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deletePemateri(\'' + cetak.val().id + "')\">Hapus</button></td>" +
            "</tr>";
        nomor++;
    });
    //passing data dari variable tabel ke view_surat 
    view_pemateri.innerHTML = tabel_pemateri;
}
function dataGagal(err) {
    console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat 
function editPemateri(id) {

    var query = db.ref('piket/pemateri/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditPemateri);

    //function untuk passing data ke form edit data surat
    function isieditPemateri(dataPemateri) {
        var data = dataPemateri.val();
        document.getElementById('nama-pemateri-edit').value = data.nama_pemateri;
        document.getElementById('hari-pemateri-edit').value = data.hari;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-pemateri-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var nama_edit = document.getElementById('nama-pemateri-edit').value;
        var hari_edit = document.getElementById('hari-pemateri-edit').value;

        //get your select image
        var image_edit = document.getElementById("gambar-pemateri-edit").files[0];

        //============UPLOAD IMAGE ==================//
        //now get your image name
        var imagenameEdit = image_edit.name;
        //firebase  storage reference
        //it is the path where yyour image will store
        var storageRef = firebase.storage().ref('piket/pemateri/' + imagenameEdit);
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
                    nama_pemateri: nama_edit,
                    hari: hari_edit,
                    url: url_image_edit
                };

                //update data ke database
                pemateriRef.child(id).update(newdataEdit);

                //reload setelah submit data
                window.location.reload();
            });
        });
        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deletePemateri(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        pemateriRef.child(id).remove();
    }
}


// PESERTA SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-peserta").addEventListener("submit", e => {
    var nama_peserta = document.getElementById("nama-peserta").value;
    var noreg_peserta = document.getElementById("noreg-peserta").value;
    e.preventDefault();
    createPeserta(id, nama_peserta, noreg_peserta);
});

function createPeserta(id, nama_peserta, noreg_peserta) {

    //============ Input data ke database ==================//
    addpesertaRef.set({
        id: id,
        nama_peserta: nama_peserta,
        noreg: noreg_peserta
    });

    //reload setelah submit data
    window.location.reload();
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
pesertaRef.on("value", dataBerhasilpeserta, dataGagalpeserta);
//membuat variabel untuk passing data ke table surat
var view_peserta = document.getElementById("table-peserta");

function dataBerhasilpeserta(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_peserta = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_peserta +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().nama_peserta + "</td>" +
            "<td>" + cetak.val().noreg + "</td>" +
            '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-4" onclick="editPeserta(\'' + cetak.val().id + '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deletePeserta(\'' + cetak.val().id + "')\">Hapus</button></td>" +
            "</tr>";
        nomor++;
    });
    //passing data dari variable tabel ke view_surat 
    view_peserta.innerHTML = tabel_peserta;
}
function dataGagalpeserta(err) {
    console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat 
function editPeserta(id) {

    var query = db.ref('piket/peserta/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditPeserta);

    //function untuk passing data ke form edit data surat
    function isieditPeserta(datapeserta) {
        var data = datapeserta.val();
        document.getElementById('nama-peserta-edit').value = data.nama_peserta;
        document.getElementById('noreg-peserta-edit').value = data.noreg;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-peserta-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var nama_edit = document.getElementById('nama-peserta-edit').value;
        var noreg_edit = document.getElementById('noreg-peserta-edit').value;

        //membuat variable yg akan menampung field database dan data yg akan di input ke database
        var newdataEdit = {
            nama_peserta: nama_edit,
            noreg: noreg_edit
        };

        //update data ke database
        pesertaRef.child(id).update(newdataEdit);

        //reload setelah submit data
        window.location.reload();

        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deletePeserta(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        pesertaRef.child(id).remove();
    }
}
