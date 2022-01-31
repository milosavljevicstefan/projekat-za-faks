
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
    administratorskeOpcijeViewTd.addEventListener('click', function() {
        var izmeniButton = document.getElementById("izmeni-button");
         izmeniButton.addEventListener('click', function (e) {
            
             console.log("usao");
             console.log(e)

             var id = korisnik.id;
             console.log(id)

             var adresaEdit = document.getElementById("adresa").value;
             korisnik.adresa = adresaEdit;

             var datumEdit = document.getElementById("datum").value;
             korisnik.datumRodjenja = datumEdit;

             var emailEdit = document.getElementById("email").value;
             korisnik.email = emailEdit;

             var imeEdit = document.getElementById("imeModal").value;
             korisnik.ime = imeEdit;

             var sifraEdit = document.getElementById("lozinka").value;
             korisnik.lozinka = sifraEdit;

             var prezimeEdit = document.getElementById("prezime").value;
             korisnik.prezime = prezimeEdit;

             var telefonEdit = document.getElementById("telefon").value;
             korisnik.telefon = telefonEdit;

             var korisnickoImeEdit = document.getElementById("korisnickoIme").value;
             korisnik.korisnickoIme = korisnickoImeEdit;

             var errorElement = document.getElementById("errorEdit");
             let msg = []

            if (korisnickoImeEdit.trim() === '' || korisnickoImeEdit.trim() == null) {
                msg.push('Korisnicko ime ne sme biti prazno!')
            }

            if (imeEdit.trim() === '' || imeEdit.trim() == null) {
                msg.push('Ime ne sme biti prazno!')
            }

            if (prezimeEdit.trim() === '' || prezimeEdit.trim() == null) {
                msg.push('Prezime ne sme biti prazno!')
            }

            if (adresaEdit.trim() === '' || adresaEdit.trim() == null) {
                msg.push('Adresa ne sme biti prazna!')
            }

            if (telefonEdit.trim() === '' || telefonEdit.trim() == null) {
                msg.push('Telefon ne sme biti prazan!')
            }

            if (emailEdit.trim() === '' || emailEdit.trim() == null) {
                msg.push('Email ne sme biti prazan!')
            }

            if (sifraEdit.trim() === '' || sifraEdit.trim() == null) {
                msg.push('Lozinka ne sme biti prazna!')
            }

            if (korisnickoImeEdit.trim().length < 4 || korisnickoImeEdit.trim().length > 13) {
                msg.push('Korisnicko ime mora biti izmedju 4 i 13 karaktera')
            }
            
            var datumDanasnjiInput = new Date();
            var dd = String(datumDanasnji.getDate()).padStart(2, '0');
            var mm = String(datumDanasnji.getMonth() + 1).padStart(2, '0');
            var yyyy = datumDanasnji.getFullYear();

            var neznamvise = datumEdit.split('-');
            var datum = new Date(neznamvise[0], neznamvise[1] - 1, neznamvise[2]);        

            if (datum > datumDanasnji) {
                msg.push('Datum rodjenja ne moze biti u buducnosti!')
            }

            if (sifraEdit.trim().length < 6 || sifraEdit.trim().length > 13) {
                msg.push('Lozinka mora biti izmedju 6 i 13 karaktera')
            }

            if (msg.length > 0) {
                e.preventDefault()
                errorElement.innerText = msg.join('\n');
                
            } else {
                var request = new XMLHttpRequest();
                request.open('Put', firebaseUrl + '/korisnici/' + korisnik.id + '.json', true);
                request.send(JSON.stringify(korisnik));
                console.log("Izvrsena izmena")
                if (confirm("Izmena je uspesna!")) {
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            }
         });
        
         var obrisiButton = document.getElementById("obrisi-button");
         console.log(obrisiButton);
         obrisiButton.addEventListener("click", function () {
            if (confirm("Potvrdite brisanje naloga!")) {
                console.log("potvrdjeno");
                var request = new XMLHttpRequest();
                request.open('DELETE', firebaseUrl + '/korisnici/' + korisnik.id + '.json', true);
                request.send();
                if (confirm("Brisanje korisnika je uspesno!")) {
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            } else {
                console.log("nije potvrdjeno");
                window.location.reload();
            }
         })
    })
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

