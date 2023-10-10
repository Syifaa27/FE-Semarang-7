$(document).ready(function () {
$("#sendMsg").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.post('https://be-semarang-7-production.up.railway.app/message', formData);
});
});