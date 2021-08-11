//referensi untuk tampilkan data proker keorganisasian
var inventarisRef = db.ref("inventaris");

/*================Menampilkan data proker keilmuan dari Database=================*/
//menampilkan data  
inventarisRef.on("value", dataBerhasil4, dataGagal);

function dataBerhasil4(data) {

    data.forEach(function (cetak) {
        document.getElementById("viewProyektor").innerHTML =+ cetak.val().proyektor;
        document.getElementById("viewMonitor").innerHTML =+ cetak.val().monitor;
        document.getElementById("viewRouter").innerHTML =+ cetak.val().router;
        document.getElementById("viewLaptop").innerHTML =+ cetak.val().laptop;
        document.getElementById("viewTv").innerHTML =+ cetak.val().tv;
        document.getElementById("viewKompor").innerHTML =+ cetak.val().kompor;
        document.getElementById("viewPalet").innerHTML =+ cetak.val().palet;
        document.getElementById("viewTerminal").innerHTML =+ cetak.val().terminal;
        document.getElementById("viewKarpet").innerHTML =+ cetak.val().karpet;
        document.getElementById("viewCctv").innerHTML =+ cetak.val().cctv;
    });
}

function dataGagal(err) {
    console.log(err);
}
