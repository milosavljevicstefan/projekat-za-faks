var naziv = document.getElementById('naziv')
if (naziv) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("naziv");
    console.log(c);
    naziv.innerHTML = c;
}

var slika = document.getElementById('slika')
if (slika) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("slika")
    console.log(c)
    slika.src = c
}

var brojLekcija = document.getElementById('brojLekcija')
if (brojLekcija) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("brojLekcija");
    brojLekcija.innerHTML = "Broj lekcija: " + c;
}

var kategorija = document.getElementById('kategorija')
if (kategorija) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("kategorija");
    kategorija.innerHTML = "Kategorija: " + c;
}

var jezik = document.getElementById('jezik')
if (jezik) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("jezik");
    jezik.innerHTML = "Jezik: " + c;
}

var prosecnaOcena = document.getElementById('prosecnaOcena')
if (prosecnaOcena) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("prosecnaOcena");
    prosecnaOcena.innerHTML = "Prosecna ocena: " + c;
}

var brojKorisnika = document.getElementById('brojKorisnika')
if (brojKorisnika) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("brojKorisnika");
    brojKorisnika.innerHTML = "Broj korisnika: " + c;
}

var sertifikovan = document.getElementById('sertifikovan')
if (sertifikovan) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("sertifikovan");
    sertifikovan.innerHTML = "Sertifikovan: " + c[0].toUpperCase() + c.substring(1);
}

var cena = document.getElementById('cena')
if (cena) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("cena");
    cena.innerHTML = "Cena: " + c + " din";
}

var opis = document.getElementById('opis')
if (opis) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("opis");
    opis.innerHTML = c;
}

var izmeniButton = document.getElementById('izmeni-kurs')
if (izmeniButton) {
    console.log(izmeniButton);
    izmeniButton.addEventListener('click', function() {
        console.log("click")
        var url_string = window.location.href;
        var url = new URL(url_string);

        var autor = url.searchParams.get("autor");
        console.log(autor);
        var autorTd = document.getElementById("autorTd") ;
        autorTd.value = autor;

        var brojKorisnika = url.searchParams.get("brojKorisnika");
        var brojKorisnikaTd = document.getElementById("brojKorisnikaTd");
        brojKorisnikaTd.value = brojKorisnika;

        var brojLekcija = url.searchParams.get("brojLekcija");
        var brojLekcijaTd = document.getElementById("brojLekcijaTd");
        brojLekcijaTd.value = brojLekcija;

        var cena = url.searchParams.get("cena");
        var cenaTd = document.getElementById('cenaTd');
        cenaTd.value = cena;

        var jezik = url.searchParams.get("jezik");
        var jezikTd = document.getElementById('jezikTd');
        jezikTd.value = jezik;

        var kategorija = url.searchParams.get("kategorija");
        var kategorijaTd = document.getElementById('kategorijaTd');
        kategorijaTd.value = kategorija;

        var naziv = url.searchParams.get("naziv");
        var nazivTd = document.getElementById('nazivTd');
        nazivTd.value = naziv;

        var opis = url.searchParams.get("opis");
        var opisTd = document.getElementById('opisTd');
        opisTd.value = opis;

        var prosecnaOcena = url.searchParams.get("prosecnaOcena");
        var prosecnaOcenaTd = document.getElementById('prosecnaOcenaTd');
        prosecnaOcenaTd.value = prosecnaOcena;

        var sertifikovan = url.searchParams.get("sertifikovan");
        var sertifikovanTd = document.getElementById('sertifikovanTd');
        sertifikovanTd.value = sertifikovan;

        var slika = url.searchParams.get("slika");
        var slikaTd = document.getElementById('slikaTd');
        slikaTd.value = slika;

        var izmeniButton = document.getElementById("izmeni-kurs-final");
        console.log(izmeniButton);
        console.log(nazivTd);
    })
}




