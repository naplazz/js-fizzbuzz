// “Fizz Buzz test: Scrivi un programma che stampi i
// numeri da 1 a 100 ma per i multipli di 3 stampi
// “Fizz” al posto del numero e per i multipli di
//  5 stampi Buzz. Per i numeri che sono sia
//   multipli di 3 che di 5 stampi FizzBuzz.”


// creo la variabile 1
var number = 1;

// condizione 1: se il numero è minore o uguale a 100, incrementa di 1
while (number <= 100) {
// condizione 2: se il resto del numero,
//diviso per 3, è uguale a 0 significa che
//il numero in quesitone è multiplo di 3, quindi stampa "Fizz"
  if (number % 3 === 0 && number % 5 != 0) {
    console.log("Fizz");

// // condizione 3: se il resto del numero,
// diviso per 5, è uguale a 0,
// significa che è multiplo di 5, quindi stampa: "Buzz"
} else if (number % 5 === 0 && number % 3 != 0) {

    console.log("Buzz");
// in tutti gli altri casi, stampa in numero
} else if (number % 5 === 0 && number % 3 === 0) {

  console.log("FizzBuzz")

} else {
    console.log(number);

  }
  number++;
}
