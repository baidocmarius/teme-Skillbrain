let butonPlus = document.querySelector(".buton-plus");
let butonMinus = document.querySelector(".buton-minus");
let butonInmultire = document.querySelector(".buton-inmultire");
let butonImpartire = document.querySelector(".buton-impartire");
let butonResetare = document.querySelector(".buton-resetare");
let mesajAlerta = document.querySelector(".alert-message");
let mesajMaximAlerta = document.querySelector(".alert-maxim-message")
let cifraCalculator = document.querySelector(".cifra-calculator");
let x = 0;


let stilizari = () => {
    cifraCalculator.innerText = x;
    if (x <= -10) {
        cifraCalculator.style.color = 'red';
        cifraCalculator.style.fontSize = '48px';
    }
    if (x > -10 && x <= 10) {
        cifraCalculator.style = 'black';
        cifraCalculator.style.fontSize = '60px'
    }
    if (x > 10) {
        cifraCalculator.style.color = 'green';
        cifraCalculator.style.fontSize = '82px';
    }
    if (x <= -20) {
        mesajAlerta.style.display = 'flex';
        butonMinus.disabled = true;
        butonInmultire.disabled = true;
        x = -20;
        cifraCalculator.innerText = x;
    }
    if (x > -20) {
        mesajAlerta.style.display = 'none';
    }
    if (x >= 100) { 
        butonPlus.disabled = true;
        butonInmultire.disabled = true;
        x = 100
        cifraCalculator.innerText = x;
        mesajMaximAlerta.style.display = 'flex'
      }
      if (x < 100) { 
        
        mesajMaximAlerta.style.display = 'none'
      }
   if (x > -20 && x < 100) {
    butonPlus.disabled = false;
    butonMinus.disabled = false;
    butonInmultire.disabled = false;
   }
    

}

let plusUnu = () => {
    x += 1;
    stilizari();

};

let minusUnu = () => {
    if (x > -20) {
        x -= 1;
        stilizari();
    }

};

let inmultire = () => {
    x *= 2;
    stilizari();
};

let impartire = () => {
    x /= 2;
    stilizari();
};

let resetare = () => {
    x = 0;
    cifraCalculator.innerText = "0";
    cifraCalculator.style.removeProperty('color');
    cifraCalculator.style.removeProperty('font-size');
    mesajAlerta.style.display = 'none';
}



butonPlus.addEventListener("click", plusUnu);
butonMinus.addEventListener("click", minusUnu);
butonInmultire.addEventListener("click", inmultire);
butonImpartire.addEventListener("click", impartire);
butonResetare.addEventListener("click", resetare);

