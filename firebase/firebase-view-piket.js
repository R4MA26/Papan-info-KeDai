var db = firebase.database();

//referensi untuk tampilkan data pembelajaran program jika hari = senin
var pemateripiketRef = db.ref("piket/pemateri");

//Script mengambil tanggal secara realtime
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var date = new Date();
var thisDay = date.getDay(),
    thisDay = myDays[thisDay];
var hariini = thisDay; //mengambil hari secara realtime dan memasukkan ke dalam var hariini



if (hariini == "Jumat") {

    pemateripiketRef.on("value", dataBerhasilpiket, dataGagalpiket);
    //membuat variabel untuk passing data
    var view_piket = document.getElementById("view_piket");

    function dataBerhasilpiket(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_piket = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Jumat") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_piket +=
                        '<div class="carousel-item' + active + ' ">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                } else {
                    value_piket +=
                        '<div class="carousel-item">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }

                count++;

            } else {
                console.log("Tidak ada data")
            }

        });
        //passing data dari variable tabel ke view
        view_piket.innerHTML = value_piket;
    }

    function dataGagalpiket(err) {
        console.log(err);
    }

}

else if (hariini == "Rabu") {

    pemateripiketRef.on("value", dataBerhasilpiket, dataGagalpiket);
    //membuat variabel untuk passing data
    var view_piket = document.getElementById("view_piket");

    function dataBerhasilpiket(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_piket = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Rabu") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_piket +=
                        '<div class="carousel-item' + active + ' ">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                } else {
                    value_piket +=
                        '<div class="carousel-item">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }

                count++;

            } else {
                console.log("Tidak ada data")
            }

        });
        //passing data dari variable tabel ke view
        view_piket.innerHTML = value_piket;
    }

    function dataGagalpiket(err) {
        console.log(err);
    }

}

else if (hariini == "Selasa") {

    pemateripiketRef.on("value", dataBerhasilpiket, dataGagalpiket);
    //membuat variabel untuk passing data
    var view_piket = document.getElementById("view_piket");

    function dataBerhasilpiket(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_piket = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Selasa") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_piket +=
                        '<div class="carousel-item' + active + ' ">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                } else {
                    value_piket +=
                        '<div class="carousel-item">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }

                count++;

            } else {
                console.log("Tidak ada data")
            }

        });
        //passing data dari variable tabel ke view
        view_piket.innerHTML = value_piket;
    }

    function dataGagalpiket(err) {
        console.log(err);
    }

}

else if (hariini == "Senin") {

    pemateripiketRef.on("value", dataBerhasilpiket, dataGagalpiket);
    //membuat variabel untuk passing data
    var view_piket = document.getElementById("view_piket");

    function dataBerhasilpiket(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_piket = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Senin") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_piket +=
                        '<div class="carousel-item' + active + ' ">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                } else {
                    value_piket +=
                        '<div class="carousel-item">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_pemateri + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }

                count++;

            } else {
                console.log("Tidak ada data")
            }

        });
        //passing data dari variable tabel ke view
        view_piket.innerHTML = value_piket;
    }

    function dataGagalpiket(err) {
        console.log(err);
    }

}