var db = firebase.database();

//referensi untuk tampilkan data pembelajaran program jika hari = senin
var pemateriprogramRef = db.ref("program/pemateri");
var pematerimulmedRef = db.ref("multimedia/pemateri");
var pematerijaringanRef = db.ref("jaringan/pemateri");
var pematerihardwareRef = db.ref("hardware/pemateri");

//Script mengambil tanggal secara realtime
var myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var date = new Date();
var thisDay = date.getDay(),
  thisDay = myDays[thisDay];
var hariini = thisDay; //mengambil hari secara realtime dan memasukkan ke dalam var hariini

if (hariini == "Rabu") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Program";

  pemateriprogramRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
} else if (hariini == "Senin") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Multimedia";

  pematerimulmedRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
} else if (hariini == "Rabu") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Program";

  pemateriprogramRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary  text-center text-white m-0" style="color: red;">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary  text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
} else if (hariini == "") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Multimedia";

  pematerimulmedRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
} else if (hariini == "Jumat") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Hardware";

  pematerihardwareRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
}

if (hariini == "Selasa") {
  //membuat variabel untuk passing data
  var view_materi_pembelajaran = document.getElementById(
    "view-materi-pembelajaran"
  );
  document.getElementById("view-materi-pembelajaran").innerHTML = "Jaringan";

  pematerijaringanRef.on("value", dataBerhasilpemateri, dataGagalpemateri);
  //membuat variabel untuk passing data
  var view_pemateri = document.getElementById("view_pemateri");

  function dataBerhasilpemateri(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var value_pemateri = "";
    var count = 0;
    var active = " active";
    data.forEach(function (cetak) {
      if (count == 0) {
        value_pemateri +=
          '<div class="carousel-item' +
          active +
          ' ">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      } else {
        value_pemateri +=
          '<div class="carousel-item">' +
          '<img class="card-img-top img-fluid" src=" ' +
          cetak.val().url +
          ' " alt="Card image cap"> ' +
          '<div class="pt-4">' +
          '<div class="carousel-caption">' +
          '<div class="text-center">' +
          '<h6 class="btn btn-sm btn-primary btn-rounded text-center text-white m-0">' +
          cetak.val().nama_pemateri +
          "</h6>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
      }

      count++;
    });
    //passing data dari variable tabel ke view
    view_pemateri.innerHTML = value_pemateri;
  }

  function dataGagalpemateri(err) {
    console.log(err);
  }
}
