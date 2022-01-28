
var firebaseUrl = 'https://prvi-projekat-za-faks-default-rtdb.europe-west1.firebasedatabase.app';

var korisniciId = [];
var korisnici = {};


// GET all korisnici
document.addEventListener("DOMContentLoaded", function (e) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                removeTableRows('sviKorisnici');
                korisniciId = [];

                korisnici = JSON.parse(request.responseText);

                for (var id in korisnici) {
                    var korisnik = korisnici[id];
                    korisnik.id = id
                    //Provera
                    /* console.log(korisnik); */
                    appendKorisnikRow('sviKorisnici', korisnik);

                    korisniciId.push(id);
                }
                /* console.log(korisnici) */
            } else {
                alert('Doslo je do greske. Neuspesno ucitavanje korisnika!')
            }
        }
    }

    request.open('GET', firebaseUrl + '/korisnici.json');
    request.send();
});

// GET by id
// var getByIdButton = document.getElementById('getByIdButton');
// getByIdButton.addEventListener('click', function (e) {
//     var request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             if (this.status == 200) {
//                 removeTableRows('oneCar');

//                 var car = JSON.parse(request.responseText);
//                 appendCarRow('oneCar', car);
//             } else {
//                 alert('Error occurred. Car could not be loaded.')
//             }
//         }
//     }

//     request.open('GET', firebaseUrl + '/cars/' + carIds[1] + '.json');
//     request.send();
// });

// // PUT
// var putButton = document.getElementById('putButton');
// putButton.addEventListener('click', function (e) {
//     var carId = carIds[1];
//     var car = cars[carId];
//     car.year = 2020;

//     var request = new XMLHttpRequest();
//     request.open('PUT', firebaseUrl + '/cars/' + carId + '.json', true);
//     request.send(JSON.stringify(car));
// });

// // DELETE
// var deleteButton = document.getElementById('deleteButton');
// deleteButton.addEventListener('click', function (e) {
//     var request = new XMLHttpRequest();
//     request.open('DELETE', firebaseUrl + '/cars/' + carIds[2] + '.json', true);
//     request.send();
// });

// *********************************************
//               POMOCNE FUNCKIJE
// *********************************************
var korisnikList = [];

function appendKorisnikRow(position, korisnik) {
    var korisnikRow = document.createElement('tr');
    
    var adresaTd = document.createElement('td');
    adresaTd.innerText = korisnik.adresa;
    korisnikRow.appendChild(adresaTd);
    
    var datumRodjenjaTd = document.createElement('td');
    datumRodjenjaTd.innerText = korisnik.datumRodjenja;
    korisnikRow.appendChild(datumRodjenjaTd);
    
    var emailTd = document.createElement('td');
    emailTd.innerText = korisnik.email;
    korisnikRow.appendChild(emailTd);
    emailTd.className = "proba";
    
    var imeTd = document.createElement('td')
    imeTd.innerText = korisnik.ime;
    korisnikRow.appendChild(imeTd);
    
    var lozinkaTd = document.createElement('td')
    lozinkaTd.innerText = korisnik.lozinka;
    korisnikRow.appendChild(lozinkaTd)
    
    var prezimeTd = document.createElement('td')
    prezimeTd.innerText = korisnik.prezime;
    korisnikRow.appendChild(prezimeTd)
    
    var telefonTd = document.createElement('td')
    telefonTd.innerText = korisnik.telefon;
    korisnikRow.appendChild(telefonTd)
    
    var korisnickoImeTd = document.createElement('td')
    korisnickoImeTd.innerText = korisnik.korisnickoIme;
    korisnikRow.appendChild(korisnickoImeTd)
    
    korisnikList.push([korisnik.ime])
    var administratorskeOpcijeViewTd = document.createElement('td')
    console.log(korisnik)
    administratorskeOpcijeViewTd.innerHTML = '<button id="' + korisnik.id + '" type="button" class="btn btn-primary" data-toggle="modal" data-target="#view" >Pregled korisnika</button>'
    korisnikRow.appendChild(administratorskeOpcijeViewTd)
    
    document.getElementById(position).appendChild(korisnikRow);

    document.getElementById(korisnik.id).addEventListener("click", function() {
        FillTboxesKorisnik(korisnik)
    })

}

var adresaModal = document.getElementById('adresa');
var datumModal = document.getElementById('datum');
var emailModal = document.getElementById('email');
var imeModal = document.getElementById('imeModal');
var lozinkaModal = document.getElementById('lozinka');
var prezimeModal = document.getElementById('prezime');
var telefonModal = document.getElementById('telefon');
var korisnickoImeModal = document.getElementById('korisnickoIme');

function FillTboxesKorisnik(korisnik) {

        var adresaModal = document.getElementById('adresa');
        adresaModal.value = korisnik.adresa;
        var datumModal = document.getElementById('datum');
        datumModal.value = korisnik.datumRodjenja;
        var emailModal = document.getElementById('email');
        emailModal.value = korisnik.email;
        var imeModal = document.getElementById('imeModal');
        imeModal.value = korisnik.ime;
        var lozinkaModal = document.getElementById('lozinka');
        lozinkaModal.value = korisnik.lozinka;
        var prezimeModal = document.getElementById('prezime');
        prezimeModal.value = korisnik.prezime;
        var telefonModal = document.getElementById('telefon');
        telefonModal.value = korisnik.telefon;
        var korisnickoImeModal = document.getElementById('korisnickoIme');
        korisnickoImeModal.value = korisnik.korisnickoIme;
        console.log("Lozinka" + lozinkaModal + "telefon: " + telefonModal);
        var pogledajBtn = document.getElementById('pogledaj-profil')
        /* console.log(pogledajBtn) */
        pogledajBtn.addEventListener('click', function() {
            var longPath = window.location.pathname+window.location.search
            var pathStrSplit = longPath.split('/')
            const fileName = pathStrSplit.pop()
            const directoryName = pathStrSplit.join('/')
            window.open(directoryName + '/korisnik.html?' + 'ime=' + korisnik.ime + '&korisnickoIme=' + korisnik.korisnickoIme + '&prezime=' + korisnik.prezime + '&datum=' + korisnik.datumRodjenja + '&adresa=' + korisnik.adresa + '&telefon=' + korisnik.telefon + '&email=' + korisnik.email, "_self")

            setTimeout(() => {
                if ( document.getElementById('korisnicko-ime') ) {
                    console.log("YES")
                }
            }, 2000);
        })
}

// Brise sve redove iz tabele
function removeTableRows(tBody) {
    var tBody = document.getElementById(tBody);
    while (tBody.firstChild) {
        tBody.removeChild(tBody.lastChild);
    }
}

