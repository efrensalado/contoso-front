const BASE_URL = "http://localhost:3000/";

if (localStorage.getItem("loginData") == undefined) {
    alert("Inicie sesión");
    window.location.href = "./index.html";
}

$("#form").submit(function (e) {
    e.preventDefault();
    let data = {};
    let idUser = JSON.parse(localStorage.getItem("loginData")).idUser;
    data.first_name = $("#first_name").val();
    data.last_name = $("#last_name").val();
    data.address = $("#address").val();
    data.telephone = $("#telephone").val();
    data.interests = $("#interests").val();
    data.idUser = idUser;

    console.log(data);
    $("#newData").attr('disabled', true);
    $.ajax({
        url: BASE_URL + "data/",
        method: "POST",
        data: data,
        success: function (response) {

            alert("Datos enviados");
            $("#newData").attr('disabled', false);
            $("#first_name").val("");
            $("#last_name").val("");
            $("#address").val("");
            $("#telephone").val("");
            $("#interests").val("");
        }
    });
});

$("#logOut").click(function () {
    localStorage.clear();
    window.location.href = "./index.html";
});