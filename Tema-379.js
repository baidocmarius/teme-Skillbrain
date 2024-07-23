// ------------- Ex 1 --------------
class Masina {
  constructor (marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  get proprietati () {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
};

const main = () => {
  const masinaUnu = new Masina('VOLVO', 'XC-60', 'Negru', '234 000');
  const masinaDoi = new Masina('Mazda', 'CX-5', 'Verde', '111 000');
  const masinaTrei = new Masina('Dacia', 'BIGGSTER', 'Albastru', '20 000');

  console.log("Proprietățile mașinii 1:", masinaUnu.proprietati);
  console.log("Proprietățile mașinii 2:", masinaDoi.proprietati);
  console.log("Proprietățile mașinii 3:", masinaTrei.proprietati);
};

main();


// ------------- Ex 2 -------------
class MasinaDeCurse extends Masina {
  constructor (marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat (pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
     console.log(`Am câștigat locul ${pozitiaInCampionat}`);
    } else {
     console.log(`Nu am câștigat niciun premiu`);
    }
  }
};

const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
m1.participaLaCampionat(-1);

const rezultatCampionat = () => {
  const m2 = new MasinaDeCurse("Lamborghini", "Turbo", "Verde", 300000);
  console.log("Proprietățile mașinii 2:", m2.proprietati);
  m2.participaLaCampionat(2);

  const m3 = new MasinaDeCurse("Ferrari", "Turbo", "Galbena", 500000);
  console.log("Proprietățile mașinii 3:", m3.proprietati);
  m3.participaLaCampionat(0);
};

rezultatCampionat();