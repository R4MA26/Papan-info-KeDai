var db = firebase.database();
//referensi untuk tampilkan data pembelajaran program jika hari = senin
var jadwalpembelajaranRef = db.ref("pembelajaran");

jadwalpembelajaranRef.on("value", dataBerhasiljadwalpembelajaran, dataGagaljadwalpembelajaran);
//membuat variabel untuk passing data
var view_jadwalpembelajaran = document.getElementById("viewJadwalPembelajaran");

function dataBerhasiljadwalpembelajaran(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_jadwalpembelajaran = "";
    // var count = 0;
    data.forEach(function (cetak) {
        value_jadwalpembelajaran +=
        "<tr>"+
            "<td>" + cetak.val().senin + "</td>" +
            "<td>" + cetak.val().selasa + "</td>" +
            "<td>" + cetak.val().rabu + "</td>" +
            "<td>" + cetak.val().kamis + "</td>" +
            "<td>" + cetak.val().jumat + "</td>" +
            "<td>" + cetak.val().sabtu + "</td>" +
            "<td>" + cetak.val().minggu + "</td>" +
        "</tr>";
        // count++;
    });
    //passing data dari variable tabel ke view
    view_jadwalpembelajaran.innerHTML = value_jadwalpembelajaran;
}

function dataGagaljadwalpembelajaran(err) {
    console.log(err);
}
