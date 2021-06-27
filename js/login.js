const BASE_URL = "http://localhost:3000/";
$("#loginForm").submit(function (e) {

    e.preventDefault();

    let email = $("#correo").val();
    let password = $("#password").val();

    $("#login").attr('disabled', true);
    $.ajax({
        url: BASE_URL + "users/" + email,
        method: "get",
        dataType: 'text',
        success: function (response) {
            let data = JSON.parse(response);
            //console.log(data.password);
            if (data[0].password == password) {
                localStorage.setItem("loginData", JSON.stringify(data[0]));
                if (data[0].idRole == 1) {
                    window.location.href = "./user.html";
                } else {
                    window.location.href = "./admin.html"
                }
            } else {
                alert("La contraseña es incorrecta");
                $("#login").attr('disabled', false);
            }
        }
    });
});