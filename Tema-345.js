//----------------- Exercițiul 1 -----------------
// Scrieți o funcție care returnează pătratul unui număr

const findSquare = (num) => {
  console.log(`Pătratul numărului ${num} este:`); 
  return Math.pow(num, 2); 
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(findSquare(6));

// Exemplul 2
console.log(findSquare(0));

// Exemplul 3
console.log(findSquare(-12));


//----------------- Exercițiul 2 -----------------
/* Scrieți o funcție pentru a genera un număr aleatoriu mai 
mare sau egal cu o variabilă start și strict mai mic decât o 
variabilă end . Aceste două variabile sunt capetele intervalului 
pentru numărul general: [start, end). */

const getRandom = (start, end) => {
  if (start >= end) {
    return "Parametrii necorespunzători";
  } else {
  console.log(`Un număr ≥ ${start} și < ${end} este:`);
  return Math.floor(Math.random() * (end - start)) + start; 
  }
};

// Apelare și afișare rezultat funcție
console.log(getRandom(3, 5));


//----------------- Exercițiul 3 -----------------
// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir.

  const letterCount = (string, letter) => {
  const lowerCaseString = string.toLowerCase();
  const lowerCaseLetter = letter.toLowerCase();
  let nrAparitii = 0;

  for (let i = 0; i < lowerCaseString.length; i++)
  if (lowerCaseString[i] === lowerCaseLetter) {
    nrAparitii ++;
  }
  console.log(`Numărul de apariții al literei "${letter}" în șirul "${string}" este:`);
  return nrAparitii;
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(letterCount("Îmi place programarea", "a"));

// Exemplul 2
console.log(letterCount("Vreau să lucrez în IT", "r"));


//----------------- Exercițiul 4 -----------------
// Scrieți o funcție pentru a adăuga numere nelimitate

// Varianta 1
const addNumber = (...numbers) => {
  let suma = 0;

  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  console.log(`Suma numerelor transmise ca argumente, respectiv ${numbers.join(', ')} este:`);
  return suma;
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(addNumber(1, 2, 3));

// Exemplul 2
console.log(addNumber(1, 2, 3, 4, 5));


// Varianta 2
const adaugareNumar = (...numere) => {
  console.log(`Suma numerelor transmise ca argumente, respectiv ${numere.join(', ')} este:`);
  return numere.reduce((suma, nr) => suma + nr, 0);
};

// Apelare și afișare rezultat funcție
// Exemplul 1
console.log(adaugareNumar(1, 2, 3));

// Exemplul 2
console.log(adaugareNumar(1, 2, 3, 4, 5));
