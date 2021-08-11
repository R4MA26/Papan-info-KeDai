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
var prokerRef = db.ref("proker/keorganisasian");

//referensi untuk tambah data 
var addprokerRef = db.ref("proker/keorganisasian/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-keorganisasian").addEventListener("submit", e => {
    var lk = document.getElementById("lk-keorganisasian").value;
    var sk = document.getElementById("sk-keorganisasian").value;
    var pe = document.getElementById("pe-keorganisasian").value;
    e.preventDefault();
    createProker(id, lk, sk, pe);
});

function createProker(id, lk, sk, pe) {

    //============ Input data ke database beserta url image ==================//
    addprokerRef.set({
        id: id,
        latihan_kepemimpinan: lk,
        sosialisasi_konstitusi: sk,
        pengkaderan: pe
    });

    //reload setelah submit data
    window.location.reload();
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
prokerRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_proker = document.getElementById("table-keorganisasian");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_proker = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_proker +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().latihan_kepemimpinan + "</td>" +
            "<td>" + cetak.val().sosialisasi_konstitusi + "</td>" +
            "<td>" + cetak.val().pengkaderan + "</td>" +
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

    var query = db.ref('proker/keorganisasian/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditProker);

    //function untuk passing data ke form edit data surat
    function isieditProker(dataProker) {
        var data = dataProker.val();
        document.getElementById('lk-keorganisasian-edit').value = data.latihan_kepemimpinan;
        document.getElementById('sk-keorganisasian-edit').value = data.sosialisasi_konstitusi;
        document.getElementById('pe-keorganisasian-edit').value = data.pengkaderan;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-keorganisasian-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var lk_edit = document.getElementById('lk-keorganisasian-edit').value;
        var sk_edit = document.getElementById('sk-keorganisasian-edit').value;
        var pe_edit = document.getElementById('pe-keorganisasian-edit').value;

        //membuat variable yg akan menampung field database dan data yg akan di input ke database
        var newdataEdit = {
            latihan_kepemimpinan: lk_edit,
            sosialisasi_konstitusi: sk_edit,
            pengkaderan: pe_edit
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

