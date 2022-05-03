var firebaseUrl3 = "https://knjizara-b9757-default-rtdb.firebaseio.com/knjige/" + window.location.search.split("=")[1] + ".json";


var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {

            var knjiga = JSON.parse(request.responseText);
            

           


            

            var slika = document.createElement("img");
            slika.src = knjiga["slika"];
            slika.classList.add("img-izmena")
        
            
            var div= document.createElement("div");
    
            var naziv = document.createElement("h3");
            naziv.classList.add("naslov");
            naziv.innerHTML=knjiga['naziv'];
            var cena = document.createElement("p");
            cena.innerHTML=knjiga['cena'] + " RSD";
            cena.classList.add("cena");
            var isbn = document.createElement("p")
            isbn.innerText = "ISBN:" + knjiga["isbn"];
            isbn.classList.add("zbirno");
            var autor = document.createElement("p");
            autor.innerHTML=knjiga['autor'];
            autor.classList.add("autor");
            var opis = document.createElement("p")
            opis.innerText = knjiga["opis"]
            var izdavac = document.createElement("p")
            izdavac.innerText = "Izdavacka kuca - " + knjiga["izdavackaKuca"];
            izdavac.classList.add("zbirno");
            var godina = document.createElement("p")
            godina.innerText = "Godina izdavanja - " + knjiga["godinaIzdavanja"];
            godina.classList.add("zbirno");
            var stranica = document.createElement("p")
            stranica.innerText = "Broj stranica- " + knjiga["brojStranica"];
            stranica.classList.add("zbirno");
            var jezik = document.createElement("p")
            jezik.innerText = "Jezik - " + knjiga["jezik"];
            jezik.classList.add("zbirno");
            var pismo = document.createElement("p")
            pismo.innerText = "Pismo - " + knjiga["pismo"];
            pismo.classList.add("zbirno");

            let editBt = document.createElement('a');
                editBt.innerHTML="izmeni";
                editBt.classList.add("del");
                editBt.href = "izmenaKnjige.html";
                
            
            
            // div.appendChild(slika);
            var divProba = document.getElementById("opis");

            var divProbaSlika = document.getElementById("slikadiv");
            var divSlika= document.createElement("div");
            divProbaSlika.appendChild(divSlika);
            divSlika.appendChild(slika)
            divProba.appendChild(div);
            // div.appendChild(slika)
            div.appendChild(naziv);
            div.appendChild(autor);
            div.appendChild(cena);
            
            div.appendChild(opis)
            div.appendChild(isbn);
            div.appendChild(izdavac)
            div.appendChild(godina)
            div.appendChild(stranica)
            div.appendChild(jezik)
            div.appendChild(pismo)
          
            div.appendChild(editBt);

    }
    }
}
request.open('GET',firebaseUrl3,true );
request.send();