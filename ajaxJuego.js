document.querySelector('#btn-juego').addEventListener('click', function () {
    mostrarOcultar2();
});
function hidden2() {
    document.getElementById("preguntas").style.display = "none";
}
function mostrarOcultar2() {
    var info = document.getElementById("preguntas");
    if (info.style.display == "none") {
        juego();
    } else {
        hidden2();
    }

}
function juego() {
    document.getElementById("preguntas").style.display = "block";

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'etnie.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            var datosJ = datos.results.bindings;
            console.log(datos.results.bindings);
            let resultado = document.querySelector("#ventana");
            resultado.innerHTML +=`<br><h3>Preguntas</h3><hr><h4>Cuál es el grupo étnico con mas población</h4>
            <button class="btn btn-warning" onclick="respuesta()"><h4>White Latin American</h4><button>
            <button class="btn btn-warning" onclick="respuestaI()"><h4>Indigenous peoples in Ecuador</h4></button>`;
            let resultadoP2 = document.querySelector("#ventana2");
            resultadoP2.innerHTML +=`<br><hr><h4>Cuál es la capital de Ecuador?</h4>
            <button class="btn btn-warning" onclick="respuestaI2()"><h4>Madrid</h4><button>
            <button class="btn btn-warning" onclick="respuesta2()"><h4>Quito</h4></button>`;
            

        }
    }
}
function respuesta(){
    let result2 = document.querySelector("#ventana");
    result2.innerHTML = `<div class="ventana" style="width:30%;padding: 33px; min-height: 50px; background: red; position: absolute;left: 20%;margin-top:2%;">
    
    Correcto
    <a href= "javascript:cerrar()"><img src="img/cerrar.png" alt="First slide"></a>
    </div>`;

}
function respuesta2(){
    let result2 = document.querySelector("#ventana2");
    result2.innerHTML = `<div class="ventana" style="width:30%;padding: 33px; min-height: 50px; background: red; position: absolute;left: 20%;margin-top:2%;">
    
    Correcto
    <a href= "javascript:hidden2()"><img src="img/cerrar.png" alt="First slide"></a>
    </div>`;

}
function respuestaI(){
    let result3 = document.querySelector("#ventana");
    result3.innerHTML = `<div style="width:30%;padding: 33px; min-height: 50px; background: red; position: absolute;left: 20%;margin-top:2%;">
    Incorrecto
    <a href= "javascript:cerrar()"><img src="img/cerrar.png" alt="First slide"></a>
    </div>`;

}
function respuestaI2(){
    let result3 = document.querySelector("#ventana2");
    result3.innerHTML = `<div style="width:30%;padding: 33px; min-height: 50px; background: red; position: absolute;left: 20%;margin-top:2%;">
    
    Incorrecto
    <a href= "javascript:hidden2()"><img src="img/cerrar.png" alt="First slide"></a>
    </div>`;

}
function cerrar(){
    document.getElementById("ventana").style.display="none";
}
