var firebaseUrl = 'https://prvi-projekat-za-faks-default-rtdb.europe-west1.firebasedatabase.app';

var naziv = document.getElementById('naziv')
if (naziv) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("naziv");
    naziv.innerHTML = c;
}

var slika = document.getElementById('slika')
if (slika) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("slika");
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

        izmeniButton.addEventListener("click", function (e) {
            var datumIzmeneEdit = new Date();
            var dd = String(datumIzmeneEdit.getDate()).padStart(2, '0');
            var mm = String(datumIzmeneEdit.getMonth() + 1).padStart(2, '0');
            var yyyy = datumIzmeneEdit.getFullYear();

            datumIzmeneEdit = yyyy + '-' + mm + '-' + dd;
            
            const kursEdit = {}
            kursEdit.autor = document.getElementById('autorTd').value;
            kursEdit.brojKorisnika = document.getElementById('brojKorisnikaTd').value;
            kursEdit.brojLekcija = document.getElementById('brojLekcijaTd').value;
            kursEdit.cena = document.getElementById('cenaTd').value;
            kursEdit.datumIzmene = datumIzmeneEdit;
            kursEdit.id = url.searchParams.get("id");
            kursEdit.jezik = document.getElementById("jezikTd").value;
            kursEdit.kategorija = document.getElementById("kategorijaTd").value;
            kursEdit.naziv = document.getElementById("nazivTd").value;
            kursEdit.opis = document.getElementById("opisTd").value;
            kursEdit.prosecnaOcena = document.getElementById("prosecnaOcenaTd").value;
            kursEdit.sertifikovan = document.getElementById("sertifikovanTd").value;
            kursEdit.slika = document.getElementById("slikaTd").value;

            var errorElem = document.getElementById("errorKurs");
            let msg = []

            if (autorTd.value.trim() === '' || autorTd.value.trim() == null) {
                msg.push('Autor ne sme biti prazan!')
            }
            if (brojKorisnikaTd.value.trim() === '' || brojKorisnikaTd.value.trim() == null) {
                msg.push('Broj korisnika ne sme biti prazan!')
            }
            if (brojLekcijaTd.value.trim() === '' || brojLekcijaTd.value.trim() == null) {
                msg.push('Broj lekcija ne sme biti prazan!')
            }
            if (cenaTd.value.trim() === '' || cenaTd.value.trim() == null) {
                msg.push('Cena ne sme biti prazna!')
            }
            if (jezikTd.value.trim() === '' || jezikTd.value.trim() == null) {
                msg.push('Jezik ne sme biti prazan!')
            }
            if (kategorijaTd.value.trim() === '' || kategorijaTd.value.trim() == null) {
                msg.push('Kategorija ne sme biti prazna!')
            }
            if (opisTd.value.trim() === '' || opisTd.value.trim() == null) {
                msg.push('Opis ne sme biti prazan!')
            }
            if (prosecnaOcenaTd.value.trim() === '' || prosecnaOcenaTd.value.trim() == null) {
                msg.push('Prosecna ocena ne sme biti prazna!')
            }
            if (sertifikovanTd.value.trim() === '' || sertifikovanTd.value.trim() == null) {
                msg.push('Sertifikovan polje ne sme biti prazno!')
            }
            if (slikaTd.value.trim() === '' || slikaTd.value.trim() == null) {
                msg.push('Slika ne sme biti prazna!')
            }

            if (cenaTd.value < 0) {
                msg.push('Cena mora biti pozitivna!');
            }

            if (sertifikovanTd.value === 'da' || sertifikovanTd.value === 'ne') {
                
            } else {
                msg.push("sertifikat moze da bude da ili ne!");
            }


            if (msg.length > 0) {
                e.preventDefault();
                errorElem.innerText = msg.join('\n');

            } else {
                var request = new XMLHttpRequest();
                request.open('PUT', firebaseUrl + '/kursevi/' + kursEdit.id + '.json', true);
                request.send(JSON.stringify(kursEdit));
                console.log("uradjena izmena");
                
                if (confirm("Izmena je uspesna!")) {
                    var longPath = window.location.pathname
                var pathStrSplit = longPath.split('/')
                const fileName = pathStrSplit.pop()
                const directoryName = pathStrSplit.join('/')
                window.open(directoryName + '/index.html', '_self');
                } else {
                    var longPath = window.location.pathname
                var pathStrSplit = longPath.split('/')
                const fileName = pathStrSplit.pop()
                const directoryName = pathStrSplit.join('/')
                window.open(directoryName + '/index.html', '_self');
                }
            }
        })
    })
}

var obrisiButton = document.getElementById("obrisi-kurs");
obrisiButton.addEventListener("click", function () {
    kursDeleteId = url.searchParams.get("id");
    console.log(kursDeleteId);
    if (confirm("Da li ste sigurni da zelite da izbrisete ovaj kurs?")) {
        var request = new XMLHttpRequest();
        request.open('DELETE', firebaseUrl + '/kursevi/' + kursDeleteId + '.json', true);
        request.send();
    }
})
console.log(obrisiButton);



