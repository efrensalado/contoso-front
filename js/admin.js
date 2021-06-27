let data = localStorage.getItem("loginData");
if (data == undefined || data == null) {
    window.location.href = "./login.html";
}