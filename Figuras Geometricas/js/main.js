var figura = document.getElementById("figura");
/*Circulo*/
function circulo() {
    figura.classList.toggle("circulo");
}
/*Triangulo*/
function triangulo() {
    figura.classList.toggle("triangulo");
}

/*Rectangulo*/
function rectangulo() {
    figura.classList.toggle("rectangulo");
}

/*Rombo*/
function rombo() {
    figura.classList.toggle("rombo");
}

/*Imagen*/
function imagen() {
    figura.classList.toggle("imagen");
}

/*Gif*/
function Gif() {
    figura.classList.toggle("Gif");
}

/*Hoja*/
function hoja() {
    figura.classList.toggle("hoja");
}

/*Pacman*/
function pacman() {
    figura.classList.toggle("pacman");
}

/*Luna*/
function luna() {
    figura.classList.toggle("luna");
}

function huevo() {
    figura.classList.toggle("huevo");

}

/* Trapecio*/


function trapecio() {
    figura.classList.toggle("trapecio");
}

/* Funcion mover izquierda*/
function moveLeft() {
    figura.classList.toggle("moveLeft");

}

/*Funcion mover abajo */
function moveBottom() {
    figura.classList.toggle("moveBottom");
}

/* Funcion mover derecha*/
function moveRight() {
    figura.classList.toggle("moveRight");
}

/*Funcion mover arriba*/
function moveUp() {
    figura.classList.toggle("moveUp");
}

/* funcion panel lateral */
function panelLateral() {
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
}

/* funcion panel superior */
function panelSuperior() {
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle("active");
}

/* funcion imagen de fondo */

function imagenFondo() {
    var body = document.getElementById("body");
    body.classList.toggle("imagenFondo");
}


/* funcion propuesta */
function bandera() {
    figura.classList.toggle("bandera");
}

/* Color principal*/
function colorPrincipal() {
    var section = document.getElementById("color");
    section.classList.toggle("colorPrincipal");
}