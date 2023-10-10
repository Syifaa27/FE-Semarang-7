$(document).ready(function () {
    $("#sendMsg").submit(function (event) {
        event.preventDefault();

        var formData = $(this).serialize();

        $.post(
            "https://be-semarang-7-production.up.railway.app/message",
            formData
        )
            .done(function () {
                alert(
                    "Terima kasih atas pesannya! Pesan Anda telah berhasil dikirim"
                );
                location.reload();
            })
            .fail(function () {
                alert("Maaf, terjadi kesalahan. Silahkan ulangi lagi!");
            });
    });
});
