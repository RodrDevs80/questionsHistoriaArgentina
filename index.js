const btnJugar = document.getElementById('btn-jugar');
const opciones = document.getElementById('opciones');
const main = document.querySelector('.conteiner-preguntas');
const btnBanner = document.getElementById('btn-banner');
const numerosGenerados = [];
let aleatorio;
let totalDePreguntas = 0;
let respuestasCorrectas = 0;
let resp;

const generarPreguntaAleatoria = () => {
    do {
        aleatorio = (Math.random() * preguntasHistoriaArgentina.length).toFixed();
        numerosGenerados.push(aleatorio);
    } while (!numerosGenerados.includes(aleatorio));
    console.log(numerosGenerados);
    return preguntasHistoriaArgentina[aleatorio];
}
const juegoTerminado = (respuestasCorrectas) => {
    const div = document.createElement('div');
    div.classList.add('banner');
    div.innerHTML = `
    <div class="banner-content">
      <h1>EL JUEGO TERMINO!</h1>
      <p>De 15 preguntas acertaste: ${respuestasCorrectas}</p>
      <a href="./index.html" class="banner-button" id="btn-banner">Salir</a>
    </div>
   `
    //document.body.children[1].appendChild(div);
    document.body.appendChild(div);
}

const cargarPreguntaRespuestas = (preguntaAleatoria) => {
    const p = document.querySelector('#p');
    const opcion1 = document.querySelector('.resp-1');
    const opcion2 = document.querySelector('.resp-2');
    const opcion3 = document.querySelector('.resp-3');
    const opcion4 = document.querySelector('.resp-4');

    p.innerText = preguntaAleatoria.pregunta;
    opcion1.innerText = preguntaAleatoria.opciones[0];
    opcion2.innerText = preguntaAleatoria.opciones[1];
    opcion3.innerText = preguntaAleatoria.opciones[2];
    opcion4.innerText = preguntaAleatoria.opciones[3];
}

let interrogante = generarPreguntaAleatoria();
cargarPreguntaRespuestas((interrogante));



opciones.addEventListener('click', (e) => {
    totalDePreguntas++;
    if (e.target.attributes[1].value == interrogante.respuestaCorrecta) {
        respuestasCorrectas++;
        Swal.fire({
            icon: "success",
            title: "CORRECTO!",
            text: "Muy bien sigue asi!",
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tu respuesta no es correcta!",
            footer: '<a href="https://es.wikipedia.org/wiki/Historia_de_la_Argentina" target="_blank" >Para mas información haz click aquí!</a>'
        });

    }
    if (totalDePreguntas == 15) {
        juegoTerminado(respuestasCorrectas);
        console.log(numerosGenerados);
    }

    interrogante = generarPreguntaAleatoria();
    cargarPreguntaRespuestas((interrogante));

})

if (btnBanner) {
    btnBanner.addEventListener('click', (e) => {
        document.body.children[1].remove(div);
    })
}