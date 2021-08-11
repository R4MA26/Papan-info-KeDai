var db = firebase.database();

//referensi untuk tampilkan data pembelajaran program jika hari = senin
var pemateringinapRef = db.ref("nginap/pemateri");

//Script mengambil tanggal secara realtime
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var date = new Date();
var thisDay = date.getDay(),
    thisDay = myDays[thisDay];
var hariini = thisDay; //mengambil hari secara realtime dan memasukkan ke dalam var hariini



if (hariini == "Selasa") {

    pemateringinapRef.on("value", dataBerhasilnginap, dataGagalnginap);
    //membuat variabel untuk passing data
    var view_nginap = document.getElementById("view_nginap");

    function dataBerhasilnginap(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_nginap = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Selasa") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_nginap +=
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
                    value_nginap +=
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

            }else{
                console.log("Tidak ada data")
            }
            
        });
        //passing data dari variable tabel ke view
        view_nginap.innerHTML = value_nginap;
    }

    function dataGagalnginap(err) {
        console.log(err);
    }

} 
    
else if (hariini == "Rabu") {

    pemateringinapRef.on("value", dataBerhasilnginap, dataGagalnginap);
    //membuat variabel untuk passing data
    var view_nginap = document.getElementById("view_nginap");

    function dataBerhasilnginap(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_nginap = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Rabu") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_nginap +=
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
                    value_nginap +=
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
        view_nginap.innerHTML = value_nginap;
    }

    function dataGagalnginap(err) {
        console.log(err);
    }

} 

else if (hariini == "Kamis") {

    pemateringinapRef.on("value", dataBerhasilnginap, dataGagalnginap);
    //membuat variabel untuk passing data
    var view_nginap = document.getElementById("view_nginap");

    function dataBerhasilnginap(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_nginap = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Kamis") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_nginap +=
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
                    value_nginap +=
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
        view_nginap.innerHTML = value_nginap;
    }

    function dataGagalnginap(err) {
        console.log(err);
    }

} 

else if (hariini == "Sabtu") {

    pemateringinapRef.on("value", dataBerhasilnginap, dataGagalnginap);
    //membuat variabel untuk passing data
    var view_nginap = document.getElementById("view_nginap");

    function dataBerhasilnginap(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_nginap = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) {

            if (cetak.val().hari == "Sabtu") { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_nginap +=
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
                    value_nginap +=
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
        view_nginap.innerHTML = value_nginap;
    }

    function dataGagalnginap(err) {
        console.log(err);
    }

}