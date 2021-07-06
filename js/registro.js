$("#registro").submit(function (e) {
    e.preventDefault();
    let data = {};

    data.username = $("#user").val();
    data.password = $("#password").val();

    $.ajax({
        url: BASE_URL + "user/",
        method: "POST",
        data: data,
        success: function (response) {
            alert("Registro de datos completado");
            alert("Datos enviados");
            //$("#user").attr('disabled', false);
            $("#password").val("");
        }
    });
});