
var db = firebase.database();
//referensi untuk tampilkan data pembelajaran program jika hari = senin
var pemateriadminRef = db.ref("admin");

    pemateriadminRef.on("value", dataBerhasiladmin, dataGagaladmin);
    //membuat variabel untuk passing data
    var view_admin = document.getElementById("view_admin");

    function dataBerhasiladmin(data) {
        //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
        var value_admin = "";
        var count = 0;
        var active = " active";
        data.forEach(function (cetak) { //jika ada data yg harinya == Sabtu

                if (count == 0) {
                    value_admin +=
                        '<div class="carousel-item' + active + ' ">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_admin + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                } else {
                    value_admin +=
                        '<div class="carousel-item">' +
                        '<img class="card-img-top img-fluid" src=" ' + cetak.val().url + ' " alt="Card image cap"> ' +
                        '<div class="pt-4">' +
                        '<div class="carousel-caption">' +
                        '<div class="text-center">' +
                        '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' + cetak.val().nama_admin + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }

                count++;

        });
        //passing data dari variable tabel ke view
        view_admin.innerHTML = value_admin;
    }

    function dataGagaladmin(err) {
        console.log(err);
    }
