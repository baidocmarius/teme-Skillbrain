//----------------- Exercițiul 1 -----------------

let esteDivizibilCuZece = (numar) => {
  if(numar % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

// Exemplu 1:
let rezultatUnu = esteDivizibilCuZece(100);
console.log(rezultatUnu);

// Exemplu 2:
let rezultatDoi = esteDivizibilCuZece(23);
console.log(rezultatDoi);


//----------------- Exercițiul 2 -----------------

let tellFortune = (N, Z, Y, X) => {
  console.log(`Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`);
};

// Exemplu 1:
tellFortune(3, "Emanuel", "Italia", "programator");



//----------------- Exercițiul 3 -----------------

let identificareZiSaptamana = (numarZi) => {
switch(numarZi) {
  case 1:
    return "Luni";
  case 2:
    return "Marți";
  case 3:
    return "Miercuri";
  case 4:
    return "Joi"; 
  case 5:
    return "Vineri";
  case 6:
    return "Sâmbătă";
  case 7:
    return "Duminică";
  default:
    return "Numărul introdus nu corespunde unei zile a săptămânii!"
  }
};

// Exemplu 1:
let numeZiSaptamana = identificareZiSaptamana(1);
console.log(numeZiSaptamana);

// Exemplu 2:
let numeZiSaptamanaa = identificareZiSaptamana(5);
console.log(numeZiSaptamanaa);