function tampilkan_semua_menu() {

    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        // loopig
        $.each(menu, function (i, data) {
            $('#daftar_menu').append(` <div class="col-md-3"><div class="card mb-3"><img src="img/menu/` + data.gambar + `" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">` + data.nama + `</h5><p class="card-text">` + data.deskripsi + `</p><h5 class="card-title">` + data.harga + `</h5><a href="#" class="btn btn-outline-info">Pesan Sekarang</a></div></div></div>`);
        });
    });
}

tampilkan_semua_menu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h4').html(kategori);

    if (kategori == 'All Menu') {
        tampilkan_semua_menu();
        return;
    }

    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += `<div class="col-md-3"><div class="card mb-3"><img src="img/menu/` + data.gambar + `" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">` + data.nama + `</h5><p class="card-text">` + data.deskripsi + `</p><h5 class="card-title">` + data.harga + `</h5><a href="#" class="btn btn-outline-info">Pesan Sekarang</a></div></div></div>`;
            }
        });

        $('#daftar_menu').html(content)
    });
});