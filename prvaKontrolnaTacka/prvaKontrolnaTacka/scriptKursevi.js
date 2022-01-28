var firebaseUrl = 'https://prvi-projekat-za-faks-default-rtdb.europe-west1.firebasedatabase.app';

var kurseviId = [];
var kursevi = {};

// GET all kursevi
document.addEventListener("DOMContentLoaded", function (e) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("Usao")
                kurseviId = [];

                kursevi = JSON.parse(request.responseText);

                for (var id in kursevi) {
                    var kurs = kursevi[id];
                    kurs.id = id
                    appendKursRow('sviKursevi', kurs);
                    kurseviId.push(id);
                }
            } else {
                alert('Doslo je do greske. Neuspesno ucitavanje kurseva!')
            }
        }
    }

    request.open('GET', firebaseUrl + '/kursevi.json');
    request.send();
})





            // <div class="col">
            //     <div class="card" style="width: 18rem;">
            //         <img class="card-img-top" src="./src/slike za kurseve/java.png" alt="Card image cap">
            //         <div class="card-body">
            //             <h5 class="card-title" style="text-align: center;">Java i Objektno orijentisano programiranje</h5>
            //             <p class="card-text">Poznavanje Java programskog jezika vaša je polazna stanica za ulazak u svet programiranja.</p>
            //             <p class="card-text">Cena: 9 455 din</p>
            //             <a href="./kurs.html" class="btn btn-primary">Više informacija...</a>
            //         </div>
            //     </div>
            // </div>

kurseviList = [];

function appendKursRow(position, kurs) {
    var kursRow = document.createElement('div');
    kursRow.className = "col"

    var cardDiv = document.createElement('div')
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";

    var img = document.createElement('img');
    img.className = "card-img-top";
    img.src = kurs.slika;
    img.alt = "Card image cap";
    cardDiv.appendChild(img);

    var bodyDiv = document.createElement('div')
    bodyDiv.className = "card-body"

    var naslov = document.createElement('h5')
    naslov.className = "card-title";
    naslov.style = "text=align: center;"
    naslov.innerText = kurs.naziv;
    bodyDiv.appendChild(naslov);

    var opisP = document.createElement('p');
    opisP.className = "card-text";
    var seckano = kurs.opis;
    seckano = seckano.slice(0, 200);
    opisP.innerText = seckano + '...';
    bodyDiv.appendChild(opisP);

    var cenaP = document.createElement('p');
    cenaP.className = "card-text";
    cenaP.innerText = "Cena: " + kurs.cena + " din"
    bodyDiv.appendChild(cenaP);

    var kursButton = document.createElement('button');
    kursButton.className = "btn btn-primary";
    kursButton.innerText = "Vise informacija...";
    kursButton.addEventListener('click', function() {
        var longPath = window.location.pathname+window.location.search
        var pathStrSplit = longPath.split('/')
        const fileName =pathStrSplit.pop()
        const directoryName = pathStrSplit.join('/')
        window.open(directoryName + '/kurs.html?' + 'brojKorisnika=' + kurs.brojKorisnika + '&brojLekcija=' + kurs.brojLekcija + '&cena=' + kurs.cena + '&id=' + kurs.id + '&jezik=' + kurs.jezik + '&kategorija=' + kurs.kategorija + '&naziv=' + kurs.naziv + '&opis=' + kurs.opis + '&prosecnaOcena=' + kurs.prosecnaOcena + '&sertifikovan=' + kurs.sertifikovan + '&slika=' + kurs.slika + '&autor=' + kurs.autor + '&', "_self")
    })
    bodyDiv.appendChild(kursButton);

    cardDiv.appendChild(bodyDiv);
    kursRow.appendChild(cardDiv);

    document.getElementById(position).appendChild(kursRow)
}