var db = firebase.database();
//referensi untuk tampilkan data pembelajaran program jika hari = senin
var jadwalmembersihkan = db.ref("membersihkan");

jadwalmembersihkan.on(
  "value",
  dataBerhasiljadwalmembersihkan,
  dataGagaljadwalmembersihkan
);
//membuat variabel untuk passing data
var view_jadwalmembersihkan = document.getElementById("viewJadwalmembersihkan");

function dataBerhasiljadwalmembersihkan(data) {
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
  view_jadwalmembersihkan.innerHTML = value_jadwalpembelajaran;
}

function dataGagaljadwalmembersihkan(err) {
  console.log(err);
}
