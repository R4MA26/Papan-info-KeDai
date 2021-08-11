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
var prokerRef = db.ref("proker/public&relation");

//referensi untuk tambah data 
var addprokerRef = db.ref("proker/public&relation/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-public&relation").addEventListener("submit", e => {
    var fl = document.getElementById("fl-public&relation").value;
    var sc = document.getElementById("sc-public&relation").value;
    e.preventDefault();
    createProker(id, fl, sc);
});

function createProker(id, fl, sc) {

    //============ Input data ke database beserta url image ==================//
    addprokerRef.set({
        id: id,
        follow_up_relation: fl,
        social_media: sc
    });

    //reload setelah submit data
    window.location.reload();
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
prokerRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_proker = document.getElementById("table-public&relation");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_proker = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_proker +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().follow_up_relation + "</td>" +
            "<td>" + cetak.val().social_media + "</td>" +
            '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-2" onclick="editProker(\'' + cetak.val().id + '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteProker(\'' + cetak.val().id + "')\">Hapus</button></td>" +
            "</tr>";
        nomor++;
    });
    //passing data dari variable tabel ke view_surat 
    view_proker.innerHTML = tabel_proker;
}
function dataGagal(err) {
    console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat 
function editProker(id) {

    var query = db.ref('proker/public&relation/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditProker);

    //function untuk passing data ke form edit data surat
    function isieditProker(dataProker) {
        var data = dataProker.val();
        document.getElementById('fl-public&relation-edit').value = data.follow_up_relation;
        document.getElementById('sc-public&relation-edit').value = data.social_media;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-public&relation-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var fl_edit = document.getElementById('fl-public&relation-edit').value;
        var sc_edit = document.getElementById('sc-public&relation-edit').value;

        //membuat variable yg akan menampung field database dan data yg akan di input ke database
        var newdataEdit = {
            follow_up_relation: fl_edit,
            social_media: sc_edit
        };

        //update data ke database
        prokerRef.child(id).update(newdataEdit);

        //reload setelah submit data
        window.location.reload();

        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deleteProker(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        prokerRef.child(id).remove();
    }
}

