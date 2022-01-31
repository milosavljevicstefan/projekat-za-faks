var formLogin = document.getElementById('forma-prijave');
var emailLogin = document.getElementById('email-prijave');
var lozinkaLogin = document.getElementById('lozinka-prijave');
var firebaseUrl = 'https://prvi-projekat-za-faks-default-rtdb.europe-west1.firebasedatabase.app';

var korisniciId = [];
korisnici = {};

document.addEventListener("DOMContentLoaded", function (e) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                korisnici = JSON.parse(request.responseText);
                for (var id in korisnici) {
                    var korisnik = korisnici[id];
                    korisnik.id = id

                    korisniciId.push(id);
                }
                console.log(korisnici)
            } else {
                alert('Doslo je do greske. Neuspesno ucitavanje korisnika!')
            }
        }
    }

    request.open('GET', firebaseUrl + '/korisnici.json');
    request.send();
});

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    emailAuth = emailLogin.value;
    lozinkaAuth = lozinkaLogin.value;
    var e = 0;
    var l = 0
    var korisniciAuth = Object.values(korisnici)
    for (var i = 0; i < korisniciAuth.length; i++) {
        // console.log(korisnici[korisniciId[i]]);
        // console.log(korisnici[i]);
        
        if (emailAuth == korisniciAuth[i].email) {
            console.log("Autorivan za mail");
            e = 1;
        }
        if (lozinkaAuth == korisniciAuth[i].lozinka) {
            console.log("Autorivan za lozinku");
            l = 1
        }
    }
    if (l == 1 && e == 1) {
        alert("Prijava je uspesna!")
    } else {
        alert("Netacni podaci za prijavu!")
    }
})