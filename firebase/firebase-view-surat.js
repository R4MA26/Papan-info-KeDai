var db = firebase.database();
//referensi untuk tampilkan data pembelajaran program jika hari = senin
var pematerisuratRef = db.ref("surat");

pematerisuratRef.on("value", dataBerhasilsurat, dataGagalsurat);
//membuat variabel untuk passing data
var view_surat = document.getElementById("viewSurat");

function dataBerhasilsurat(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_surat = "";
    var count = 0;
    data.forEach(function (cetak) { //jika ada data yg harinya == Sabtu
        value_surat +=
            '<div class="alert alert-primary alert-dismissible bg-primary text-white border-0 fade show" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>' +
            '<strong>No. Surat : <div>' + cetak.val().no_surat + '</div>' +
            'Asal Surat : <div>' + cetak.val().asal_surat + '</div>' +
            'Perihal : <div>' + cetak.val().perihal + '</div>' + '</strong>' +
            '</div >';
        count++;
    });
    //passing data dari variable tabel ke view
    view_surat.innerHTML = value_surat;
}

function dataGagalsurat(err) {
    console.log(err);
}
