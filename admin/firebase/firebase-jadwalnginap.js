// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBozP-nzVAwq3UNF4yu0AM2V1T9pweXNPo",
  authDomain: "fir-papaninformasi.firebaseapp.com",
  projectId: "fir-papaninformasi",
  storageBucket: "fir-papaninformasi.appspot.com",
  messagingSenderId: "920683588565",
  appId: "1:920683588565:web:0d12936bf5cb11f0c56b5c",
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
var jadwalRef = db.ref("jadwalnginap");

//referensi untuk tambah data
var addjadwalRef = db.ref("jadwalnginap/" + id);

// PEMATERI SECTION
/*================Mengambil data dari form=================*/
document
  .getElementById("form-jadwalnginap")
  .addEventListener("submit", (e) => {
    var senin = document.getElementById("senin-jadwal").value;
    var selasa = document.getElementById("selasa-jadwal").value;
    var rabu = document.getElementById("rabu-jadwal").value;
    var kamis = document.getElementById("kamis-jadwal").value;
    var jumat = document.getElementById("jumat-jadwal").value;
    var sabtu = document.getElementById("sabtu-jadwal").value;
    var minggu = document.getElementById("minggu-jadwal").value;
    e.preventDefault();
    createJadwalPembelajaran(
      id,
      senin,
      selasa,
      rabu,
      kamis,
      jumat,
      sabtu,
      minggu
    );
  });

function createJadwalPembelajaran(
  id,
  senin,
  selasa,
  rabu,
  kamis,
  jumat,
  sabtu,
  minggu
) {
  //============ Input data ke database beserta url image ==================//
  addjadwalRef.set({
    id: id,
    senin: senin,
    selasa: selasa,
    rabu: rabu,
    kamis: kamis,
    jumat: jumat,
    sabtu: sabtu,
    minggu: minggu,
  });

  //reload setelah submit data
  window.location.reload();
}

// /*================Menampilkan data dari Database=================*/
//menampilkan data
jadwalRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data ke table surat
var view_jadwalpembelajaran = document.getElementById(
  "table-jadwalnginap"
);

function dataBerhasil(data) {
  //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
  var tabel_jadwalpembelajaran = "";
  var nomor = 1;
  data.forEach(function (cetak) {
    tabel_jadwalpembelajaran +=
      "<tr>" +
      "<td>" +
      nomor +
      "</td>" +
      "<td>" +
      cetak.val().senin +
      "</td>" +
      "<td>" +
      cetak.val().selasa +
      "</td>" +
      "<td>" +
      cetak.val().rabu +
      "</td>" +
      "<td>" +
      cetak.val().kamis +
      "</td>" +
      "<td>" +
      cetak.val().jumat +
      "</td>" +
      "<td>" +
      cetak.val().sabtu +
      "</td>" +
      "<td>" +
      cetak.val().minggu +
      "</td>" +
      '<td><button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bs-example-modal-lg-2" onclick="editJadwalPembelajaran(\'' +
      cetak.val().id +
      '\')">Edit</button> <button class="btn btn-sm btn-danger" onclick="deleteJadwalPembelajaran(\'' +
      cetak.val().id +
      "')\">Hapus</button></td>" +
      "</tr>";
    nomor++;
  });
  //passing data dari variable tabel ke view_surat
  view_jadwalpembelajaran.innerHTML = tabel_jadwalpembelajaran;
}
function dataGagal(err) {
  console.log(err);
}

// /*================ MENGEDIT DATA =================*/
//menangkap parameter id yang dikirim ketika menekan tombol action edit
//edit data surat
function editJadwalPembelajaran(id) {
  var query = db.ref("jadwalnginap/" + id);

  // suatu perintah untuk mengambil data spesifik dari database berdasarkan id
  query.once("value").then(isieditPembelajaran);

  //function untuk passing data ke form edit data surat
  function isieditPembelajaran(datapembelajaran) {
    var data = datapembelajaran.val();
    document.getElementById("senin-jadwal-edit").value = data.senin;
    document.getElementById("selasa-jadwal-edit").value = data.selasa;
    document.getElementById("rabu-jadwal-edit").value = data.rabu;
    document.getElementById("kamis-jadwal-edit").value = data.kamis;
    document.getElementById("jumat-jadwal-edit").value = data.jumat;
    document.getElementById("sabtu-jadwal-edit").value = data.sabtu;
    document.getElementById("minggu-jadwal-edit").value = data.minggu;
  }

  //listener tombol update pada form edit surat
  document
    .getElementById("form-jadwalnginap-edit")
    .addEventListener("submit", (e) => {
      //memasukkan value dari form input ke dalam variable

      var senin_edit = document.getElementById("senin-jadwal-edit").value;
      var selasa_edit = document.getElementById("selasa-jadwal-edit").value;
      var rabu_edit = document.getElementById("rabu-jadwal-edit").value;
      var kamis_edit = document.getElementById("kamis-jadwal-edit").value;
      var jumat_edit = document.getElementById("jumat-jadwal-edit").value;
      var sabtu_edit = document.getElementById("sabtu-jadwal-edit").value;
      var minggu_edit = document.getElementById("minggu-jadwal-edit").value;

      //membuat variable yg akan menampung field database dan data yg akan di input ke database
      var newdataEdit = {
        senin: senin_edit,
        selasa: selasa_edit,
        rabu: rabu_edit,
        kamis: kamis_edit,
        jumat: jumat_edit,
        sabtu: sabtu_edit,
        minggu: minggu_edit,
      };

      //update data ke database
      jadwalRef.child(id).update(newdataEdit);

      //reload setelah submit data
      window.location.reload();

      e.preventDefault();
    });
}

// /*================MENGHAPUS DATA=================*/

function deleteJadwalPembelajaran(id) {
  var cek_hapus = confirm("Apakah anda ingin menghapus data ?");
  if (cek_hapus) {
    jadwalRef.child(id).remove();
  }
}
