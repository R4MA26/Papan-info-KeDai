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
var suratRef = db.ref("surat");

//referensi untuk tambah data 
var addsuratRef = db.ref("surat/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-surat").addEventListener("submit", e => {
    var no_surat = document.getElementById("no_surat").value;
    var asal_surat = document.getElementById("asal_surat").value;
    var perihal = document.getElementById("perihal").value;
    e.preventDefault();
    createsurat(id, no_surat, asal_surat, perihal);
});

function createsurat(id, no_surat, asal_surat, perihal) {

    //============ Input data ke database beserta url image ==================//
    addsuratRef.set({
        id: id,
        no_surat: no_surat,
        asal_surat: asal_surat,
        perihal: perihal
    });

    //reload setelah submit data
    window.location.reload();
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
suratRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_surat = document.getElementById("table-surat");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_surat = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_surat +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().no_surat + "</td>" +
            "<td>" + cetak.val().asal_surat + "</td>" +
            "<td>" + cetak.val().perihal + "</td>" +
            '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-2" onclick="editsurat(\'' + cetak.val().id + '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deletesurat(\'' + cetak.val().id + "')\">Hapus</button></td>" +
            "</tr>";
        nomor++;
    });
    //passing data dari variable tabel ke view_surat 
    view_surat.innerHTML = tabel_surat;
}
function dataGagal(err) {
    console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat 
function editsurat(id) {

    var query = db.ref('surat/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditsurat);

    //function untuk passing data ke form edit data surat
    function isieditsurat(datasurat) {
        var data = datasurat.val();
        document.getElementById('no_surat-edit').value = data.no_surat;
        document.getElementById('asal-edit').value = data.asal_surat;
        document.getElementById('perihal-edit').value = data.perihal;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-surat-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var no_surat_edit = document.getElementById('no_surat-edit').value;
        var asal_edit = document.getElementById('asal-edit').value;
        var perihal_edit = document.getElementById('perihal-edit').value;

        //membuat variable yg akan menampung field database dan data yg akan di input ke database
        var newdataEdit = {
            id: id,
            no_surat: no_surat_edit,
            asal_surat: asal_edit,
            perihal: perihal_edit
        };

        //update data ke database
        suratRef.child(id).update(newdataEdit);

        //reload setelah submit data
        window.location.reload();

        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deletesurat(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        suratRef.child(id).remove();
    }
}

