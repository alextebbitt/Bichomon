console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let title = document.getElementById("gen-1");
title.innerHTML = "Generasión 1 Pokimon";
 //title.style.backgroundColor = red; 

 // Cambia el color de fondo de la primera generación de Pokimon.
let secondExercise = document.querySelectorAll('.infocard');
 for (let i = 0; i < secondExercise.length; i++) {
    secondExercise[i].style.background = "black";
 }
    // Imprime por consola la URL de la página.
    var currentUrl = window.location.href;
    console.log(currentUrl);

    // Imprime por consola el dominio de la página.

     const domain = document.domain;
     console.log(domain);

     // Imprime todos los nodos de imagen.
const fithExercise = document.querySelectorAll('img')
console.log(fithExercise)


     // Sustituye el atributo "src" de todas las imágenes por este
const sixthExercise = document.querySelectorAll("img")
for (let i = 0; i < sixthExercise.length; i++) {
   sixthExercise[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}

// Premium: Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon 
//voladores itype flying

