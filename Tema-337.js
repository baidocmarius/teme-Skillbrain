//----------------- Exercițiul 1 -----------------
// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

const reteta = (string, number, array) => {
  const descriereReteta = {
    titlu: string,
    portii: number,
    ingrediente: function () {
      console.log("Ingrediente:");
      for (let i = 0; i < array.length; i++) {
        console.log(`- ${array[i]}`);
      }
    }
  };
  return descriereReteta;
};

const retetaUnu = reteta("Pizza", 3, ["șuncă", "caș", "ketchup"]);

console.log(`Titlu rețetă: ${retetaUnu.titlu}`);
console.log(`Porții: ${retetaUnu.portii}`);
retetaUnu.ingrediente();


//----------------- Exercițiul 2 -----------------
// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

const returneazaObiectNou = (obiect, ...proprietati) => {
  const copieObiect = {...obiect};
  for (let i = 0; i < proprietati.length; i++) {
    delete copieObiect[proprietati[i]];
  }
  console.log(`Obiectul nou fără proprietatea ${proprietati} este:`);
  return copieObiect;
};

console.log(returneazaObiectNou({a: 1, b: 2}, "b"));


//----------------- Exercițiul 3 -----------------
/* Creați un șir de obiecte în care fiecare obiect descrie o carte și are proprietăți 
precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și 
esteCitită (un boolean care indică dacă ați citit-o). */

const afisareInfoCarti = (listaCarti) => {
for (let i = 0; i < listaCarti.length; i++) {
  console.log(`"${listaCarti[i].titlu} de ${listaCarti[i].autor}"`);
  if (listaCarti[i].esteCitita === true) {
    console.log(`"Ai citit deja "${listaCarti[i].titlu}" de ${listaCarti[i].autor}"`);
  } else {
    console.log(`"Trebuie să citești "${listaCarti[i].titlu}" de ${listaCarti[i].autor}"`);
  }
}
};

const listaCartiUnu = [{ titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }];

afisareInfoCarti(listaCartiUnu);