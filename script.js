
var arrayBombe = [1,2,5,10,40,15]; // numeri random da generare

console.log(arrayBombe);

var maxTentativi = 5;

var punti = 0;

//Uso un ciclo while in modo che possa interrompersi in un momento qualunque e non un numero di volte stabilito

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

// ***********************************************************************************************************************************************
