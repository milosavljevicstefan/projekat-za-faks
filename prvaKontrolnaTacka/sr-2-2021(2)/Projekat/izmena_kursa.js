const form = document.getElementById("forma");
const nazivkursa = document.getElementById("nazivkursa");
const sertifikacija = document.getElementById("sertifikacija");
const brojkorisnika = document.getElementById("brojkorisnika");
const cena = document.getElementById("cena");
const jezik = document.getElementById("jezik");
const autor = document.getElementById("autor");
const kategorija = document.getElementById("kategorija");
const prosecnaocena = document.getElementById("prosecnaocena");
const brojoblasti = document.getElementById("brojoblasti");
const id = document.getElementById("id");
const korisnickoime = document.getElementById('korisnickoime');
const lozinka = document.getElementById('lozinka');
const potvrdalozinke = document.getElementById('potvrdalozinke');
const mejl = document.getElementById('mejl');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const datumrodjenja = document.getElementById('datumrodjenja');
const broj = document.getElementById('broj');
form.addEventListener('submit',e=> {
    e.preventDefault();

    validateInputs();
});

formaregistracija.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element,message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');
}
const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isAutorValid = autor => {
const re = /[A-Z]+[a-z]+\s[A-Z]+[a-z]+$/
return re.test(autor)
}

const isMejlValid = mejl => {
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
return re.test(mejl)
}

const isMobileValid = broj => {
const re = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}$/
return re.test(broj);
}


const isPassValid = lozinka => {
const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
return re.test(lozinka)
}

const isUsernameValid = korisnickoime => {
const re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
return re.test(korisnickoime)
}


const isNameValid = nazivkursa => {
const re = /[A-Z][a-zA-Z]+$/
return re.test(nazivkursa);
}

const isSertifikacijaValid = sertifikat => {
    const re = /Da|Ne/
    return re.test(sertifikat)
}

const validateInputs = () => {
    const nazivkursaVrednost = nazivkursa.value.trim();
    const sertifikacijaVrednost = sertifikacija.value.trim();
    const brojkorisnikaVrednost = brojkorisnika.value.trim();
    const cenaVrednost = cena.value.trim();
    const jezikVrednost = jezik.value.trim();
    const autorVrednost = autor.value.trim();
    const kategorijaVrednost = kategorija.value.trim();
    const prosecnaocenaVrednost = prosecnaocena.value.trim();
    const brojoblastiVrednost = brojoblasti.value.trim();
    const idVrednost = id.value.trim();
    const korisnickoimeVrednost = korisnickoime.value.trim();
    const lozinkaVrednost = lozinka.value.trim();
    const potvrdalozinkeVrednost = potvrdalozinke.value.trim();
    const mejlVrednost = mejl.value.trim();
    const imeVrednost = ime.value.trim();
    const prezimeVrednost = prezime.value.trim();
    const datumrodjenjaVrednost = datumrodjenja.value.trim();
    const brojVrednost = broj.value.trim();

    if (nazivkursaVrednost === '') {
        setError(nazivkursa,"Obavezno polje!");
    } else if (!isNameValid(nazivkursaVrednost)) {
        setError(nazivkursa,'Naziv sadrzi samo slova!');
    } else {
    setSucess(nazivkursa);
    }

    
    if (sertifikacijaVrednost === '') {
        setError(sertifikacija, "Obavezno polje!");
    } else if (!isSertifikacijaValid(sertifikacijaVrednost)) {
        setError(sertifikacija,'Sertifikacija polje moze biti Da ili Ne!');
    } else {
    setSucess(sertifikacija);
    }

        
    if (brojkorisnikaVrednost === '') {
        setError(brojkorisnika, "Obavezno polje!");
    } else if (isNaN(brojkorisnikaVrednost) || brojkorisnikaVrednost < 1 ) {
        setError(brojkorisnika,'Broj korisnika mora biti pozitivan broj!');
    } else {
    setSucess(brojkorisnika);
    }
    
    
     if (cenaVrednost === '') {
        setError(cena,"Obavezno polje!");
    } else if (isNaN(cenaVrednost) || cenaVrednost < 1 ) {
        setError(cena,'Cena je pozitivan broj!');
    } else {
    setSucess(cena);
    }

    if (jezikVrednost === '') {
        setError(jezik,"Obavezno polje!");
    } else if (!isNameValid(jezikVrednost)) {
        setError(jezik,'Naziv sadrzi samo slova!');
    } else {
    setSucess(jezik);
    }

     if (autorVrednost === '') {
        setError(autor,"Obavezno polje!");
    } else if (!isAutorValid(autorVrednost)) {
        setError(autor,'Sadrzi ime i prezime!');
    } else {
    setSucess(autor);
    }

     if (kategorijaVrednost === '') {
        setError(kategorija,"Obavezno polje!");
    } else if (!isNameValid(kategorijaVrednost)) {
        setError(kategorija,'Nije validna kategorija!');
    } else {
    setSucess(kategorija);
    }

 if (prosecnaocenaVrednost === '') {
        setError(prosecnaocena,"Obavezno polje!");
    } else if (isNaN(prosecnaocenaVrednost) || !(prosecnaocenaVrednost >= 1 && prosecnaocenaVrednost <= 5 )) {
        setError(prosecnaocena,'Ocena mora biti od 1 do 5!');
    } else {
    setSucess(prosecnaocena);
    }

     if (brojoblastiVrednost === '') {
        setError(brojoblasti,"Obavezno polje!");
    } else if (isNaN(brojoblastiVrednost) || brojoblastiVrednost < 1 ) {
        setError(brojoblasti,'Vrednost broja oblasti je pozitivan broj!');
    } else {
    setSucess(brojoblasti);
    }

    if (idVrednost === '') {
        setError(id,'Id je obavezan!');
    } else if (idVrednost.length < 11) {
        setError(id,'Id mora imati 11 znakova')
    } else {
        setSucess(id);
        }


        //POPUP FORMA 
    if (korisnickoimeVrednost === '') {
        setError(korisnickoime,'Obavezno polje');
    } else if (!isUsernameValid(korisnickoimeVrednost)) {
        setError(korisnickoime,"Korisnicko ime ne sme sadrzati _ ili .,vec samo slova i brojeve,mora biti dugacko od 8 do 20 karaktera");
    } else {
        setSucess(korisnickoime);
    }
    if (lozinkaVrednost === '') {
        setError(lozinka,'Obavezno polje!');
    } else if (!isPassValid(lozinkaVrednost)) {
        setError(lozinka,'Ovo ne moze biti lozinka,minimun 8 karaktera,barem 1 slovo i jedan broj!');
    } else  {
        setSucess(lozinka)
    }
    
  if (potvrdalozinke === '') {
      setError(potvrdalozinke,'Molim vas potvrdite lozinku!') 
 } else if (lozinkaVrednost !== potvrdalozinkeVrednost) {
     setError(potvrdalozinke,"Ne podudaraju se");

  } else {
      setSucess(potvrdalozinke)
      }

     if (mejlVrednost === '') {
        setError(mejl,'Polje je obavezno!');
 } else if (!isMejlValid(mejlVrednost)) {
     setError(mejl,"Nije validan mejl!");
 } else {
     setSucess(mejl);
 }

  if (imeVrednost === '') {
        setError(ime,'Ime je obavezno!');
    } else if (!isNameValid(imeVrednost)) {
        setError(ime,"Ime sadrzi samo slova!");
    } else {
        setSucess(ime);
    }

    if (prezimeVrednost === '') {
        setError(prezime,'Prezime je obavezno!');
    } else if (!isNameValid(prezimeVrednost)) {
        setError(prezime,"Prezime sadrzi samo slova!");
    } else {
        setSucess(prezime);
    }

    if (brojVrednost === '') {
     setError(broj,"Polje je obavezno!");
    } else if (!isMobileValid(brojVrednost)) {
        setError(broj,"Nije validan mobilni");
    } else {
        setSucess(broj)
  }

};





const popupOpen = document.querySelectorAll('.js-popup-open');
const modals = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.close-btn');

//LISTENERS
closeButton.forEach(button => button.addEventListener('click', () => {removeModals()}));

popupOpen.forEach((popup, i) => {
    popup.addEventListener('click', () => { 
        showModal(i);
    });
});





// FUNCTIONS


function showModal(index) {
    removeModals();
    modals[index].style.display='block';
}

function removeModals() {
    modals.forEach(modal => modal.style.display='none');
}



 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = 'none';
     }
 } 

 function openEl(){
 modalDrugi.style.display = 'block';
 }

 close1.onclick = function() {
 modalDrugi.style.display = 'none';
 }

 window.onclick = function(event) {
     if (event.target == modal) {
         modalDrugi.style.display = 'none';
     }
 }

 



