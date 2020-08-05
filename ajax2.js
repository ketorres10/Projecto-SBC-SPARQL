

document.querySelector('#btn-informacion').addEventListener('click', function () {
    mostrarOcultar();
});

function hidden(){
    document.getElementById("informacion").style.display = "none";
}
function mostrarOcultar(){
    var info = document.getElementById("informacion");
    if(info.style.display == "none"){
        traerDatos2();
    }else{
        hidden();
    }

}

function traerDatos2() {
    document.getElementById("informacion").style.display = "block";
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'informacion.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let datos2 = JSON.parse(this.responseText);
            let datos3 = JSON.parse(this.responseText);
            let datos4 = JSON.parse(this.responseText);
            console.log(datos.results.bindings);
            let descripcion = document.querySelector("#descripcion");
            let abstract = document.querySelector("#abstract");
            let capital = document.querySelector("#capital");
            let nacionalidad = document.querySelector("#nacionalidad");
            descripcion.innerHTML += `<h3>Población</h3>`;
            capital.innerHTML += `<h3>Capital</h3>`;
            nacionalidad.innerHTML += `<h3>Nacionalidad</h3>`;
            for (let item of datos2.results4.bindings) {

                abstract.innerHTML += `<h2>Descripción</h2>
                        ${item.descripcion.value}`;
            }
            for (let item of datos.results.bindings) {
                descripcion.innerHTML += `
                        ${item.abstract.value}`;
            }
            for (let item3 of datos3.results2.bindings) {
                capital.innerHTML += `
                        ${item3.nombre.value} | <a href="${item3.capital.value}">${item3.capital.value}</a>`;
            }
            for (let item4 of datos4.results3.bindings) {

                nacionalidad.innerHTML += `
                        ${item4.nacionalidad.value}`;

            }
        
        }
        
    }
}
