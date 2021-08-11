//referensi untuk tampilkan data proker keorganisasian
var prokersasiRef = db.ref("proker/keorganisasian");

//referensi untuk tampilkan data proker public & relation
var prokerprRef = db.ref("proker/public&relation");

//referensi untuk tampilkan data proker tools & properties
var prokertoolsRef = db.ref("proker/tools");

//referensi untuk tampilkan data proker keilmuan
var prokerilmuRef = db.ref("proker/keilmuan");

/*================Menampilkan data proker keorganisasian dari Database=================*/
//menampilkan data  
prokersasiRef.on("value", dataBerhasil, dataGagal);
//membuat variabel untuk passing data
var view_progress_lk = document.getElementById("viewLk");
var view_progress_sk = document.getElementById("viewSk");
var view_progress_pk = document.getElementById("viewPk");


function dataBerhasil(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var progress_lk = "";
    var progress_sk = "";
    var progress_pk = "";

    data.forEach(function (cetak) {
        progress_lk +=
            cetak.val().latihan_kepemimpinan;
        //passing data ke id viewLk2 dengan mengubah atribut style width
        document.getElementById("viewLk2").style.width = cetak.val().latihan_kepemimpinan;

        progress_sk +=
            cetak.val().sosialisasi_konstitusi;
        //passing data ke id viewSk2 dengan mengubah atribut style width
        document.getElementById("viewSk2").style.width = cetak.val().sosialisasi_konstitusi;

        progress_pk +=
            cetak.val().pengkaderan;
        //passing data ke id viewPk2 dengan mengubah atribut style width
        document.getElementById("viewPk2").style.width = cetak.val().pengkaderan;
    });
    //passing data dari variable tabel ke view_progress
    view_progress_lk.innerHTML = progress_lk;
    view_progress_sk.innerHTML = progress_sk;
    view_progress_pk.innerHTML = progress_pk;
}

function dataGagal(err) {
    console.log(err);
}


/*================Menampilkan data proker public & relaion dari Database=================*/
//menampilkan data  
prokerprRef.on("value", dataBerhasil2, dataGagal);
//membuat variabel untuk passing data 
var view_progress_fl = document.getElementById("viewFl");
var view_progress_sm = document.getElementById("viewSm");


function dataBerhasil2(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var progress_fl = "";
    var progress_sm = "";

    data.forEach(function (cetak) {
        progress_fl +=
            cetak.val().follow_up_relation;
        //passing data ke id viewFl2 dengan mengubah atribut style width
        document.getElementById("viewFl2").style.width = cetak.val().follow_up_relation;

        progress_sm +=
            cetak.val().social_media;
        //passing data ke id viewSm2 dengan mengubah atribut style width
        document.getElementById("viewSm2").style.width = cetak.val().social_media;

    });
    //passing data dari variable tabel ke view_progress
    view_progress_fl.innerHTML = progress_fl;
    view_progress_sm.innerHTML = progress_sm;
}

function dataGagal(err) {
    console.log(err);
}


/*================Menampilkan data proker tools & properties dari Database=================*/
//menampilkan data  
prokertoolsRef.on("value", dataBerhasil3, dataGagal);
//membuat variabel untuk passing data 
var view_progress_ppi = document.getElementById("viewPpi");
var view_progress_pid = document.getElementById("viewPid");


function dataBerhasil3(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var progress_ppi = "";
    var progress_pid = "";

    data.forEach(function (cetak) {
        progress_ppi +=
            cetak.val().pengelolaan_inventaris;
        //passing data ke id viewPpi2 dengan mengubah atribut style width
        document.getElementById("viewPpi2").style.width = cetak.val().pengelolaan_inventaris;

        progress_pid +=
            cetak.val().papan_informasi;
        //passing data ke id viewPid2 dengan mengubah atribut style width
        document.getElementById("viewPid2").style.width = cetak.val().papan_informasi;

    });
    //passing data dari variable tabel ke view_progress
    view_progress_ppi.innerHTML = progress_ppi;
    view_progress_pid.innerHTML = progress_pid;
}

function dataGagal(err) {
    console.log(err);
}


/*================Menampilkan data proker keilmuan dari Database=================*/
//menampilkan data  
prokerilmuRef.on("value", dataBerhasil4, dataGagal);
//membuat variabel untuk passing data 
var view_progress_ka = document.getElementById("viewKa");
var view_progress_vps = document.getElementById("viewVps");
var view_progress_adm = document.getElementById("viewAdm");
var view_progress_fc = document.getElementById("viewFc");
var view_progress_frtc = document.getElementById("viewFrtc");
var view_progress_pki = document.getElementById("viewPki");


function dataBerhasil4(data) {
    //membuat variabel kosong sebagai tempat menyimpan hasil loopingan data
    var progress_ka = "";
    var progress_vps = "";
    var progress_adm = "";
    var progress_fc = "";
    var progress_frtc = "";
    var progress_pki = "";

    data.forEach(function (cetak) {
        progress_ka +=
            cetak.val().kedai_app;
        //passing data ke id viewKa2 dengan mengubah atribut style width
        document.getElementById("viewKa2").style.width = cetak.val().kedai_app;

        progress_vps +=
            cetak.val().vps;
        //passing data ke id viewVps2 dengan mengubah atribut style width
        document.getElementById("viewVps2").style.width = cetak.val().vps;

        progress_adm +=
            cetak.val().administrasi;
        //passing data ke id viewAik2 dengan mengubah atribut style width
        document.getElementById("viewAdm2").style.width = cetak.val().administrasi;

        progress_fc +=
            cetak.val().folder_cermat;
        //passing data ke id viewFC2 dengan mengubah atribut style width
        document.getElementById("viewFc2").style.width = cetak.val().folder_cermat;

        progress_frtc +=
            cetak.val().free_repair;
        //passing data ke id viewFrtc2 dengan mengubah atribut style width
        document.getElementById("viewFrtc2").style.width = cetak.val().free_repair;

        progress_pki +=
            cetak.val().pembelajaran_instansi;
        //passing data ke id viewPki2 dengan mengubah atribut style width
        document.getElementById("viewPki2").style.width = cetak.val().pembelajaran_instansi;

    });
    //passing data dari variable tabel ke view_progress
    view_progress_ka.innerHTML = progress_ka;
    view_progress_vps.innerHTML = progress_vps;
    view_progress_adm.innerHTML = progress_adm;
    view_progress_fc.innerHTML = progress_fc;
    view_progress_frtc.innerHTML = progress_frtc;
    view_progress_pki.innerHTML = progress_pki;
}

function dataGagal(err) {
    console.log(err);
}
