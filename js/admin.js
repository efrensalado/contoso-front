let data = localStorage.getItem("loginData");
const BASE_URL = "http://localhost:3000/";
if (data == undefined || data == null) {
    window.location.href = "./login.html";
}

$.ajax({
    url: BASE_URL + 'data',
    method: "get",
    dataType: 'text',
    success: function (response) {
        let data = JSON.parse(response)['data'];
        fillTable(data);
    }
});

function fillTable(data) {
    let lon = data.length;
    let bodyTable = $("#bodyt");

    if (lon == 0) {
        bodyTable.append('<tr>No hay datos por mostrar</tr>');
    } else {

    }
    for (let i = 0; i < lon; i++) {
        let dataToAppend = '<tr><td>' + data[i].first_name + '</td><td>' + data[i].last_name + '</td><td>' + data[i].address + '</td><td>' + data[i].telephone + '</td><td>' + data[i].interests + '</td><td><button class="btn btn-info" onclick="showModal(' + data[i].idData + ')">Mostrar</button></td></tr>';
        bodyTable.append(dataToAppend);
    }
}

function showModal(id) {
    $.ajax({
        url: BASE_URL + 'data/' + id,
        method: 'GET',
        dataType: 'text',
        success: function (response) {
            //console.log(response);
            let data = JSON.parse(response)[0];
            console.log(data);
            $("#dataMod").modal('show');

            $("#name").val(data.first_name + " " + data.last_name);
            $("#address").val(data.address);
            $("#tel").val(data.telephone);
            $("#interests").val(data.interests);
            $("#reg").val(data.idUser);
        }
    });
}

$("#pdf").click(function () {
    let doc = new jsPDF();
    let elementHTML = $('#dataMod').html();
    let specialElementHandlers = {
        '#elementH': function (element, renderer) {
            return true;
        }
    };
    doc.addHTML($('#target').html(), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});


$("#logOut").click(function () {
    localStorage.clear();
    window.location.href = "./index.html";
});