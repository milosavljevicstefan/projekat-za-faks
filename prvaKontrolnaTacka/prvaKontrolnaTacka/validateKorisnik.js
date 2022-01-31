console.log("validate")
const form = document.getElementById("validateKorisnik");
const korisnickoIme = document.getElementById("korisnickoImeInput");
const ime = document.getElementById("imeInput");
const prezime = document.getElementById("prezimeInput");
const datumRodjenja = document.getElementById("datumRodjenjaInput");
const adresa = document.getElementById("adresaInput");
const telefon = document.getElementById("telefonInput");
const email = document.getElementById("emailInput");
const lozinka = document.getElementById("lozinkaInput");
const errorElement = document.getElementById("error");

var datumDanasnji = new Date();
var dd = String(datumDanasnji.getDate()).padStart(2, '0');
var mm = String(datumDanasnji.getMonth() + 1).padStart(2, '0');
var yyyy = datumDanasnji.getFullYear();

console.log(datumDanasnji);

form.addEventListener('submit', (e) => {
    let msg = []

    if (korisnickoIme.value.trim() === '' || korisnickoIme.value.trim() == null) {
        msg.push('Korisnicko ime ne sme biti prazno!')
    }

    if (ime.value.trim() === '' || ime.value.trim() == null) {
        msg.push('Ime ne sme biti prazno!')
    }

    if (prezime.value.trim() === '' || prezime.value.trim() == null) {
        msg.push('Prezime ne sme biti prazno!')
    }

    if (adresa.value.trim() === '' || adresa.value.trim() == null) {
        msg.push('Adresa ne sme biti prazna!')
    }

    if (telefon.value.trim() === '' || telefon.value.trim() == null) {
        msg.push('Telefon ne sme biti prazan!')
    }

    if (email.value.trim() === '' || email.value.trim() == null) {
        msg.push('Email ne sme biti prazan!')
    }

    if (lozinka.value.trim() === '' || lozinka.value.trim() == null) {
        msg.push('Lozinka ne sme biti prazna!')
    }

    if (korisnickoIme.value.trim().length < 4 || korisnickoIme.value.trim().length > 13) {
        msg.push('Korisnicko ime mora biti izmedju 4 i 13 karaktera')
    }
    
    
    var neznamvise = datumRodjenja.value.split('-');
    var datum = new Date(neznamvise[0], neznamvise[1] - 1, neznamvise[2]);

    if (datum > datumDanasnji) {
        msg.push('Datum rodjenja ne moze biti u buducnosti!')
    }

    if (lozinka.value.trim().length < 6 || lozinka.value.trim().length > 13) {
        msg.push('Lozinka mora biti izmedju 6 i 13 karaktera')
    }

    if (msg.length > 0) {
        e.preventDefault()
        errorElement.innerText = msg.join('\n');
    }
})