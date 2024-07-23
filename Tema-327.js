//----------------- Exercițiul 1 ----------------
// Tipăriți toate numerele pare de la 0 la 10 sau chiar până la 10.000

const numar = prompt("Introduceti o valoare pentru n care să fie cuprinsă între 0 - 10000:");
let n = parseInt(numar);

const afisareNumerePare = (n) => {
  const limitaInferioara = 0;
  const limitaSuperioara = 10000;

  if (isNaN(n) || n < limitaInferioara || n > limitaSuperioara) {
    return `Valoarea introdusă pentru n nu este validă`;
  } else {
    let rezultat = "";

    for (let i = 0; i <= n; i += 2) {
      rezultat += `${i}`; 

      if(i < n - 1) {
        rezultat += `, ` ;
      }
    }
    console.log(`Numerele pare de la 0 la ${n} sunt:`);
    return rezultat;
  }
};

// Apelare și afișare rezultat funcție
//Exemplul 1
console.log(afisareNumerePare(n));


//----------------- Exercițiul 2 -----------------
// Calculați suma numerelor dintr-un șir de numere

const sumaSirDeNumere = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  console.log(`Suma numerelor din array-ul [${array.join(', ')}] este:`);
  return suma;
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(sumaSirDeNumere([1, -5, 20, -34, 16, 29, 36, -4]));

// Exemplul 2
console.log(sumaSirDeNumere([3.45, -2.68, 356, -75.96, 64, 19.28]));


//----------------- Exercițiul 3 -----------------
// Creați o funcție care inversează un șir de numere

const inversareSirDeNumere = (array) => {
  console.log(`Rezultatul inversării array-ului [${array.join(', ')}] este:`);
  const arrayInversat = array.slice().reverse(); 
  return `[${arrayInversat.join(', ')}]`;
};

// Apelare și afișare rezultat funcție 
// Exemplul 1
console.log(inversareSirDeNumere([1, -5, 20, -34, 16, 29, 36, -4]));


//----------------- Exercițiul 4 -----------------
// Returnează numărul de vocale dintr-un șir de caractere (string)

// Varianta 1
const numarDeVocaleString = (string) => {
  const vocale = ["a", "e", "i", "o", "u", "ă", "â", "î"];
  let lowerCaseString = string.toLowerCase();
  let nrVocaleString = 0;

  for (let i = 0; i < vocale.length; i++){
    for (let j = 0; j < lowerCaseString.length; j++) {
     if (lowerCaseString[j] === vocale[i]) {
        nrVocaleString ++;
      }
    }
  }
  console.log(`Numărul de vocale din șirul: "${string}" este:`);
  return nrVocaleString;
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(numarDeVocaleString("string de test"));


// Varianta 2
const numarVocaleString = (string) => {
  const caractere = string.split('');
  const vocale = caractere.filter(char => 'aeiouăâî'.includes(char.toLowerCase())); // utilizarea const nu împiedică modificarea conținutului array-ului, ci doar reatribuirea variabilei.

  console.log(`Numărul de vocale din șirul: "${string}" este:`);
  return vocale.length;
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(numarVocaleString("string de test"));