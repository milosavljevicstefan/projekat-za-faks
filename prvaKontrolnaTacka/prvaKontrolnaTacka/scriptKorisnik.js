var ime = document.getElementById('ime') 

if ( ime ) {
    console.log("YES")
    var url_string = window.location.href; //window.location.href
    console.log(url_string)
    var url = new URL(url_string)
    var c = url.searchParams.get("ime")
    ime.innerHTML = "Ime: " + c
}

var korisnickoIme = document.getElementById('korisnicko-ime')

if ( korisnickoIme ) {
    var url_string = window.location.href;
    var url = new URL(url_string)
    var c = url.searchParams.get("korisnickoIme")
    korisnickoIme.innerHTML = "Korisnicko ime: " + c
}

var prezime = document.getElementById('prezime') 

if ( prezime ) {
    var url_string = window.location.href; 
    var url = new URL(url_string)
    var c = url.searchParams.get("prezime")
    prezime.innerHTML = "Prezime: " + c
}

var datum = document.getElementById('datum') 

if ( datum ) {
    var url_string = window.location.href;
    var url = new URL(url_string)
    var c = url.searchParams.get("datum")
    datum.innerHTML = "Datum rodjenja: " + c
}

var adresa = document.getElementById('adresa') 

if ( adresa ) {
    var url_string = window.location.href;
    var url = new URL(url_string)
    var c = url.searchParams.get("adresa")
    adresa.innerHTML = "Adresa stanovanja: " + c
}

var telefon = document.getElementById('telefon') 

if ( telefon ) {
    var url_string = window.location.href;
    var url = new URL(url_string)
    var c = url.searchParams.get("telefon")
    telefon.innerHTML = "Broj telefona: " + c
}

var email = document.getElementById('email') 

if ( email ) {
    var url_string = window.location.href;
    var url = new URL(url_string)
    var c = url.searchParams.get("email")
    email.innerHTML = "Email adresa: " + c
}


