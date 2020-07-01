
var arrayBombe = []; // numeri random da generare

var maxBombe = 16;

while (arrayBombe.length < maxBombe) {
  console.log(arrayBombe.length);
  var bomba = getRandom(1, 100);
  if(inArray(arrayBombe, bomba) != true) {
    arrayBombe.push(bomba);
  }
}

var punti = 0;

//Uso un ciclo while in modo che possa interrompersi in un momento qualunque e non un numero di volte stabilito

var maxTentativi = 5;

var i = 0;


// L'utente inserisce dei numeri fino al max consentito o fino a quando non inserisce una mina.

var trovato = false;
while (i < maxTentativi) {
  var numero = parseInt(prompt("Inserisci un numero"));

  if (inArray(arrayBombe, numero)) {
    trovato = true;
    console.log("Hai perso!!");
  } else {
    punti++;
  }

  i++;
}

console.log(punti);

function inArray(array, elemento) {
  var i = 0; // ricorda che non ha nulla a che vedere con la var scritta sopra.
  var trovato = false;

  // questo ciclo si deve interromere se raggiungo lunghezza array o se trovo la corrispondenza

  while (i < array.length && trovato == false) {
    console.log(i);
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// ***********************************************************************************************************************************************
