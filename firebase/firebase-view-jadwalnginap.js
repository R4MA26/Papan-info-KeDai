var db = firebase.database();
//referensi untuk tampilkan data pembelajaran program jika hari = senin
var jadwalnginapRef = db.ref("jadwalnginap");

jadwalnginapRef.on(
  "value",
  dataBerhasiljadwalnginap,
  dataGagaljadwalnginap
);
//membuat variabel untuk passing data
var view_jadwalnginap = document.getElementById("viewJadwalnginap");

function dataBerhasiljadwalnginap(data) {
  //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
  var value_jadwalpembelajaran = "";
  // var count = 0;
  data.forEach(function (cetak) {
    value_jadwalpembelajaran +=
      "<tr>" +
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
      "</tr>";
    // count++;
  });
  //passing data dari variable tabel ke view
  view_jadwalnginap.innerHTML = value_jadwalpembelajaran;
}

function dataGagaljadwalnginap(err) {
  console.log(err);
}
