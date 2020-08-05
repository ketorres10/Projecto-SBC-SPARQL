document.querySelector('#btn-consulta').addEventListener('click', function () {
    mostrarO();
});

function hide() {
    document.getElementById("section").style.display = "none";
}
function mostrarO() {
    var info = document.getElementById("section");
    if (info.style.display == "none") {
        traerDatos();
    } else {
        hide();
    }

}

function traerDatos() {
    document.getElementById("section").style.display = "block";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'etnie.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            var datosJ = datos.results.bindings;
            console.log(datos.results.bindings);
            let resultado = document.querySelector("#resultado");
            let resultado2 = document.querySelector("#resultadop");
            let descripcion = document.querySelector("#descripcion");
            //<p><strong>Tripleta:  ?grupoEtnico rdfs:label ?nombre .</strong></p>
            resultado.innerHTML = `<br><thead class="thead-dark"><th>Imagen</th><th>Nombre Grupo étnico</th><th>Link</th><th></th></thead>`;

            // resultado.innerHTML = `<thead class="thead-dark"><th>Nombre Grupo étnico</th><th>Link</th></thead>`;
            for (let item of datos.results.bindings) {

                resultado.innerHTML += `
                        <tr>
                        <td><img src="${item.imagen.value}" style="width:100px; height:"100px""></td>
                        <td>${item.nombre.value}</td>
                        <td><a href="${item.grupoEtnico.value}">${item.grupoEtnico.value}</a></td>
                        <td><button class="btn btn-warning" onclick="addRowHandlers()">Ver más</button></a></td>
                        </tr>`;

            }

        }
        /*
        resultado2.innerHTML = '<br><thead class="thead-dark"><p class="thead-light"><strong>Tripleta:  ?grupoEtnico foaf:name ?nombre2 . </strong></p><th>Nombre Grupo étnico</th><th>Link</th></thead>';
        for (let item2 of datos.results.bindings) {

            resultado2.innerHTML += `
                    <tr>
                    <td>${item2.nombre2.value}</td>
                    <td><a href="${item2.grupoEtnico.value}">${item2.grupoEtnico.value}</a></td>
                    </tr>`;

        }
        */
    }
}
function addRowHandlers() {

    var table = document.getElementById("resultado");
    var rows = table.getElementsByTagName("tr");
    let resultadop = document.querySelector("#resultadop");

    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function (row) {
            return function () {
                var cell3 = row.getElementsByTagName("td")[2];
                var cell = row.getElementsByTagName("td")[1];
                var cell2 = row.getElementsByTagName("td")[0];
                var id = cell.innerHTML;
                var imagen = cell2.innerHTML;
                var link = cell3.innerHTML;
                cell3.innerHTML += `<div class="card" style="text-align:center;">
              <div class="card-body"><br>${imagen}<br>${id}<br>${link}</div></div>`;
                var lol = id;
                //alert("id:" + id);
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }
}

/*
function addRowHandlers() {

    var table = document.getElementById("resultado");
    var rows = table.getElementsByTagName("tr");
    let resultadop = document.querySelector("#resultadop");

    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {

          var cell = row.getElementsByTagName("td")[1];
          var id = cell.innerHTML;

          var lol = id;
          alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }
*/
