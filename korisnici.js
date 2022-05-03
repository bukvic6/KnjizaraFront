var firebaseUrl3 = 'https://wd-bookstore-default-rtdb.firebaseio.com/korisnici.json';
// var listakorisnika = {};
// var listakorisnikaID = [];
var request = new  XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4) {
        if (this.status == 200) {
            var korisnici = JSON.parse(request.responseText);

            console.log(korisnici);
            for (let id in korisnici) {
                
                var korisnik = korisnici[id];
                // listakorisnikaID.push(id);
                // console.log(korisnik);

                var main = document.getElementById ("podaci");
                var tr = document.createElement ("tr");
                tr.classList.add ("linija");

            
                var prezime = document.createElement ("td");
                prezime.innerHTML = korisnik["prezime"];

                var ime = document.createElement ("td");
                ime.innerHTML = korisnik["ime"];

                var email = document.createElement ("td");
                email.innerHTML = korisnik["email"];

                // var button = document.createElement('button');
                // button.innerHTML =  "Edit";
                // button.classList.add("edit");

                var editBtn = document.createElement('button');
                editBtn.innerHTML="izmeni";
                editBtn.classList.add ("button");
                editBtn.addEventListener('click', function(e){
                    location.href = "korisnikizmena.html";
                })
                var delBtn = document.createElement('button');
                delBtn.innerHTML="Izbrisi";
                delBtn.classList.add ("del");
                delBtn.addEventListener('click', function(e){
                    alert("uspesno ste izbrisali korisnika");
                })
                // editBtn.type = 'button';
                // editBtn.innerText = 'Izmeni';
                // editBtn.onclick = showEditPage;
                // editBtn.setAttribute('data-id', id);
                



                // edit kroisnika funkcija


                // button.addEventListener('click', function() {
                //     window.location = "korisnik.html";
                // });


                main.appendChild(tr);
                tr.appendChild(prezime);
                tr.appendChild(ime);
                tr.appendChild(email);
                tr.appendChild(editBtn);
                tr.appendChild(delBtn);
                
                
            }
        }
        else {
            alert("greska: " + this.status)
        }
    }

};
    

request.open("GET", firebaseUrl3);
request.send();

