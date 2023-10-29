




$.get("http://localhost:3000/FacaReserva", function (data, status) {
    $("#news").append(

        "<tr>" +
        "<td> Nome </td>" +
        "<td> Data Entrada </td>" +
        "<td> textArea </td>" +
        "<td> E-mail </td>" +
        "<td> Data Saida </td>" +
        "<td> numero de Adultos </td>" +
        "<td> number Crianças </td>" +
        "</tr> "
    );

    for (var i = 0; i < data.length; i++) {
        $("#news").append(
            "<tr>" +
            "<td>" + data[i].txtNome + "</td>" +
            "<td>" + data[i].data + "</td>" +
            "<td>" + data[i].textAreObs + "</td>" +
            "<td>" + data[i].emailEmail + "</td>" +
            "<td>" + data[i].dateDataSaida + "</td>" +
            "<td>" + data[i].numberAdultos + "</td>" +
            "<td>" + data[i].numberCriancas + "</td>" +
            "</tr>"
        );
    }

});