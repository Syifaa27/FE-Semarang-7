$(document).ready(function () {
$("#sendMsg").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.post('https://backend-indonary-production.up.railway.app/message', formData);
});
});