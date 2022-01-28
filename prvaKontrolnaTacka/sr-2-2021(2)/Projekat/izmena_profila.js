const form = document.getElementById('form');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const datumrodjenja = document.getElementById('datumrodjenja');
const mobilni = document.getElementById('mobilni');
const mejl = document.getElementById('mejl');
const lozinka = document.getElementById('lozinka');
const potvrdaLozinke = document.getElementById('potvrdalozinke');

const formaregistracija = document.getElementById('formaregistracija');
const ime1 = document.getElementById('ime1');
const korisnickoime = document.getElementById('korisnickoime');
const lozinka1 = document.getElementById('lozinka1');
const potvrdalozinke = document.getElementById('potvrdalozinke');
const mejl1 = document.getElementById('mejl1');
const prezime1 = document.getElementById('prezime1');
const datumrodjenja1 = document.getElementById('datumrodjenja1');
const broj = document.getElementById('broj');



form.addEventListener('submit',e => {
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
inputControl.classList.remove('success')
}
const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isMobileValid = mobilni => {
const re = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}$/
return re.test(mobilni);
}


const isNameValid = ime => {
const re = /[A-Z][a-zA-Z]+$/
return re.test(ime);
}

const isMejlValid = mejl => {
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
return re.test(mejl)
}

const isPassValid = lozinka => {
const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
return re.test(lozinka)
}



const isUsernameValid = korisnickoime => {
    const re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    return re.test(korisnickoime)
    }

const validateInputs = () => {
    const imeVrednost = ime.value.trim();
    const mejlVrednost = mejl.value.trim();
    const prezimeVrednost = prezime.value.trim();
    const datumrodjenjaVrednost = datumrodjenja.value.trim();
    const mobilniVrednost = mobilni.value.trim();
    const lozinkaVrednost = lozinka.value.trim();
    const potvrdaLozinkeVrednost = potvrdaLozinke.value.trim();


    const ime1Vrednost = ime1.value.trim();
    const korisnickoimeVrednost = korisnickoime.value.trim();
    const lozinka1Vrednost = lozinka1.value.trim();
    const potvrdalozinkeVrednost = potvrdalozinke.value.trim();
    const mejl1Vrednost = mejl1.value.trim();
    const prezime1Vrednost = prezime1.value.trim();
    const brojVrednost = broj.value.trim();
    

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

    if (mejlVrednost === '') {
        setError(mejl,'Polje je obavezno!');
 } else if (!isMejlValid(mejlVrednost)) {
     setError(mejl,"Nije validan mejl!");
 } else {
     setSucess(mejl);
 }

 if (datumrodjenjaVrednost === '') {
     setError(datumrodjenja,"Obavezno polje!");
 } else {
     setSucess(datumrodjenja);
 }

 if (mobilniVrednost === '') {
     setError(mobilni,"Polje je obavezno!");
    } else if (!isMobileValid(mobilniVrednost)) {
        setError(mobilni,"Nije validan mobilni");
    } else {
        setSucess(mobilni)
  }

  if (lozinkaVrednost === '') {
      setError(lozinka,'Polje je obavezno!');
  } else if (!isPassValid(lozinkaVrednost)) {
      setError(lozinka,"Nije validna lozinka")
  } else {
      setSucess(lozinka)
  }

  if (potvrdaLozinke === '') {
      setError(potvrdaLozinke,'Molim vas potvrdite lozinku!') 
 } else if (lozinkaVrednost !== potvrdaLozinkeVrednost) {
     setError(potvrdaLozinke,"Ne podudaraju se");

  } else {
      setSucess(potvrdaLozinke)
      }



      if (korisnickoimeVrednost === '') {
        setError(korisnickoime,'Obavezno polje');
    } else if (!isUsernameValid(korisnickoimeVrednost)) {
        setError(korisnickoime,"Korisnicko ime ne sme sadrzati _ ili .,vec samo slova i brojeve,mora biti dugacko od 8 do 20 karaktera");
    } else {
        setSucess(korisnickoime);
    }


      if (ime1Vrednost === '') {
        setError(ime1,'Ime je obavezno!');
    } else if (!isNameValid(ime1Vrednost)) {
        setError(ime1,"Ime sadrzi samo slova i pocinje velikim slovom!");
    } else {
        setSucess(ime1);
    }


    if (lozinka1Vrednost === '') {
        setError(lozinka1,'Obavezno polje!');
    } else if (!isPassValid(lozinkaVrednost)) {
        setError(lozinka1,'Ovo ne moze biti lozinka,minimun 8 karaktera,barem 1 slovo i jedan broj!');
    } else  {
        setSucess(lozinka1)
    }
    
  if (potvrdalozinke === '') {
      setError(potvrdalozinke,'Molim vas potvrdite lozinku!') 
 } else if (lozinkaVrednost !== potvrdalozinkeVrednost) {
     setError(potvrdalozinke,"Ne podudaraju se");

  } else {
      setSucess(potvrdalozinke)
      }


      if (mejl1Vrednost === '') {
        setError(mejl1,'Polje je obavezno!');
 } else if (!isMejlValid(mejl1Vrednost)) {
     setError(mejl1,"Nije validan mejl!");
 } else {
     setSucess(mejl1);
 }


 if (prezime1Vrednost === '') {
    setError(prezime1,'Obavezno polje!');
} else if (!isNameValid(prezime1Vrednost)) {
    setError(prezime1,"Prezime sadrzi samo slova,i pocinje velikim!");
} else {
    setSucess(prezime1);
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



// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// } 

// function openEl(){
// modalDrugi.style.display = 'block';
// }

// close1.onclick = function() {
// modalDrugi.style.display = 'none';
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modalDrugi.style.display = 'none';
//     }
// }
