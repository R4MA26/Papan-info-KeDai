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
var inventarisRef = db.ref("inventaris");

//referensi untuk tambah data 
var addinventarisRef = db.ref("inventaris/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document.getElementById("form-inventaris").addEventListener("submit", e => {
    var proyektor = document.getElementById("proyektor").value;
    var monitor = document.getElementById("monitor").value;
    var router = document.getElementById("router").value;
    var laptop = document.getElementById("laptop").value;
    var tv = document.getElementById("tv").value;
    var kompor = document.getElementById("kompor").value;
    var palet = document.getElementById("palet").value;
    var terminal = document.getElementById("terminal").value;
    var karpet = document.getElementById("karpet").value;
    var cctv = document.getElementById("cctv").value;
    e.preventDefault();
    createInventaris(id, proyektor, monitor, router, laptop, tv, kompor, palet, terminal, karpet, cctv);
});

function createInventaris(id, proyektor, monitor, router, laptop, tv, kompor, palet, terminal, karpet, cctv) {

    //============ Input data ke database beserta url image ==================//
    addinventarisRef.set({
        id: id,
        proyektor: proyektor,
        monitor: monitor,
        router: router,
        laptop: laptop,
        tv: tv,
        kompor: kompor,
        palet: palet,
        terminal: terminal,
        karpet: karpet,
        cctv: cctv
    });

    //reload setelah submit data
    window.location.reload();
}


// /*================Menampilkan data dari Database=================*/
//menampilkan data  
inventarisRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_proker = document.getElementById("table-inventaris");

function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var tabel_proker = "";
    var nomor = 1;
    data.forEach(function (cetak) {
        tabel_proker +=
            "<tr>" +
            "<td>" + nomor + "</td>" +
            "<td>" + cetak.val().proyektor + "</td>" +
            "<td>" + cetak.val().monitor + "</td>" +
            "<td>" + cetak.val().router + "</td>" +
            "<td>" + cetak.val().laptop + "</td>" +
            "<td>" + cetak.val().tv + "</td>" +
            "<td>" + cetak.val().kompor + "</td>" +
            "<td>" + cetak.val().palet + "</td>" +
            "<td>" + cetak.val().terminal + "</td>" +
            "<td>" + cetak.val().karpet + "</td>" +
            "<td>" + cetak.val().cctv + "</td>" +
            '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-2" onclick="editInventaris(\'' + cetak.val().id + '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteInventaris(\'' + cetak.val().id + "')\">Hapus</button></td>" +
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
function editInventaris(id) {

    var query = db.ref('inventaris/' + id);

    // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
    query.once('value').then(isieditInventaris);

    //function untuk passing data ke form edit data surat
    function isieditInventaris(dataInventaris) {
        var data = dataInventaris.val();
        document.getElementById('proyektor-edit').value = data.proyektor;
        document.getElementById('monitor-edit').value = data.monitor;
        document.getElementById('router-edit').value = data.router;
        document.getElementById('laptop-edit').value = data.laptop;
        document.getElementById('tv-edit').value = data.tv;
        document.getElementById('kompor-edit').value = data.kompor;
        document.getElementById('palet-edit').value = data.palet;
        document.getElementById('terminal-edit').value = data.terminal;
        document.getElementById('karpet-edit').value = data.karpet;
        document.getElementById('cctv-edit').value = data.cctv;
    }

    //listener tombol update pada form edit surat
    document.getElementById("form-inventaris-edit").addEventListener("submit", e => {
        //memasukkan value dari form input ke dalam variable

        var proyektor_edit = document.getElementById('proyektor-edit').value;
        var monitor_edit = document.getElementById('monitor-edit').value;
        var router_edit = document.getElementById('router-edit').value;
        var laptop_edit = document.getElementById('laptop-edit').value;
        var tv_edit = document.getElementById('tv-edit').value;
        var kompor_edit = document.getElementById('kompor-edit').value;
        var palet_edit = document.getElementById('palet-edit').value;
        var terminal_edit = document.getElementById('terminal-edit').value;
        var karpet_edit = document.getElementById('karpet-edit').value;
        var cctv_edit = document.getElementById('cctv-edit').value;

        //membuat variable yg akan menampung field database dan data yg akan di input ke database
        var newdataEdit = {
            id: id,
            proyektor: proyektor_edit,
            monitor: monitor_edit,
            router: router_edit,
            laptop: laptop_edit,
            tv: tv_edit,
            kompor: kompor_edit,
            palet: palet_edit,
            terminal: terminal_edit,
            karpet: karpet_edit,
            cctv: cctv_edit
        };

        //update data ke database
        inventarisRef.child(id).update(newdataEdit);

        //reload setelah submit data
        window.location.reload();

        e.preventDefault();
    });

}


// /*================MENGHAPUS DATA=================*/

function deleteInventaris(id) {
    var cek_hapus = confirm('Apakah anda ingin menghapus data ?');
    if (cek_hapus) {
        inventarisRef.child(id).remove();
    }
}

